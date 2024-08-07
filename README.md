# CEL Interpreter and Parser Library for TypeScript

This library provides an interpreter and parser for evaluating Common Expression Language (CEL) expressions in TypeScript projects. CEL is a language developed by Google that allows for safe and fast evaluation of expressions in a wide variety of applications, such as policy engines, rule engines, and more.

## Features

- Parse and evaluate CEL expressions directly within TypeScript projects.
- Support for common arithmetic operations, logical operations, and comparisons.
- Extensible design for adding custom functions and variables.

## Installation

Install the library via npm:

```bash
npm install typescript-cel
```

## Usage
### Basic Example
Here is a simple example of how to use the CEL Interpreter:

```typescript
import { CELInterpreter } from 'cel-interpreter-ts';

// Create an instance of the interpreter
const interpreter = new CELInterpreter();

// Define some global functions and variables if needed
interpreter.globalFunctions['myFunction'] = (arg: any) => {
    return arg * 2;
};
interpreter.variables['myVar'] = 10;

// Define an expression to evaluate
const expression = '1 + 2 * 3';

// Evaluate the expression
const result = interpreter.visit(expression);

console.log(`Result of '${expression}':`, result);
```

