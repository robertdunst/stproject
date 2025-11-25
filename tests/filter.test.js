// tests for filter function (filter.js)
import filter from '../src/filter.js';

describe('filter', () => {

  // basic case
  test('test basic case from documentation', () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'fred', active: false }
    ];
    expect(filter(users, ({ active }) => active)).toEqual([
      { user: 'barney', active: true }
    ]);
  });

  // simple array
  test('returns array when element matches the filter', () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8];
    expect(filter(data, v => v < 7)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  // simple array but wrong filter
  test('returns empty array when no element matches the filter', () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8];
    expect(filter(data, v => v > 10)).toEqual([]);
  });

  // empty array
  test('test empty array', () => {
    expect(filter([], () => true)).toEqual([]);
  });

  // NaN, null, undefined
  test('test NaN, null and undefined', () => {
    expect(filter(NaN, () => true)).toEqual([]);
    expect(filter(null, () => true)).toEqual([]);
    expect(filter(undefined, () => true)).toEqual([]);
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