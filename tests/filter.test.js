// tests for filter function (filter.js)
import filter from '../src/filter.js';

describe('filter', () => {

  // first test the basic case
  test('Test filtering values using predicate', () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'fred', active: false }
    ];

    expect(filter(users, ({ active }) => active))
      .toEqual([{ user: 'barney', active: true }]);
  });

  // now we test filtering numbers
  test('Test filtering numbers with even function', () => {
    const nums = [1, 2, 3, 4, 5];
    
    expect(filter(nums, n => n % 2 === 0))
      .toEqual([2, 4]);
  });

  // now we test that the filter is actually not matching any element and retuns a empty array
  test('Test no element is matching the filter', () => {
    const nums = [1, 3, 5];
    
    expect(filter(nums, n => n % 2 === 0))
      .toEqual([]);
  });

  // test filterung null or undefined and returning an empty array
  test('Test filtering null or undefined array', () => {
    expect(filter(null, () => true)).toEqual([]);
    expect(filter(undefined, () => true)).toEqual([]);
  });

  // test filtering and empty array and getting as an result an empty array
  test('Test filtering empty array', () => {
    expect(filter([], () => true))
      .toEqual([]);
  });

  // we test this line from the docu
  // * **Note:** Unlike `remove`, this method returns a new array.
  test('Test that a new array is returned by filter', () => {
    const array = [1, 2, 3];
    const result = filter(array, () => true);
    expect(result).not.toBe(array);
  });

  // last we test this part from the docu
  // The predicate is invoked with three arguments: (value, index, array).
  test("Test predicate is invoked with three arguments)", () => {
    const arr = [10, 20, 30];
    const calls = [];

    filter(arr, (value, index, array) => {
        calls.push([value, index, array]);
        return true;
    });

    expect(calls).toEqual([
        [10, 0, arr],
        [20, 1, arr],
        [30, 2, arr]
    ]);

  // simple array
  test('returns array when element matches the filter', () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8];
    expect(filter(data, v => v < 7)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  // simple array but wrong filter
  test('returns empty array when no element matches the filter', () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8];
    expect(filter(data, v => v > 10)).toEqual([[]]);
  });

  // empty array
  test('test empty array', () => {
    expect(filter([], () => true)).toEqual([[]]);
  });

  // NaN, null, undefined
  test('test NaN, null and undefined', () => {
    expect(filter(NaN, () => true)).toEqual([[]]);
    expect(filter(null, () => true)).toEqual([[]]);
    expect(filter(undefined, () => true)).toEqual([[]]);
  });

  // 
  test('works with complex predicates', () => {
    const data = [
      { student: 'Darth Vader', grade: 1 },
      { student: 'Robert', grade: 5 },
      { student: 'Felix', grade: 5 }
    ];
    expect(filter(data, o => o.grade === 5)).toEqual([
      { student: 'Robert', grade: 5 },
      { student: 'Felix', grade: 5 }
    ]);
  });

})