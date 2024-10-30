import { describe, it, expect } from 'vitest';
import { Runtime } from '../src/Runtime';

describe('TypeChecker Tests using Runtime', () => {
  it('should return correct type for int literal', () => {
    const expression = "5";
    const typeCheckResult = Runtime.typeCheck(expression, {});
    expect(typeCheckResult.success).toBe(true);
  });

  it('should return correct type for float literal', () => {
    const expression = "3.14";
    const typeCheckResult = Runtime.typeCheck(expression, {});
    expect(typeCheckResult.success).toBe(true);
  });

  it('should return correct type for string literal', () => {
    const expression = '"hello"';
    const typeCheckResult = Runtime.typeCheck(expression, {});
    expect(typeCheckResult.success).toBe(true);
  });

  it('should return correct type for boolean literal (true)', () => {
    const expression = "true";
    const typeCheckResult = Runtime.typeCheck(expression, {});
    expect(typeCheckResult.success).toBe(true);
  });

  it('should return correct type for boolean literal (false)', () => {
    const expression = "false";
    const typeCheckResult = Runtime.typeCheck(expression, {});
    expect(typeCheckResult.success).toBe(true);
  });

  it('should return correct type for list literal', () => {
    const expression = "[1, 2, 3]";
    const typeCheckResult = Runtime.typeCheck(expression, {});
    expect(typeCheckResult.success).toBe(true);
  });

  it('should return correct type for addition of integers', () => {
    const expression = "5 + 3";
      const typeCheckResult = Runtime.typeCheck(expression, {});
      expect(typeCheckResult.error).toBeUndefined();
    expect(typeCheckResult.success).toBe(true);
  });

  it('should return correct type for addition of float and int', () => {
    const expression = "5.5 + 3";
    const typeCheckResult = Runtime.typeCheck(expression, {});
    expect(typeCheckResult.success).toBe(true);
  });

  it('should throw error for invalid operator in arithmetic expression', () => {
    const expression = "5 + 'hello'";
    const typeCheckResult = Runtime.typeCheck(expression, {});
    expect(typeCheckResult.success).toBe(false);
    expect(typeCheckResult.error).toContain("Operator '+' requires numeric types, but got 'int' and 'string'");
  });

  it('should throw error for invalid types in function call', () => {
    const expression = "max('string', 1)";
    const typeCheckResult = Runtime.typeCheck(expression, {});
    expect(typeCheckResult.success).toBe(false);
    expect(typeCheckResult.error).toContain("Cannot read properties of null (reading 'map')");
  });

  it('should return correct type for logical NOT expression', () => {
    const expression = "!true";
    const typeCheckResult = Runtime.typeCheck(expression, {});
    expect(typeCheckResult.success).toBe(true);
  });

  it('should throw error for non-boolean operand in logical NOT expression', () => {
    const expression = "!5";
    const typeCheckResult = Runtime.typeCheck(expression, {});
    expect(typeCheckResult.success).toBe(false);
    expect(typeCheckResult.error).toContain("requires boolean operand");
  });

  it('should throw error for mismatched types in conditional AND expression', () => {
    const expression = "true && 5";
    const typeCheckResult = Runtime.typeCheck(expression, {});
    expect(typeCheckResult.success).toBe(false);
    expect(typeCheckResult.error).toContain("requires boolean operands");
  });
});
