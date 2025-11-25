// tests for words function (words.js)
import words from '../src/words.js';
import unicodeWords from '../src/.internal/unicodeWords.js';

// we mock the unicodeWords module to be used during this test
jest.mock('../src/.internal/unicodeWords.js');

describe('words()', () => {
    // before each test we reset the unicodeWords mock
    beforeEach(() => {
        jest.clearAllMocks();
    });
    
    // first test basic words 
    test('Split a string with only alphanumeric character words', () => {
        expect(words('apple, banana, and kiwi'))
            .toBeArray()
            .toIncludeSameMembers(['apple', 'banana', 'and', 'kiwi']);
    });

    // test with numbers added to the words
    test('Split a string with words including numbers', () => {
        expect(words('ich839 esse029'))
            .toIncludeSameMembers(['ich839', 'esse029']);
    });
    
    // we test an empty input string
    test('Split an empty string', () => {
        expect(words(''))
            .toBeArray()
            .toBeEmpty();
    });
    
    // we test if '&' is not detected without giving a regexpattern for it
    test('Split string with & and without custom regex pattern provided', () => {
        const result = words('apple, banana, & kiwi');

        expect(result).toEqual(['apple', 'banana', 'kiwi']);
    });

    // and now with the correct regex pattern provided 
    test('Split string with & and custom regex pattern provided', () => {
        const result = words('apple, banana, & kiwi', /[^, ]+/g);

        expect(result).toEqual(['apple', 'banana', '&', 'kiwi']);
    });

    // we provide a custom regex pattern which does not match the normal words
    test('Empty string when the custom regex pattern is not matching anything', () => {
        expect(words('Test string outside of regex pattern.', /\d+/g))
            .toBeArray()
            .toBeEmpty();
    });

    // when we only use ascii characters we should not call unicodeWords
    // additionally the numbers without letter should be filtered out
    test('When only alphanumeric characters, unicodeWords is not called', () => {
        expect(words('Hey we are a Software Testing Team 1234'))
            .toBeArray()
            .toIncludeSameMembers(['Hey', 'we', 'are', 'a', 'Software', 'Testing', 'Team']);
        expect(unicodeWords).not.toHaveBeenCalled();
    });

    // now input unicode chars and we test that it works and that unicodeWords is called
    test('detects unicode and calls unicodeWords()', () => {
        unicodeWords.mockReturnValue(['ƁƂ', 'ȣȢȡ', 'ҖҝӼ', 'ڠۑ']);

        const result = words('ƁƂ ȣȢȡ ҖҝӼ ڠۑ');

        expect(unicodeWords).toHaveBeenCalled();
        expect(result)
            .toBeArray()
            .toEqual(['ƁƂ', 'ȣȢȡ', 'ҖҝӼ', 'ڠۑ']);
     });

    // we test that ascii and unicode together works aswell 
    test('String with alphanumeric characters and unicode', () => {
        unicodeWords.mockReturnValue(['hello', '世界']);

        expect(words('hello世界')).toEqual(['hello', '世界']);
        expect(unicodeWords).toHaveBeenCalled();
    });

    // in the code when unicodeWords returns null the words function returns []
    // so we mock the null return here
    test('When unicodeWords retuns null then words returns []', () => {
        unicodeWords.mockReturnValue(null);
        expect(words('ڠۑ')).toEqual([]);
        expect(unicodeWords).toHaveBeenCalled();
    });
});