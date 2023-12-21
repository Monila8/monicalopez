# Grammar and types

## Javascript basics: An overview

JavaScript, a versatile programming language, draws inspiration from Java, C, and C++, while also incorporating elements from Awk, Perl, and Python. This unique blend contributes to its syntax richness. In this article, we'll delve into the basics of JavaScript syntax, exploring its case sensitivity, statement structure, and the intricacies of comments.


### Case sensitivity and unicode usage:

JavaScript, unlike some languages, is case-sensitive. A variable named 'Früh' is distinct from 'früh,' showcasing the language's sensitivity to letter casing. It's crucial to pay attention to these nuances to prevent unexpected errors in your code.

```javascript
const Früh = "foobar";
```

### Statements and semicolons:

In JavaScript, instructions are termed statements and are separated by semicolons. While a semicolon may be omitted if a statement is written on its own line, it's considered a best practice to always include one. This reduces the likelihood of introducing bugs into your code. JavaScript also incorporates Automatic Semicolon Insertion (ASI), a feature that automatically adds semicolons to end statements.

```javascript
// Statement on its own line (semicolon optional)
const statement1 = "Hello";

// Multiple statements on one line (semicolon required)
const statement2 = "World"; console.log(statement1 + statement2);
```

###### Note: ECMAScript incorporates Automatic Semicolon Insertion (ASI) rules, but adding semicolons consistently is considered a best practice to enhance code reliability.

### Script parsing and input elements:
During execution, JavaScript scripts undergo left to right scanning, transforming the source text into a sequence of input elements—tokens, control characters, line terminators, comments, or whitespace. Whitespace includes spaces, tabs, and newline characters, while comments follow the syntax of languages like C++.

## Comments in JavaScript:
Comments play a crucial role in enhancing code readability and providing insights. JavaScript supports both single-line and multi-line comments. Single-line comments begin with '//' and multi-line comments use '/* ... */'. It's essential to note that block comments cannot be nested.

```javascript
// A one-line comment

/* This is a longer,
 * multi-line comment
 */
```

Comments behave like whitespace and are discarded during script execution, contributing to cleaner and more maintainable code.

## Variable Declarations:
JavaScript offers three types of variable declarations:

- var: Declares a variable, optionally initializing it.
- let: Declares a block-scoped, local variable, optionally initializing it.
- const: Declares a block-scoped, read-only named constant.

### Identifiers and Rules:
Variables, represented by identifiers, follow specific rules in JavaScript. Identifiers usually start with a letter, underscore (_), or dollar sign ($). Subsequent characters can be digits (0–9), and due to case sensitivity, include both uppercase (A–Z) and lowercase (a–z) letters. Unicode letters and escape sequences can also be used in identifiers.

Examples of legal names include Number_hits, temp99, $credit, and _name.

### Declaring Variables:
Variables can be declared using 'var' for both local and global contexts or 'const' and 'let' for block-scoped local variables. It's crucial to declare variables before using them to avoid errors, especially in strict mode.

```javascript
let x;
console.log(x); // logs "undefined"
```

### Declaration and Initialization:
In a statement like 'let x = 42,' 'let x' is a declaration, allowing access without a ReferenceError, while '= 42' is an initializer, assigning a value. 'const' declarations always require an initializer, preventing post-declaration assignments.

```javascript
const x; // SyntaxError: Missing initializer in const declaration
```

### Variable Scope:
Variables can belong to:
- Global scope: The default scope for all code running in script mode.
- Module scope: The scope for code running in module mode.
- Function scope: The scope created with a function.
In addition, variables declared with let or const can belong to an additional scope:
- Block scope: The scope created with a pair of curly braces (a block).

When you declare a variable outside of any function, it is called a **global variable**, because it is available to any other code in the current document. When you declare a variable within a function, it is called a local variable, because it is available only within that function.

let and const declarations can also be scoped to the block statement that they are declared in.

```javascript
if (Math.random() > 0.5) {
  const y = 5;
}
console.log(y); // ReferenceError: y is not defined
```

However, variables created with var are not block-scoped, but only local to the function (or global scope) that the block resides within.

For example, the following code will log 5, because the scope of x is the global context (or the function context if the code is part of a function). The scope of x is not limited to the immediate if statement block.

```javascript
if (true) {
  var x = 5;
}
console.log(x); // x is 5
```

### Variable Hoisting:
'var'-declared variables are hoisted, accessible anywhere in their scope. While 'let' and 'const' hoisting is debated, referencing them before declaration results in a 'temporal dead zone' error.

```javascript
console.log(x === undefined); // true
var x = 3;
```

### Global Variables:
Global variables are properties of the global object, accessible using 'window.variable' or 'globalThis.variable.' They facilitate communication between different windows or frames.

```javascript
const globalVar = "I'm global!";
console.log(window.globalVar); // "I'm global!"
```

### Constants:
Constants, created with 'const,' are read-only and block-scoped. They can't be reassigned or re-declared within the script. However, they don't prevent mutations in objects or arrays they reference.

```javascript
const PI = 3.14;
const MY_OBJECT = { key: "value" };
MY_OBJECT.key = "otherValue";
``` 
## Data Types in JavaScript:
JavaScript recognizes eight data types, and they play crucial roles in making your code perform various tasks:

- Boolean: Represents true or false.
- null: Denotes a null value.
- undefined: Represents a value that is not defined.
- Number: Handles integers or floating point numbers.
- BigInt: Manages integers with arbitrary precision.
- String: Deals with sequences of characters, such as text.
- Symbol: Creates unique and unchangeable instances.
- Object: Acts as a named container for values.

Although these data types are relatively few, they enable you to perform useful operations with your applications. Functions are the other fundamental elements of the language. While functions are technically a kind of object, you can think of objects as named containers for values, and functions as procedures that your script can perform.

Dynamic Typing in JavaScript:
JavaScript is a dynamically typed language, meaning you don't have to declare a variable's data type. The language automatically converts data types during script execution. For example:

```javascript
let answer = 42;
//And later, you could assign the same variable a string value, for example: 
answer = "Thanks for all the fish!";
``` 

This flexibility allows you to switch a variable from a number to a string without causing errors.

### Numeric Operations and the '+' Operator:
In expressions involving numbers and strings with the + operator, JavaScript converts numeric values to strings. For instance:

```javascript
x = "The answer is " + 42; // "The answer is 42"
y = 42 + " is the answer"; // "42 is the answer"
z = "37" + 7; // "377"
```

### Converting Strings to Numbers:
When a value representing a number is stored as a string, JavaScript provides methods for conversion, such as parseInt() and parseFloat(). Always include the radix parameter with parseInt() to specify the numerical system.

```javascript
parseInt("101", 2); // 5
```

Alternatively, you can use the unary plus operator (+) for clarity:

```javascript
+"1.1" + +"1.1"; // 2.2
```

## Literals
Literals represent values in JavaScript. These are fixed values—not variables—that you literally provide in your script. 

Understanding these fundamental aspects sets the stage for delving deeper into JavaScript's rich syntax and functionality. Stay tuned for more insights into variable declarations, data types, and essential programming constructs.