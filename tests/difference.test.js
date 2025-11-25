// tests for difference function (difference.js)
import difference from '../src/difference.js';

describe('difference', () => {

  // basic case
  test('test basic case with difference between two arrays', () => {
    expect(difference([2, 1], [2, 3])).toEqual([1]);
    expect(difference([1, 2, 3, 4], [4])).toEqual([1, 2, 3]);
    expect(difference([3, 2, 4, 1], [4])).toEqual([3, 2, 1]);
    expect(difference([1, 2, 3, 4], [2, 4])).toEqual([1, 3]);
    expect(difference([3, 2, 4, 1], [2, 4])).toEqual([3, 1]);
  });

  // multiple arrays
  test('tests multiple arrays', () => {
    expect(difference([1, 2, 3, 4], [1], [3])).toEqual([2, 4]);
  });

  // NaN
  test('test NaN comparison', () => {
    expect(difference([NaN, 1, 2, NaN], [NaN])).toEqual([1, 2]);
  });

  // undefined
  test('test undefined comparison', () => {
    expect(difference([undefined, 1, 2, undefined], [undefined])).toEqual([1, 2]);
  });

  // null
  test('test null comparison', () => {
    expect(difference([null, 1, 2, null], [null])).toEqual([1, 2]);
  });

  // objects
  test('removes values using strict identity', () => {
    const objectA = { a: 1 };
    const objectB = { a: 1 };
    expect(difference([objectA, objectB], [objectA])).toEqual([objectB]);  
  });

  // non array
  test('first argument non array', () => {
    expect(difference(null, [1])).toEqual([]);
    expect(difference(undefined, [1])).toEqual([]);
    expect(difference(2, [1])).toEqual([]);
    expect(difference('abc', ['a'])).toEqual([]);
  });


})