// tests for capitalize function with the use of AI (capitalize.js)
import capitalize from '../src/capitalize.js';

/**
 * @file capitalize_ai.test.js
 * @description
 * AI-Generated Test Suite for `capitalize` function.
 *
 * Purpose:
 * This suite was created using AI assistance to complement human-planned tests.
 * It aims to provide comprehensive coverage across diverse input scenarios,
 * including edge cases, type coercion, Unicode handling, and robustness checks.
 *
 * How it complements:
 * It systematically explores inputs that may not be covered in typical manual tests,
 * ensuring resilience and correctness of the `capitalize` implementation.
 */

describe('capitalize function', () => {
  /**
   * Helper note:
   * The function internally uses:
   * - `toString`: Converts input to string representation.
   * - `upperFirst`: Uppercases the first character of the string.
   * Then lowercases the rest.
   */

  // =========================
  // A. Standard Behaviour
  // =========================
  describe('Standard behaviour with typical strings', () => {
    test('should capitalize an all-uppercase word', () => {
      expect(capitalize('FRED')).toBe('Fred');
    });

    test('should capitalize an all-lowercase word', () => {
      expect(capitalize('fred')).toBe('Fred');
    });

    test('should capitalize a mixed-case word', () => {
      expect(capitalize('FrEd')).toBe('Fred');
    });

    test('should capitalize multi-word string (only first word affected)', () => {
      expect(capitalize('hello world')).toBe('Hello world');
    });
  });

  // =========================
  // B. Boundary Cases
  // =========================
  describe('Boundary cases', () => {
    test('should return empty string when input is empty', () => {
      expect(capitalize('')).toBe('');
    });

    test('should handle very long strings gracefully', () => {
      const longStr = 'a'.repeat(10000);
      const result = capitalize(longStr);
      expect(result[0]).toBe('A');
      expect(result.slice(1)).toBe('a'.repeat(9999));
    });

    test('should handle single-character letter', () => {
      expect(capitalize('a')).toBe('A');
    });

    test('should handle single-character number', () => {
      expect(capitalize('1')).toBe('1'); // Numbers remain unchanged
    });

    test('should handle single-character symbol', () => {
      expect(capitalize('$')).toBe('$'); // Symbols remain unchanged
    });
  });

  // =========================
  // C. Type Conversion Behaviour
  // =========================
  describe('Type conversion behaviour due to toString', () => {
    test('should handle number input', () => {
      expect(capitalize(1234)).toBe('1234');
    });

    test('should handle boolean true', () => {
      expect(capitalize(true)).toBe('True');
    });

    test('should handle boolean false', () => {
      expect(capitalize(false)).toBe('False');
    });

    test('should handle null input', () => {
      expect(capitalize(null)).toBe('Null');
    });

    test('should handle undefined input', () => {
      expect(capitalize(undefined)).toBe('Undefined');
    });

    test('should handle plain object', () => {
      expect(capitalize({ key: 'value' })).toBe('[object object]');
    });

    test('should handle array input', () => {
      expect(capitalize([1, 2, 3])).toBe('1,2,3');
    });

    test('should handle function input', () => {
      const fn = function hello() {};
      expect(capitalize(fn)).toMatch(/^Function/); // Starts with 'Function'
    });

    test('should handle class instance', () => {
      class MyClass {}
      expect(capitalize(new MyClass())).toBe('[object object]');
    });

    test('should handle Symbol input (documented limitation)', () => {
      const sym = Symbol('id');
      expect(() => capitalize(sym)).toThrow(); // toString on Symbol throws
    });
  });

  // =========================
  // D. Unicode and Internationalization
  // =========================
  describe('Unicode and internationalization', () => {
    test('should handle accented characters', () => {
      expect(capitalize('éclair')).toBe('Éclair');
    });

    test('should handle umlauts', () => {
      expect(capitalize('über')).toBe('Über');
    });

    test('should handle Greek script', () => {
      expect(capitalize('αθήνα')).toBe('Αθήνα');
    });

    test('should handle Cyrillic script', () => {
      expect(capitalize('москва')).toBe('Москва');
    });

    test('should handle Arabic script', () => {
      expect(capitalize('مرحبا')).toBe('مرحبا'); // Arabic has no case concept
    });

    test('should handle emoji-containing strings', () => {
      expect(capitalize('😀hello')).toBe('😀hello'); // Emoji unaffected
    });
  });

  // =========================
  // E. Whitespace and Formatting Edge Cases
  // =========================
  describe('Whitespace and formatting edge cases', () => {
    test('should handle leading spaces', () => {
      expect(capitalize('   hello')).toBe('   hello'); // Spaces preserved
    });

    test('should handle trailing spaces', () => {
      expect(capitalize('hello   ')).toBe('Hello  ');
    });

    test('should handle string of only spaces', () => {
      expect(capitalize('     ')).toBe('    ');
    });

    test('should handle tabs and newlines', () => {
      expect(capitalize('\nhello\t')).toBe('\nhello\t');
    });
  });

  // =========================
  // F. Error-oriented and Robustness Tests
  // =========================
  describe('Error-oriented and robustness tests', () => {
    test('should not throw for unexpected input types except Symbol', () => {
      expect(() => capitalize(42)).not.toThrow();
      expect(() => capitalize(null)).not.toThrow();
      expect(() => capitalize(undefined)).not.toThrow();
      expect(() => capitalize({})).not.toThrow();
    });

    test('should handle JavaScript coercion gracefully', () => {
      const obj = { toString: () => 'custom' };
      expect(capitalize(obj)).toBe('Custom');
    });
  });
});
