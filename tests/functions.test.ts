import { describe, it, expect } from 'vitest';
import { Runtime } from '../src/Runtime';

describe('CEL Built-in Functions', () => {
  let runtime: Runtime;

  // Arithmetic Functions
  it('should evaluate min function', () => {
    const expression = "min(a, b)";
    runtime = new Runtime(expression);
    const expected = 10;
    const result = runtime.evaluate({ a: 10, b: 20 });
    expect(result).toBe(expected);
  });

  it('should evaluate max function', () => {
    const expression = "max(a, b)";
    runtime = new Runtime(expression);
    const expected = 20;
    const result = runtime.evaluate({ a: 10, b: 20 });
    expect(result).toBe(expected);
  });

  it('should evaluate abs function', () => {
    const expression = "abs(a)";
    runtime = new Runtime(expression);
    const expected = 10;
    const result = runtime.evaluate({ a: -10 });
    expect(result).toBe(expected);
  });

  it('should evaluate ceil function', () => {
    const expression = "ceil(a)";
    runtime = new Runtime(expression);
    const expected = 11;
    const result = runtime.evaluate({ a: 10.1 });
    expect(result).toBe(expected);
  });

  it('should evaluate floor function', () => {
    const expression = "floor(a)";
    runtime = new Runtime(expression);
    const expected = 10;
    const result = runtime.evaluate({ a: 10.9 });
    expect(result).toBe(expected);
  });

  it('should evaluate round function', () => {
    const expression = "round(a)";
    runtime = new Runtime(expression);
    const expected = 11;
    const result = runtime.evaluate({ a: 10.5 });
    expect(result).toBe(expected);
  });

  // String Functions
  it('should evaluate contains function', () => {
    const expression = "contains(s, 'world')";
    runtime = new Runtime(expression);
    const expected = true;
    const result = runtime.evaluate({ s: "hello world" });
    expect(result).toBe(expected);
  });

  it('should evaluate endsWith function', () => {
    const expression = "endsWith(s, 'world')";
    runtime = new Runtime(expression);
    const expected = true;
    const result = runtime.evaluate({ s: "hello world" });
    expect(result).toBe(expected);
  });

  it('should evaluate indexOf function', () => {
    const expression = "indexOf(s, 'world')";
    runtime = new Runtime(expression);
    const expected = 6;
    const result = runtime.evaluate({ s: "hello world" });
    expect(result).toBe(expected);
  });

  it('should evaluate length function', () => {
    const expression = "length(s)";
    runtime = new Runtime(expression);
    const expected = 11;
    const result = runtime.evaluate({ s: "hello world" });
    expect(result).toBe(expected);
  });

  it('should evaluate lower function', () => {
    const expression = "lower(s)";
    runtime = new Runtime(expression);
    const expected = "hello world";
    const result = runtime.evaluate({ s: "HELLO WORLD" });
    expect(result).toBe(expected);
  });

  it('should evaluate replace function', () => {
    const expression = "replace(s, 'world', 'everyone')";
    runtime = new Runtime(expression);
    const expected = "hello everyone";
    const result = runtime.evaluate({ s: "hello world" });
    expect(result).toBe(expected);
  });

  it('should evaluate split function', () => {
    const expression = "split(s, ' ')";
    runtime = new Runtime(expression);
    const expected = ["hello", "world"];
    const result = runtime.evaluate({ s: "hello world" });
    expect(result).toEqual(expected);
  });

  it('should evaluate startsWith function', () => {
    const expression = "startsWith(s, 'hello')";
    runtime = new Runtime(expression);
    const expected = true;
    const result = runtime.evaluate({ s: "hello world" });
    expect(result).toBe(expected);
  });

  it('should evaluate upper function', () => {
    const expression = "upper(s)";
    runtime = new Runtime(expression);
    const expected = "HELLO WORLD";
    const result = runtime.evaluate({ s: "hello world" });
    expect(result).toBe(expected);
  });

  // List Functions
  it('should evaluate size function for a list', () => {
    const expression = "size(lst)";
    runtime = new Runtime(expression);
    const expected = 3;
    const result = runtime.evaluate({ lst: [1, 2, 3] });
    expect(result).toBe(expected);
  });

  // Type Conversion Functions
  it('should evaluate int function', () => {
    const expression = "int(a)";
    runtime = new Runtime(expression);
    const expected = 10;
    const result = runtime.evaluate({ a: "10" });
    expect(result).toBe(expected);
  });

  it('should evaluate uint function', () => {
    const expression = "uint(a)";
    runtime = new Runtime(expression);
    const expected = 10;
    const result = runtime.evaluate({ a: "10" });
    expect(result).toBe(expected);
  });

  it('should evaluate double function', () => {
    const expression = "double(a)";
    runtime = new Runtime(expression);
    const expected = 10.5;
    const result = runtime.evaluate({ a: "10.5" });
    expect(result).toBe(expected);
  });

  it('should evaluate string function', () => {
    const expression = "string(a)";
    runtime = new Runtime(expression);
    const expected = "10";
    const result = runtime.evaluate({ a: 10 });
    expect(result).toBe(expected);
  });

  it('should evaluate bool function', () => {
    const expression = "bool(a)";
    runtime = new Runtime(expression);
    const expected = true;
    const result = runtime.evaluate({ a: 1 });
    expect(result).toBe(expected);
  });

  // Null Handling Functions
  it('should evaluate exists function for null check', () => {
    const expression = "exists(a)";
    runtime = new Runtime(expression);
    const expected = false;
    const result = runtime.evaluate({ a: null });
    expect(result).toBe(expected);
  });

  it('should evaluate existsOne function for null check', () => {
    const expression = "existsOne(lst)";
    runtime = new Runtime(expression);
    const expected = true;
    const result = runtime.evaluate({ lst: [null, 1, null] });
    expect(result).toBe(expected);
  });

  // Date/Time Functions
  it('should evaluate timestamp function', () => {
    const expression = "timestamp()";
    runtime = new Runtime(expression);
    const result = runtime.evaluate({});
    expect(typeof result).toBe('string');
  });

  it('should evaluate duration function', () => {
    const expression = "duration(a)";
    runtime = new Runtime(expression);
    const expected = "10s";
    const result = runtime.evaluate({ a: 10 });
    expect(result).toBe(expected);
  });

  it('should evaluate time function', () => {
    const expression = "time(2024, 8, 2, 12, 0, 0, 0)";
    runtime = new Runtime(expression);
    const expected = "2024-08-02T12:00:00.000Z";
    const result = runtime.evaluate({});
    expect(result).toBe(expected);
  });

  it('should evaluate date function', () => {
    const expression = "date(2024, 8, 2)";
    runtime = new Runtime(expression);
    const expected = "2024-08-02";
    const result = runtime.evaluate({});
    expect(result).toBe(expected);
  });

  it('should evaluate getFullYear function', () => {
    const expression = "getFullYear(timestamp)";
    runtime = new Runtime(expression);
    const expected = 2024;
    const result = runtime.evaluate({ timestamp: new Date(Date.UTC(2024, 7, 2)) });
    expect(result).toBe(expected);
  });

  it('should evaluate getMonth function', () => {
    const expression = "getMonth(timestamp)";
    runtime = new Runtime(expression);
    const expected = 7; // August is month 7 in 0-indexed Date object
    const result = runtime.evaluate({ timestamp: new Date(Date.UTC(2024, 7, 2)) });
    expect(result).toBe(expected);
  });

  it('should evaluate getDate function', () => {
    const expression = "getDate(timestamp)";
    runtime = new Runtime(expression);
    const expected = 2;
    const result = runtime.evaluate({ timestamp: new Date(Date.UTC(2024, 7, 2)) });
    expect(result).toBe(expected);
  });

  it('should evaluate getHours function', () => {
    const expression = "getHours(timestamp)";
    runtime = new Runtime(expression);
    const expected = 12;
    const result = runtime.evaluate({ timestamp: new Date(Date.UTC(2024, 7, 2, 12)) });
    expect(result).toBe(expected);
  });

  it('should evaluate getMinutes function', () => {
    const expression = "getMinutes(timestamp)";
    runtime = new Runtime(expression);
    const expected = 0;
    const result = runtime.evaluate({ timestamp: new Date(Date.UTC(2024, 7, 2, 12, 0)) });
    expect(result).toBe(expected);
  });

  it('should evaluate getSeconds function', () => {
    const expression = "getSeconds(timestamp)";
    runtime = new Runtime(expression);
    const expected = 0;
    const result = runtime.evaluate({ timestamp: new Date(Date.UTC(2024, 7, 2, 12, 0, 0)) });
    expect(result).toBe(expected);
  });
});
