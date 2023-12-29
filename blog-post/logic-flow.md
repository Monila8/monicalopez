# Logic and flow

Delve into the realm of control flow and error handling in JavaScript, where a set of powerful statements shapes the interactivity of your applications. This comprehensive guide unveils the intricacies of control flow statements, conditional statements, and robust exception handling, empowering you to build resilient and interactive code.

## Block statement:
At the core of JavaScript's statement arsenal is the block statement, a fundamental tool for grouping statements. Enclosed within curly braces, block statements are pivotal in constructing organized code structures, particularly when used with control flow statements like if, for, and while.

```javascript
{
  statement1;
  statement2;
  // …
  statementN;
}`
```

## Conditional statements:
JavaScript boasts two primary conditional statements—if...else and switch—offering flexibility in executing commands based on specified conditions.

## if...else statement:
Utilize the if statement to execute code when a logical condition is true, and employ the optional else clause for scenarios where the condition evaluates to false.

```javascript
if (condition) {
  statement1;
} else {
  statement2;
}
```

For multiple conditions, employ else if, ensuring only the first true condition is executed.

```javascript
if (condition1) {
  statement1;
} else if (condition2) {
  statement2;
} else if (conditionN) {
  statementN;
} else {
  statementLast;
}
```

Embrace best practices by using block statements for clarity and avoiding assignments within if...else conditions.

## Falsy values:
Understanding falsy values—false, undefined, null, 0, NaN, and the empty string ("")—is crucial for precise condition evaluation. Distinguish between primitive boolean values and Boolean object values for effective conditional statements.

```javascript
const b = new Boolean(false);
if (b) {
  // This condition evaluates to true
}
if (b == true) {
  // This condition evaluates to false
}
```

## Switch statement:
The switch statement facilitates efficient evaluation of an expression against predefined case labels. Employ break statements to control the flow and avoid unintended execution.

```javascript
switch (expression) {
  case label1:
    statements1;
    break;
  case label2:
    statements2;
    break;
  // …
  default:
    statementsDefault;
}
```

## Exception handling statements:
Exception handling in JavaScript involves the throw statement for generating exceptions and the try...catch statements for handling them effectively.

## Throw statement:
Initiate exceptions using the throw statement, specifying the value to be thrown, which can be any expression.

```javascript
throw expression;
```

try...catch statement:
Safeguard your code with try...catch statements, allowing graceful handling of exceptions. The catch block captures and handles thrown exceptions.

```javascript
try {
  // Statements to try
} catch (exception) {
  // Handling statements
} finally {
  // Cleanup statements (always executed)
}
```

## Nesting and utilizing error objects:
Explore advanced exception handling with nested try...catch statements, enhancing the robustness of your error-handling strategies. Leverage the properties of Error objects, such as name and message, for detailed error diagnostics.

```javascript
try {
  throw "myException";
} catch (err) {
  // Handling statements
}
```

[More information: MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#literals) 

[Previous: Literals](literals)

[Next: Loops](loops)
