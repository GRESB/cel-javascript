# cel-javascript

## This project is not ready for production yet.

Parser and evaluator for CEL in JavaScript using ANTLR4
This library provides parser and evaluator for Common Expression Language (CEL) expressions in Javascript and Typescript projects. CEL is a language developed by Google that allows for safe and fast evaluation of expressions in a wide variety of applications, such as policy engines, rule engines, and more.

## Features

- Parse and evaluate CEL expressions directly within TypeScript projects.
- Support for common arithmetic operations, logical operations, and comparisons.
- Extensible design for adding custom functions and variables.
- Error handling during parsing with custom error listeners.
- Context-based evaluation to support dynamic expression evaluation.


## Installation

Install the library via npm:

```bash
npm install @gresb/cel-javascript
```

## Usage
### Basic Example
Here is a simple example of how to use the CEL Interpreter:

```
import { Runtime } from 'cel-in-js';

// Define a CEL expression to evaluate
const celExpression = '1 + 2 * 3';

// Check if the expression can be parsed
if (Runtime.canParse(celExpression)) {
    // Create an instance of Runtime with the CEL expression
    const runtime = new Runtime(celExpression);

    // Evaluate the expression within a given context
    const context = "{}"; // Replace with your actual context if needed
    const result = runtime.evaluate(context);

    console.log(`Result of '${celExpression}':`, result);
} else {
    console.error('Invalid CEL expression:', celExpression);
}
```

### Parsing Validation
You can validate if a CEL expression can be parsed without evaluating it:

```
import { Runtime } from '@gresb/cel-javascript';

const celExpression = '1 + 2 * 3';
const canParse = Runtime.canParse(celExpression);

console.log(`Can parse '${celExpression}':`, canParse);

```

### Error Handling During Parsing
When parsing a CEL expression, you can catch errors and handle them accordingly:


```
import { Runtime } from '@gresb/cel-javascript';

const celExpression = '1 + 2 *'; // Intentional syntax error

const result = Runtime.parseString(celExpression);

if (result.success) {
    console.log('Expression parsed successfully.');
} else {
    console.error('Failed to parse expression:', result.error);
}


```
