// tests for countBy function (countBy.js)
import countBy from '../src/countBy.js';

describe('countBy', () => {

  // users
  test('counts active and inactive users', () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'betty', active: true },
      { user: 'fred', active: false }
    ];
    expect(countBy(users, value => value.active)).toEqual({ true: 1, false: 0 });
  });


})