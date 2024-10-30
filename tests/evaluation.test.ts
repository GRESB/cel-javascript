import { describe, it, expect } from 'vitest';
import { Runtime } from '../src/Runtime';

describe('CEL Evaluation Tests', () => {

    it('should evaluate simple arithmetic expression', () => {
        const expression = "2 + 3";
        const runtime = new Runtime(expression);
        const result = runtime.evaluate({});
        expect(result).toBe(5);
    });

    it('should evaluate expression with variables', () => {
        const expression = "a + b";
        const runtime = new Runtime(expression);
        const context = { a: 2, b: 3 };
        const result = runtime.evaluate(context);
        expect(result).toBe(5);
    });

    it('should evaluate a comparison expression', () => {
        const expression = "a == b";
        const runtime = new Runtime(expression);
        const context = { a: 2, b: 2 };
        const result = runtime.evaluate(context);
        expect(result).toBe(true);
    });

    it('Should return error when a comparison has a type mismatch', () => {
        const expression = "2 == '2'";
        const runtime = new Runtime(expression);
        expect(() => runtime.evaluate(expression)).toThrow('Mismatching types: Cannot compare \'int\' and \'string\' with \'==\'');
    });

    it('should evaluate an expression with arithmetic and comparison', () => {
        const expression = "a + b > c";
        const runtime = new Runtime(expression);
        const context = { a: 2, b: 3, c: 4 };
        const result = runtime.evaluate(context);
        expect(result).toBe(true);
    });

    it('should throw an error for undefined variables', () => {
        const expression = "x";
        const runtime = new Runtime(expression);
        expect(() => runtime.evaluate({})).toThrow('Variable \'x\' is not defined');
    });

    it('should evaluate nested arithmetic expressions', () => {
        const expression = "(2 + 3) * (4 - 1)";
        const runtime = new Runtime(expression);
        const result = runtime.evaluate({});
        expect(result).toBe(15);  // (5) * (3) = 15
    });

    it('should evaluate logical expressions with AND and OR', () => {
        const expression = "a > b && b < c || a == c";
        const runtime = new Runtime(expression);
        const context = { a: 5, b: 3, c: 5 };
        const result = runtime.evaluate(context);
        expect(result).toBe(true);
    });

    // it('should evaluate ternary conditional expressions', () => {
    //   const expression = "a > b ? 'greater' : 'lesser'";
    //   const runtime = new Runtime(expression);
    //   const context = { a: 5, b: 3 };
    //   const result = runtime.evaluate(context);
    //   expect(result).toBe('greater');
    // });

    // it('Should correctly handle ternary operator', () => {
    //   const expression = 'true ? "yes" : "no"';
    //   runtime = new Runtime(expression);
    //   const expected = "yes";
    //   const result = runtime.evaluate("{}");
    //   expect(result).toBe(expected);
    // });

    it('should handle arithmetic with mixed types (string concatenation)', () => {
        const expression = "'Hello ' + 'World'";
        const runtime = new Runtime(expression);
        const result = runtime.evaluate({});
        expect(result).toBe('Hello World');
    });

    it('should handle arithmetic with nested parentheses', () => {
        const expression = "2 * (3 + (4 - 1))";
        const runtime = new Runtime(expression);
        const result = runtime.evaluate({});
        expect(result).toBe(12);
    });

    it('should handle boolean negation', () => {
        const expression = "!true";
        const runtime = new Runtime(expression);
        const result = runtime.evaluate({});
        expect(result).toBe(false);
    });
    
    
    it('should evaluate expressions with nested logical operations', () => {
        const expression = "!(a > b) || (c < d && e >= f)";
        const runtime = new Runtime(expression);
        const context = { a: 3, b: 5, c: 2, d: 4, e: 5, f: 5 };
        const result = runtime.evaluate(context);
        expect(result).toBe(true);
    });

    
    it('Should return correct result when expression has nested operations', () => {
        const expression = '1 + (2 * 3) - (4 / 2)';
        const runtime = new Runtime(expression);
        const expected = 5; 
        const result = runtime.evaluate("{}");
        expect(result).toBe(expected);
    });

    it('Should return true for a logical expression', () => {
        const expression = 'true && false || true';
        const runtime = new Runtime(expression);
        const expected = true; 
        const result = runtime.evaluate("{}");
        expect(result).toBe(expected);
    });

    it('Should return correct string concatenation result', () => {
        const expression = '"hello" + " " + "world"';
        const runtime = new Runtime(expression);
        const expected = "hello world";
        const result = runtime.evaluate("{}");
        expect(result).toBe(expected);
    });

    it('Should correctly handle complex numerical expressions', () => {
        const expression = '2 * (3 + 4) - (10 / 2) + 7';
        const runtime = new Runtime(expression);
        const expected = 16; 
        const result = runtime.evaluate({});
        expect(result).toBe(expected);
    });

    it('Should correctly parse and evaluate a boolean negation', () => {
        const expression = '!true';
        const runtime = new Runtime(expression);
        const expected = false;
        const result = runtime.evaluate("{}");
        expect(result).toBe(expected);
    });

    it('Should return error for undefined variable', () => {
        const expression = 'undefinedVar + 1';
        const runtime = new Runtime(expression);
        expect(() => runtime.evaluate("{}")).toThrow('Variable \'undefinedVar\' is not defined');
    });
});
