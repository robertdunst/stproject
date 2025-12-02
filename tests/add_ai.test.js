// tests for add function with the use of AI (add.js)
import add from '../src/add.js';


/**
 * @file add_ai.test.js
 * @description Academically rigorous unit test suite for the `add` function.
 * This suite applies principles of software testing such as:
 * - Boundary Testing
 * - Equivalence Class Partitioning
 * - Edge-Case Analysis
 * - Robustness Testing
 * - Error Handling Validation
 *
 * All tests are grouped logically with clear comments explaining their purpose.
 */

describe('ai_generated_add_tests', () => {
  /**
   * ============================================================
   * SECTION 1: Basic Functional Tests
   * Purpose: Validate correctness for typical cases.
   * Methodology: Representative values from common equivalence classes.
   * ============================================================
   */
  describe('Basic Functional Tests', () => {
    test('adds two positive integers', () => {
      expect(add(6, 4)).toBe(10);
    });

    test('adds a positive and a negative integer', () => {
      expect(add(6, -4)).toBe(2);
    });

    test('adds two negative integers', () => {
      expect(add(-6, -4)).toBe(-10);
    });

    test('adds two floating-point numbers', () => {
      expect(add(0.1, 0.2)).toBeCloseTo(0.3, 10); // Precision check
    });
  });

  /**
   * ============================================================
   * SECTION 2: Boundary and Limit Tests
   * Purpose: Assess behavior near JavaScript numeric extremes.
   * Methodology: Boundary testing for Number.MAX_SAFE_INTEGER and beyond.
   * ============================================================
   */
  describe('Boundary and Limit Tests', () => {
    const MAX_SAFE = Number.MAX_SAFE_INTEGER;
    const MIN_SAFE = Number.MIN_SAFE_INTEGER;

    test('adds two large positive integers near MAX_SAFE_INTEGER', () => {
      expect(add(MAX_SAFE, 1)).toBe(MAX_SAFE + 1);
    });

    test('adds two large negative integers near MIN_SAFE_INTEGER', () => {
      expect(add(MIN_SAFE, -1)).toBe(MIN_SAFE - 1);
    });

    test('adds extremely large numbers (may lose precision)', () => {
      const huge = 1e308;
      expect(add(huge, huge)).toBe(Infinity); // Expected overflow
    });

    test('adds very small floating-point numbers', () => {
      const tiny = 1e-308;
      expect(add(tiny, tiny)).toBeCloseTo(2e-308);
    });
  });

  /**
   * ============================================================
   * SECTION 3: Type-Robustness Tests
   * Purpose: Validate behavior with non-numeric inputs.
   * Methodology: Robustness testing and documenting assumptions.
   * Assumption: `add` uses numeric coercion (like lodash).
   * ============================================================
   */
  describe('Type-Robustness Tests', () => {
    test('adds numeric string and number (coercion expected)', () => {
      expect(add('5', 3)).toBe(8);
    });

    test('adds boolean and number (true -> 1)', () => {
      expect(add(true, 2)).toBe(3);
    });

    test('adds null and number (null -> 0)', () => {
      expect(add(null, 5)).toBe(5);
    });

    test('adds undefined and number (undefined -> NaN)', () => {
      expect(Number.isNaN(add(undefined, 5))).toBe(true);
    });

    test('adds array and number (array -> NaN)', () => {
      expect(Number.isNaN(add([1, 2], 3))).toBe(true);
    });

    test('adds object and number (object -> NaN)', () => {
      expect(Number.isNaN(add({ a: 1 }, 3))).toBe(true);
    });
  });

  /**
   * ============================================================
   * SECTION 4: Special Numeric Cases
   * Purpose: Validate handling of Infinity, -Infinity, and NaN.
   * Methodology: Edge-case analysis for IEEE-754 special values.
   * ============================================================
   */
  describe('Special Numeric Cases', () => {
    test('adds Infinity and finite number', () => {
      expect(add(Infinity, 1)).toBe(Infinity);
    });

    test('adds -Infinity and finite number', () => {
      expect(add(-Infinity, 1)).toBe(-Infinity);
    });

    test('adds Infinity and -Infinity', () => {
      expect(Number.isNaN(add(Infinity, -Infinity))).toBe(true);
    });

    test('adds NaN and number', () => {
      expect(Number.isNaN(add(NaN, 5))).toBe(true);
    });
  });

  /**
   * ============================================================
   * SECTION 5: Missing Argument Tests
   * Purpose: Validate behavior with insufficient arguments.
   * Methodology: Robustness and error handling validation.
   * ============================================================
   */
  describe('Missing Argument Tests', () => {
    test('adds with one argument (second defaults to 0)', () => {
      expect(add(5)).toBe(5);
    });

    test('adds with zero arguments (both default to 0)', () => {
      expect(add()).toBe(0);
    });

    test('adds with more than two arguments (extra ignored)', () => {
      expect(add(1, 2, 3)).toBe(3); // Assumption: ignores extras
    });
  });

  /**
   * ============================================================
   * SECTION 6: Property-Based Tests
   * Purpose: Validate algebraic properties like commutativity and identity.
   * Methodology: Deterministic checks for mathematical invariants.
   * ============================================================
   */
  describe('Property-Based Tests', () => {
    test('commutativity: add(a, b) === add(b, a)', () => {
      const a = 7, b = 3;
      expect(add(a, b)).toBe(add(b, a));
    });

    test('identity: add(a, 0) === a', () => {
      const a = 42;
      expect(add(a, 0)).toBe(a);
    });
  });
});
