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

  // data types
  test('mixed data types', () => {
    expect(difference([1, 'abc', true, false], ['abc', false])).toEqual([1, true]);
  });

  // repeated values
  test('removes all occurrences of repeated values', () => {
    expect(difference([1, 2, 2, 2, 3, 3, 4], [2, 3])).toEqual([1, 4]);
  });

  // empty arrays
  test('test empty arrays', () => {
    expect(difference([], [1, 2])).toEqual([]);
    expect(difference([1, 2], [])).toEqual([1, 2]);
    expect(difference([], [])).toEqual([]);
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

  // non array
  test('second argument non array', () => {
    expect(difference([1, 2, 3], null)).toEqual([1, 2, 3]);
    expect(difference([1, 2, 3], 2)).toEqual([1, 2, 3]);
  });

  // one argument
  test('test without second argument', () => {
    expect(difference([1, 2, 3])).toEqual([1, 2, 3]);
  });

  // nested arrays
  test('nested arrays compared by reference', () => {
    const a = [1];
    const b = [1];
    expect(difference([a, b], [a])).toEqual([b]);
  });

})