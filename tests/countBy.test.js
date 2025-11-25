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
    expect(countBy(users, value => value.active)).toEqual({ true: 1, false: 0 });   // wrong output: should return 2, 1
  });

  // empty array
  test('counts elements of an empty array', () => {
    expect(countBy([], x => x)).toEqual({});
  });

  // string length
  test('counts by string length', () => {
    const words = ['a', 'bb', 'ccc', 'dddd', 'dddd'];
    expect(countBy(words, w => w.length)).toEqual({ '1': 0, '2': 0, '3': 0, '4': 1 });  // wrong output: should return 1, 1, 1, 2
  });

  // even/odd
  test('counts numbers by even/odd', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 7, 7];
    expect(countBy(numbers, n => (n % 2 === 0 ? 'even' : 'odd'))).toEqual({ odd: 5, even: 2 }); // wrong output: should return 6, 3
  });

})