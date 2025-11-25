// tests for filter function (filter.js)
import filter from '../src/filter.js';

describe('filter', () => {

  // basic case
  test('###', () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'fred', active: false }
    ];
    expect(filter(users, ({ active }) => active)).toEqual([
      { user: 'barney', active: true }
    ]);
  });

})