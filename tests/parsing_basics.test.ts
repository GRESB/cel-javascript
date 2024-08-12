import { describe, it, expect } from 'vitest';
import { CELRuntime } from '../src/CELRuntime';

describe('CEL Parsing Tests', () => {
  
  it('should parse a simple arithmetic expression', () => {
    const expression = "1 + 1";
    const result = CELRuntime.parseString(expression);
    expect(result.success).toBe(true);
  });

  it('should fail to parse an invalid expression', () => {
    const expression = "1 +";
    const result = CELRuntime.parseString(expression);
    expect(result.success).toBe(false);
  });

  it('should return error message for invalid expression', () => {
    const expression = "1 + ";
    const result = CELRuntime.parseString(expression);
    expect(result.success).toBe(false);
    expect(result.error).toBeDefined();
  });

  it('should parse a comparison expression', () => {
    const expression = "a == b";
    const result = CELRuntime.parseString(expression);
    expect(result.success).toBe(true);
  });

  it('should parse a complex expression', () => {
    const expression = "(a + b) * (c - d)";
    const result = CELRuntime.parseString(expression);
    expect(result.success).toBe(true);
  });

});
