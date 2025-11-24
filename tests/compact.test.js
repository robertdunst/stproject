// tests for compact function (compact.js)
import compact from '../src/compact.js';

describe('compact', () => {

  // true+false values
  test('array with true and false values', () => {
    expect(compact([0, 1, false, 2, '', 3])).toBe([1, 2, 3]);
    expect(compact([0, 1, true, 2, '', 3])).toBe([1, true, 2, 3]);
  })

  // only true values
  test('array with only true values', () => {
    expect(compact([0, 1, 2, 3, 4, 5])).toBe([0, 1, 2, 3, 4, 5]);
  })

  // only false values
  test('array with only false values', () => {
    expect(compact([0, "", false, null, undefined, NaN])).toBe([ ]);
  })

  // empty array
  test('array that contains no values', () => {
    expect(compact([ ])).toBe([ ]);
  })

  // nested array
  test('array that contains nested objects', () => {
    expect(compact([0, [false], {a: 0}, {b: 1}, [1]])).toBe([[false], {a: 0}, {b: 1}, [1]]);
  })

  // ###
  test('###', () => {
    expect(compact( )).toBe();
    expect(compact(null)).toBe();
    expect(compact(111)).toBe();
  })

})