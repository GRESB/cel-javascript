import { describe, it, expect } from 'vitest';
import { CELRuntime } from '../src/CELRuntime';

describe('CEL Evaluation Tests', () => {

  it('should evaluate simple arithmetic expression', () => {
    const expression = "2 + 3";
    const runtime = new CELRuntime(expression);
    const result = runtime.evaluate({});
    expect(result).toBe(5);
  });

  it('should evaluate expression with variables', () => {
    const expression = "a + b";
    const runtime = new CELRuntime(expression);
    const context = { a: 2, b: 3 };
    const result = runtime.evaluate(context);
    expect(result).toBe(5);
  });

  it('should evaluate a comparison expression', () => {
    const expression = "a == b";
    const runtime = new CELRuntime(expression);
    const context = { a: 2, b: 2 };
    const result = runtime.evaluate(context);
    expect(result).toBe(true);
  });

  it('should evaluate an expression with arithmetic and comparison', () => {
    const expression = "a + b > c";
    const runtime = new CELRuntime(expression);
    const context = { a: 2, b: 3, c: 4 };
    const result = runtime.evaluate(context);
    expect(result).toBe(true);
  });

  it('should throw an error for undefined variables', () => {
    const expression = "x";
    const runtime = new CELRuntime(expression);
    expect(() => runtime.evaluate({})).toThrow('Variable \'x\' is not defined');
  });
});
