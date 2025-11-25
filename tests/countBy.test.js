// tests for countBy function (countBy.js)
import countBy from '../src/countBy.js';

describe('countBy', () => {

  // basic case
  test('counts active and inactive users', () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'betty', active: true },
      { user: 'fred', active: false }
    ];
    expect(countBy(users, value => value.active)).toEqual({ true: 2, false: 1 });   // fail
  });

  // empty array
  test('counts elements of an empty array', () => {
    expect(countBy([], x => x)).toEqual({});
  });

  // string length
  test('counts by string length', () => {
    const words = ['a', 'bb', 'ccc', 'dddd', 'dddd'];
    expect(countBy(words, w => w.length)).toEqual({ '1': 1, '2': 1, '3': 1, '4': 2 });  // fail
  });

  // even/odd
  test('counts numbers by even/odd', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 7, 7];
    expect(countBy(numbers, n => (n % 2 === 0 ? 'even' : 'odd'))).toEqual({ odd: 6, even: 3 }); // fail
  });

})