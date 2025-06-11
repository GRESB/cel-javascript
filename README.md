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
- DataType checker based on the values and existing context


## Installation

Install the library via npm:

```bash
npm install @gresb/cel-javascript
```

## Usage
### Basic Example
Here is a simple example of how to use the CEL Interpreter:

```
import { Runtime } from '@gresb/cel-javascript';

// Define a CEL expression to evaluate
const celExpression = '1 + 2 * 3';

// Create an instance of Runtime with the CEL expression
const runtime = new Runtime(celExpression);

// Evaluate the expression within a given context
const context = {}; // Replace with your actual context if needed
const result = runtime.evaluate(context);

console.log(`Result of '${celExpression}':`, result); // Output: Result of '1 + 2 * 3': 7

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

const celExpression = 'a + b';
const typesContext = { a: 'int', b: 'string' }; // Define the expected types of variables

const typeCheckResult = Runtime.typeCheck(celExpression, typesContext);

if (typeCheckResult.success) {
    console.log('Type checking passed.');
} else {
    console.error('Type checking failed:', typeCheckResult.error);
}
// Output: Type checking failed: Operator '+' requires numeric or string operands, but got 'int' and 'string'

```

### Typechecking Validation

You can perform type checking to ensure that the expression is type-safe within a given context:

```
import { Runtime } from '@gresb/cel-javascript';

const celExpression = 'a + b';
const typesContext = { a: 'int', b: 'string' }; // Define the expected types of variables

const typeCheckResult = Runtime.typeCheck(celExpression, typesContext);

if (typeCheckResult.success) {
    console.log('Type checking passed.');
} else {
    console.error('Type checking failed:', typeCheckResult.error);
}
// Output: Type checking failed: Operator '+' requires numeric or string operands, but got 'int' and 'string'

```

*Note:* The typeCheck method checks if the expression is valid with the provided variable types without actually evaluating it.

### Evaluating Expressions
Evaluating an expression will automatically perform parsing and type checking before execution. If the expression fails to parse or does not pass type checking, an error will be thrown.

```
import { Runtime } from '@gresb/cel-javascript';

const celExpression = 'a * (b + c)';
const context = { a: 2, b: 3, c: 4 }; // Provide the variables and their values

const runtime = new Runtime(celExpression);

try {
    const result = runtime.evaluate(context);
    console.log(`Result of '${celExpression}':`, result); // Output: Result of 'a * (b + c)': 14
} catch (error) {
    console.error('Evaluation failed:', error.message);
}

```

### Contextual Evaluation with Variables

You can pass variables to the expression through the context:


```
import { Runtime } from '@gresb/cel-javascript';

const celExpression = 'user.age >= 18';
const context = {
    user: {
        name: 'Alice',
        age: 20,
    },
};

const runtime = new Runtime(celExpression);

const result = runtime.evaluate(context);

console.log(`Is user adult?`, result); // Output: Is user adult? true

```

### Built-in Functions

The interpreter supports several built-in functions. Here's an example using the contains function:

```
import { Runtime } from '@gresb/cel-javascript';

const celExpression = 'contains(message, "world")';
const context = {
    message: 'Hello, world!',
};

const runtime = new Runtime(celExpression);

const result = runtime.evaluate(context);

console.log(`Does message contain 'world'?`, result); // Output: Does message contain 'world'? true

```

Here is a list of supported functions:

**Arithmetic Functions**
- min(a, b, ...): Returns the minimum of the arguments.
- max(a, b, ...): Returns the maximum of the arguments.
- abs(x): Returns the absolute value of a number.
- ceil(x): Rounds a number up to the nearest integer.
- floor(x): Rounds a number down to the nearest integer.
- round(x): Rounds a number to the nearest integer.

**String Functions**
- contains(string, substring): Checks if a string contains a specified substring.
- endsWith(string, suffix): Checks if a string ends with a specified suffix.
- indexOf(string, substring): Returns the index of a substring in a string.
- length(string): Returns the length of a string.
- lower(string): Converts a string to lowercase.
- replace(string, search, replacement): Replaces occurrences of a substring within a string.
- split(string, delimiter): Splits a string by a specified delimiter.
- startsWith(string, prefix): Checks if a string starts with a specified prefix.
- upper(string): Converts a string to uppercase.

**List and Map Functions**
- size(list|map): Returns the number of elements in a list or entries in a map.
- has(list|map, key): Checks if a list or map contains a specified key.

**Type Conversion Functions**
- int(value): Converts a value to an integer.
- uint(value): Converts a value to an unsigned integer.
- double(value): Converts a value to a floating-point number.
- string(value): Converts a value to a string.
- bool(value): Converts a value to a boolean.

**Null Handling Functions**
- exists(value): Checks if a value is not null.
- existsOne(list): Checks if at least one element in a list is not null.

**Date and Time Functions**
- timestamp(string): Converts a string to a timestamp.
- duration(int): Returns a duration from an integer.
- time(year, month, day, hour, minute, second, millisecond): Creates a timestamp.
- date(year, month, day): Creates a date.
- getFullYear(timestamp): Extracts the year from a timestamp.
- getMonth(timestamp): Extracts the month from a timestamp.
- getDate(timestamp): Extracts the day from a timestamp.
- getHours(timestamp): Extracts the hour from a timestamp.
- getMinutes(timestamp): Extracts the minutes from a timestamp.
- getSeconds(timestamp): Extracts the seconds from a timestamp.


## Timestamp Handling and Relational Operators

**New in v0.0.21:**  
This release enhances the handling of timestamps and relational operators in the CEL evaluation system:

- **Timestamp Comparisons:**  
  Expressions can now compare timestamps, including support for date-only formats (e.g., `'2024-06-11'`). The evaluator will automatically convert valid ISO 8601 date or datetime strings to `Date` objects for accurate comparison.

- **Relational Operators:**  
  Relational operators (`<`, `<=`, `>`, `>=`, `==`, `!=`) now support both numeric and timestamp operands. If both operands are valid timestamps, they are compared as dates. If both are numbers, they are compared numerically. Mixed types will result in an error.

- **Improved Error Messages:**  
  If an invalid comparison is attempted (e.g. comparing a string to a number), a clear error message is provided.

- **Test Coverage:**  
  Additional tests have been added to validate timestamp parsing and comparison logic.

**Example:**

```js
import { Runtime } from '@gresb/cel-javascript';

const celExpression = 'created_at >= "2024-06-01"';
const context = { created_at: '2024-06-11T10:00:00Z' };

const runtime = new Runtime(celExpression);
const result = runtime.evaluate(context);

console.log(result); // Output: true
```

Date-only strings like `"2024-06-11"` are treated as midnight UTC on that date.

## Deployment

To deploy the package to npm, follow these steps:

*Update the Version:* Increment the version number in your package.json file according to semantic versioning.

```
{
  "name": "@gresb/cel-javascript",
  "version": "1.0.1", // Update this version
  ...
}
```

**Authenticate with npm:** Log in to your npm account using your email address.


```
npm login -e EMAIL_ADDRESS
```
**Build the Package:** Ensure your package is built and ready for publishing.


```
npm run build
```
**Publish the Package:** Publish the package to npm registry with public access.

```
npm publish --access public
```

Note: Ensure that you have the necessary permissions to publish the package and that all changes are committed before publishing.
