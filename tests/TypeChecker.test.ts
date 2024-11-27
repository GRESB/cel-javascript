import { describe, it, expect } from 'vitest';
import { Runtime } from '../src';

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

  it('should return correct types for addition of integers with types context', () => {
    const expression = "a + b";
    const typeCheckResult = Runtime.typeCheck(expression, {a: 2, b: 4});
    expect(typeCheckResult.error).toBeUndefined();
    expect(typeCheckResult.success).toBe(true);
  });

  it('should return error when using a string and a int to uses as an add on', () => {
    const expression = "a + b";
    const typeCheckResult = Runtime.typeCheck(expression, {a: 2, b: "4"});
    expect(typeCheckResult.success).toBe(false);
    expect(typeCheckResult.error).toContain("Operator '+' requires matching types, but got 'int' and 'string'");
  });

  it('should return correct type for addition of float and int', () => {
    const expression = "5.5 + 3";
    const typeCheckResult = Runtime.typeCheck(expression, {});
    expect(typeCheckResult.success).toBe(false);
    expect(typeCheckResult.error).toContain("Operator '+' requires matching types, but got 'float' and 'int'");
  });

  it('should throw error for invalid operator in arithmetic expression', () => {
    const expression = "5 + 'hello'";
    const typeCheckResult = Runtime.typeCheck(expression, {});
    expect(typeCheckResult.success).toBe(false);
    expect(typeCheckResult.error).toContain("Operator '+' requires matching types, but got 'int' and 'string'");
  });

  it('should throw error for invalid types in function call', () => {
    const expression = "max('string', 1)";
    const typeCheckResult = Runtime.typeCheck(expression, {});
    expect(typeCheckResult.success).toBe(false);
    expect(typeCheckResult.error).toContain("Argument 1 of function 'max' expects type 'int', but got 'string'");
  });

  it('should be valid as the example of the readme', () => {
    const expression = "user.age >= 18";
    const context = {
      user: {
        name: 'Alice',
        age: 20,
      },
    };
    const typeCheckResult = Runtime.typeCheck(expression, context);
    expect(typeCheckResult.success).toBe(true);
  });

  it('should be valid when we have multiple nested objects', () => {
    const expression = "user.age.really >= 18";
    const context = {
      user: {
        name: 'Alice',
        age: {
          really: 20
        },
      },
    };
    const typeCheckResult = Runtime.typeCheck(expression, context);
    expect(typeCheckResult.success).toBe(true);
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

it('Should return error when a comparison has a type mismatch', () => {
  const expression = "2 == '2'";
  const typeCheckResult = Runtime.typeCheck(expression, {});
  expect(typeCheckResult.success).toBe(false);
  expect(typeCheckResult.error).toContain("Mismatching types");
});

it('Should return error when a comparison has a type mismatch', () => {
  const expression = "'23' == 23";
  const typeCheckResult = Runtime.typeCheck(expression, {});
  expect(typeCheckResult.success).toBe(false);
  expect(typeCheckResult.error).toContain("Mismatching types");
});

it('Should return error when a comparison has a type mismatch', () => {
  const expression = "'23' == true";
  const typeCheckResult = Runtime.typeCheck(expression, {});
  expect(typeCheckResult.success).toBe(false);
  expect(typeCheckResult.error).toContain("Mismatching types");
});

it('Should return error when a comparison has a type mismatch', () => {
  const expression = "'true' == true";
  const typeCheckResult = Runtime.typeCheck(expression, {});
  expect(typeCheckResult.success).toBe(false);
  expect(typeCheckResult.error).toContain("Mismatching types");
});

it('Should return error when a comparison has a type mismatch', () => {
  const expression = "'true' == true";
  const typeCheckResult = Runtime.typeCheck(expression, {});
  expect(typeCheckResult.success).toBe(false);
  expect(typeCheckResult.error).toContain("Mismatching types");
});


it('Should return error when a comparison has a type mismatch', () => {
  const expression = "1 == 1.2";
  const typeCheckResult = Runtime.typeCheck(expression, {});
  expect(typeCheckResult.success).toBe(false);
  expect(typeCheckResult.error).toContain("Mismatching types");
});

});
