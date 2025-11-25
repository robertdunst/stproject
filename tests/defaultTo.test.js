// tests for defaultTo function (defaultTo.js)
import defaultTo from '../src/defaultTo.js';

describe('defaultTo', () => {

  // undefined, null, NaN
  test('test undefined, null, NaN', () => {
    expect(defaultTo(undefined, 1)).toBe(1);
    expect(defaultTo(null, 1)).toBe(1);
    expect(defaultTo(NaN, 1)).toBe(1);
  });

  // different data types
  test('test different data types', () => {
    // integer
    expect(defaultTo(1, 10)).toBe(1);
    expect(defaultTo(0, 10)).toBe(0);
    expect(defaultTo(undefined, 10)).toBe(10);
    // float
    expect(defaultTo(1.1, 10.1)).toBe(1.1);
    expect(defaultTo(undefined, 10.1)).toBe(10.1);
    // string
    expect(defaultTo('abc', 'def')).toBe('abc');
    expect(defaultTo(undefined, 'def')).toBe('def');    
    // boolean
    expect(defaultTo(true, false)).toBe(true);
    expect(defaultTo(undefined, false)).toBe(false);
  });

  // mixed data types
  test('mixed data types', () => {
    expect(defaultTo(1, 'abc')).toBe(1);
    expect(defaultTo('abc', 1)).toBe('abc');
  });

  // objects
  test('test objects', () => {
    const arr = [1, 'abc', true];
    expect(defaultTo(arr, ['default', 'array'])).toBe(arr);
    expect(defaultTo(undefined, ['default', 'array'])).toBe(['default', 'array']);
  });

})