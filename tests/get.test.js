// tests for get function (get.js)
import get from '../src/get.js';

describe('get()', () => {
    // first we test by giving a string path to the object
    test('Test get with string path', () => {
        const object1 = { 'a': { 'b': { 'c': 3 } } };
        const object2 = { 'a': [{ 'b': { 'c': 3 } }] }
 
        expect(get(object1, 'a.b.c'))
            .toBe(3);
        expect(get(object1, 'a.b'))
            .toEqual({ "c": 3 });
        expect(get(object2, 'a[0].b.c'))
            .toBe(3)
    })

    // now test by giving a array path to the object
    test('Test get with array path', () => {
        const object1 = { a: { b: { c: 3 } } };
        const object2 = { a: [{ b: { c: 3 } }] }

        expect(get(object1, [ 'a', 'b', 'c' ]))
            .toBe(3);
        expect(get(object2, ['a', '0', 'b', 'c']))
            .toBe(3);
        expect(get(object2, ['a']))
            .toEqual([{"b": {"c": 3}}]);
    })

    // test that default value is returned in case of failures
    test('Test defaultValue when value or path is wrong or undefined', () => {
        const object = { a: { b: { c: undefined } } };

        expect(get(object, 'a.b.c', 'default'))
            .toBe('default');
        expect(get(object, 'a.b.x', 'default'))
            .toBe('default');
        expect(get(null, 'a.b.c', 'default'))
            .toBe('default');
        expect(get(undefined, 'a.b.c', 'default'))
            .toBe('default');
        expect(get(object, '', 'default'))
            .toBe('default');
    })

    // test what happens in case of failures with no default value
    test('Test value being undefined and no default value', () => {
        const object = { a: { b: { c: undefined } } };

        expect(get(object, 'a.b.c'))
            .toBeUndefined();
        expect(get(object, 'a.b.x'))
            .toBeUndefined();
        expect(get(null, 'a.b.c'))
            .toBeUndefined();
        expect(get(undefined, 'a.b.c'))
            .toBeUndefined();
        expect(get(object, ''))
            .toBeUndefined();
    })

    // test default values which are numbers or booleans
    test('Test different default values', () => {
        expect(get({a: {} }, 'a.b', 123))
            .toBe(123)
        expect(get({a: {} }, 'a.b', false))
            .toBeFalse()
    })

    // test that actual value is returned instead of default value 
    // even if default value is 0, '' or false
    test('Test return actual value instead of default value', () => {
        expect(get({ a: 0 }, 'a', 'default'))
            .toBe(0);

        expect(get({ a: '' }, 'a', 'default'))
            .toBe('');

        expect(get({ a: false }, 'a', 'default'))
            .toBeFalse();
    })
})