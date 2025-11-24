// tests for add function (add.js)
import add from '../src/add.js';

describe('add', () => {

  // integer numbers
  test('add two positive integer numbers', () => {
    expect(add(12, 28)).toBe(40);
    expect(add(24, 73)).toBe(97);
    expect(add(3, 164)).toBe(167);
    expect(add(51, 95)).toBe(146);
  });

  test('add two negative integer numbers', () => {
    expect(add(-12, -28)).toBe(-40);
    expect(add(-24, -73)).toBe(-97);
    expect(add(-3, -164)).toBe(-167);
    expect(add(-51, -95)).toBe(-146);
  });

  test('add positive and negative integer numbers', () => {
    expect(add(12, -28)).toBe(-16);
    expect(add(73, -24)).toBe(49);
    expect(add(-29, 13)).toBe(-16);
    expect(add(-51, 95)).toBe(44);
  });

  test('adds positive and negative integer numbers with zero', () => {
    expect(add(0, 80)).toBe(80);
    expect(add(37, 0)).toBe(37);
    expect(add(0, -20)).toBe(-20);
    expect(add(-7, 0)).toBe(-7);
    expect(add(0, 0)).toBe(0);
  });

  // floating point numbers
  test('adds two positive floating point numbers', () => {
    expect(add(1, 2.5)).toBeCloseTo(3.5);
    expect(add(1.5, 2.5)).toBeCloseTo(4.0);
    expect(add(1.55, 2.54)).toBeCloseTo(4.09);
  });    

  test('adds two negative floating point numbers', () => {
    expect(add(-1, -2.5)).toBeCloseTo(-3.5);
    expect(add(-1.5, -2.5)).toBeCloseTo(-4.0);
    expect(add(-1.55, -2.54)).toBeCloseTo(-4.09);
  });   

  test('adds positive and negative floating point numbers', () => {
    expect(add(1, -2.5)).toBeCloseTo(-1.5);  
    expect(add(-1.2, 3.4)).toBeCloseTo(2.2);
    expect(add(1.5, -2.5)).toBeCloseTo(-1.0);
    expect(add(-1.23, 3.45)).toBeCloseTo(2.22);
    expect(add(1.51, -2.56)).toBeCloseTo(-1.05);
  });

  test('adds positive and negative floating point numbers with zero', () => {  
    expect(add(1.2, 0)).toBeCloseTo(1.2);
    expect(add(0, 2.55)).toBeCloseTo(2.55);
    expect(add(-1.23, 0)).toBeCloseTo(-1.23);
    expect(add(0, -2.56)).toBeCloseTo(-2.56);
  });

  test('adds big floating point numbers', () => {  
    expect(add(563756.345534, 835678.452424)).toBeCloseTo(1399434.797958, 2);
    expect(add(-563756.345534, 835678.452424)).toBeCloseTo(271922.10689, 2);
    expect(add(563756.345534, -835678.452424)).toBeCloseTo(-271922.10689, 2);
  });

  //missing inputs
  test('adds integer number to missing input', () => {  
    expect(add(5)).toBe(5);
  });

  test('adds two missing inputs', () => {  
    expect(add()).toBe(0);
  });

  //string values
  test('adds integer numbers to strings that can be coerced to numbers', () => {  
    expect(add('7', 2)).toBe('72');
    expect(add('7.46', 2)).toBe('7.462');
    expect(add('7', '2')).toBe('72');
  });

  test('adds integer numbers to strings that can not be coerced to numbers', () => {  
    expect(add(7, 'abc')).toBe('7abc');
    expect(add('7', 'abc')).toBe('7abc');
    expect(add('abc', 'def')).toBe('abcdef');
  });

  //boolean values
  test('adds boolean values', () => {  
    expect(add(1, true)).toBe(2);
    expect(add(1, false)).toBe(1);
    expect(add(true, false)).toBe(1);
  });

  //null values
  test('adds null values', () => {
    expect(add(1, null)).toBe(1);  
    expect(add(null, null)).toBe(0);
  });

  //undefined values
  test('adds undefined values', () => {
    expect(add(5, undefined)).toBe(5);
    expect(add(undefined, null)).toBe(null);
    expect(add(undefined, undefined)).toBe(0);
  });
});