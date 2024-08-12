import { describe, it, expect } from 'vitest';
import { Runtime } from '../src/Runtime';

describe('CEL Context Tests', () => {
  
  it('should handle context variables correctly', () => {
    const expression = "a + b";
    const context = { a: 10, b: 20 };
    const runtime = new Runtime(expression);
    const result = runtime.evaluate(context);
    expect(result).toBe(30);
  });

  // it('should throw an error for undefined variables', () => {
  //   const expression = "a + b";
  //   const context = { a: 10 };
  //   const runtime = new Runtime(expression);
  //   expect(() => runtime.evaluate(context)).toThrow('Variable \'b\' is not defined');
  // });

  // it('should allow dynamic context changes', () => {
  //   const expression = "a + b";
  //   const context1 = { a: 10, b: 20 };
  //   const runtime = new Runtime(expression);
  //   const result1 = runtime.evaluate(context1);
  //   expect(result1).toBe(30);

  //   const context2 = { a: 5, b: 15 };
  //   const result2 = runtime.evaluate(context2);
  //   expect(result2).toBe(20);
  // });

  // it('should evaluate context with nested expressions', () => {
  //   const expression = "(a + b) * c";
  //   const context = { a: 2, b: 3, c: 4 };
  //   const runtime = new Runtime(expression);
  //   const result = runtime.evaluate(context);
  //   expect(result).toBe(20);
  // });

});
