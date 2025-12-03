// tests for capitalize function (capitalize.js)
import capitalize from '../src/capitalize.js';

describe('capitalize', () => {

  // lowercase
  test('capitalize lowercase word', () => {
    expect(capitalize('allsmall')).toBe('Allsmall');
  })

  // uppercase
  test('capitalize uppercase word', () => {
    expect(capitalize('ALLBIG')).toBe('Allbig');
  })

  // mixed
  test('capitalize a mixed case word', () => {
    expect(capitalize('MiXeD')).toBe('Mixed');
    expect(capitalize('mIxEd')).toBe('Mixed');
    expect(capitalize('mixeD')).toBe('Mixed');
  })

  // multiple words
  test('capitalize string with multiple words', () => {
    expect(capitalize('one two')).toBe('One two');
    expect(capitalize('one Two')).toBe('One two');
  })

  // letters and digits
  test('capitalize word with included digits', () => {
    expect(capitalize('woRd123')).toBe('Word123');
    expect(capitalize('123woRd')).toBe('123word');
  })

  // symbols
  test('capitalize word with symbols', () => {
    expect(capitalize('!?woRd')).toBe('!?word');
    expect(capitalize('wo!?Rd')).toBe('Wo!?rd');
  })

  // numeric input
  test('capitalize number inputs', () => {
    expect(capitalize(2)).toBe('2');
    expect(capitalize(5.5)).toBe('5.5');
  })

  // undefined
  test('capitalize undefined input', () => {
    expect(capitalize(undefined)).toBe('Undefined');
  })

  // null
  test('capitalize null input', () => {
    expect(capitalize(null)).toBe('Null');
  })

  // boolean
  test('capitalize boolean values', () => {
    expect(capitalize(true)).toBe('True');
    expect(capitalize(false)).toBe('False');
  })

  // empty
  test('capitalize empty input', () => {
    expect(capitalize()).toBe('Undefined');
  })
})