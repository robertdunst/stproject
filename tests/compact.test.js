// tests for compact function (compact.js)
import compact from '../src/compact.js';

describe('compact', () => {

  // true+false values
  test('array with true and false values', () => {
    expect(compact([1, 0, false, 2, '', 3])).toStrictEqual([1, 2, 3]);
    expect(compact([0, 1, false, 2, '', 3])).toStrictEqual([1, 2, 3]);
    expect(compact([1, 0, true, 2, '', 3])).toStrictEqual([1 , true, 2, 3]);
    expect(compact([0, 1, true, 2, '', 3])).toStrictEqual([1 , true, 2, 3]);
  })

  // only true values
  test('array with only true values', () => {
    expect(compact([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  })

  // only false values
  test('array with only false values', () => {
    expect(compact([0, "", false, null, undefined, NaN])).toEqual([ ]);
  })

  // empty array
  test('array that contains no values', () => {
    expect(compact([ ])).toEqual([ ]);
  })

  // nested array
  test('array that contains nested objects', () => {
    expect(compact([0, [false], {a: 0}, {b: 1}, [1]])).toEqual({a:0}, {b:1}, [1]);
  })

  // no array
  test('test for empty, undefined, null and no array input', () => {
    expect(() => compact()).toThrow(TypeError);
    expect(() => compact(undefined)).toThrow(TypeError);
    expect(() => compact(null)).toThrow(TypeError);
    expect(() => compact(111)).toThrow(TypeError);
  })

})