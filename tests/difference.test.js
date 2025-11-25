// tests for difference function (difference.js)
import difference from '../src/difference.js';

describe('difference', () => {

  // basic case
  test('test basic case with difference between two arrays', () => {
    expect(difference([2, 1], [2, 3])).toEqual([1]);
    expect(difference([1, 2, 3, 4], [4])).toEqual([1, 2, 3]);
    expect(difference([3, 2, 4, 1], [4])).toEqual([3, 2, 1]);
  });

  // multiple arrays
  test('tests multiple arrays', () => {
    expect(difference([1, 2, 3, 4], [1], [3])).toEqual([2, 4]);
  });






})