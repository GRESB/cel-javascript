import { CELContext } from './CELContext';
import { CELInterpreter } from './CELInterpreter';

// Define variables in the context
const context = new CELContext({ a: 1, b: 2 });

// Initialize the interpreter with the context
const interpreter = new CELInterpreter(context);

// Evaluate expressions
console.log("TEST: 2+3=", interpreter.evaluate("2+3"));
console.log("TEST: 2+3+1=", interpreter.evaluate("2+3+1"));
console.log("TEST: a+b=", interpreter.evaluate("a+b"));
console.log("TEST: a+b+a=", interpreter.evaluate("a+b+a"));
console.log("TEST a==b", interpreter.evaluate("a == b")); // Output: false
