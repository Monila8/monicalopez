# Expressios and operators

This chapter delves into JavaScript's expressions and operators, covering a spectrum from assignment to comparison, arithmetic, bitwise, logical, string, ternary, and more.

## Expressions Defined:
At its core, an expression is a code unit that computes a value. Two types exist: those with side effects, such as assignments, and those solely evaluative.

### Examples of Expressions:
Examine the dual nature of expressions through examples. The assignment expression x = 7 demonstrates side effects, using the = operator to assign the value seven to variable x, while the expression 3 + 4 showcases evaluation, adding 3 and 4.

## Operators Overview:
Discover a variety of operators uniting expressions, such as:
- Assignment operators
- Comparison operators
- Arithmetic operators
- Bitwise operators
- Logical operators
- BigInt operators
- String operators
- Conditional (ternary) operator
- Comma operator
- Unary operators

### Operator Precedence:
Unravel the significance of operator precedence in determining the evaluation order. Explore examples like const x = 1 + 2 * 3 to understand how operators with different precedence levels impact the outcome. Learn to override precedence using parentheses.

### Binary and Unary Operators:
Distinguish between binary and unary operators in JavaScript. Binary operators, like 3 + 4, require two operands, while unary operators, such as x++ or ++x, operate on a single operand. Explore the concepts of infix and postfix unary operators.

### Special Ternary Operator:
Encounter the conditional operator, a special ternary operator. It involves three operands and serves as a concise way to write if-else statements in a single line. Uncover its utility in simplifying conditional expressions.

## Assignment Operators Overview:
This section delves into the realm of JavaScript assignment operators, crucial tools for manipulating variables. The primary assignment operator, '=', assigns the value of the right operand to the left operand. Shorthand versions, such as +=, -=, *=, and more, offer concise alternatives for common operations.

### Compound Assignment Operators:
Explore a spectrum of compound assignment operators, each serving as a shorthand for a specific operation. From addition and subtraction to exponentiation and logical operations, these operators enhance code readability and efficiency.

### Assigning to Properties:
Uncover the power of assignment expressions when dealing with object properties. Learn how expressions evaluating to objects allow dynamic property assignments, providing flexibility in object manipulation.

### Destructuring Assignment:
Delve into the elegant syntax of destructuring assignments, simplifying the extraction of data from arrays or objects. Witness its efficiency in contrast to traditional multi-statement approaches, streamlining the code-writing process.

### Evaluation and Nesting:
Examine the nuances of assignment expressions' evaluation, shedding light on their role within variable declarations or standalone statements. Understand the potential pitfalls of chaining or nesting assignments and the importance of comprehending their behavior in various contexts.

### Examples of Evaluation:
Embark on detailed examples illustrating the evaluation process of assignment expressions. From the right-associative nature of the '=' operator to the step-by-step breakdown of complex expressions involving functions and arrays, gain a profound understanding of the evaluation flow.

### Avoiding Assignment Chains:
Navigate the cautionary realm of assignment chains, where chaining or nesting assignments within expressions may lead to unexpected outcomes. Understand the risks associated with such practices, especially when declaring variables using const, let, or var statements.

## Comparison operators
Embark on a journey through JavaScript's comparison operators, powerful tools that assess operands and yield logical values based on the outcome of the comparison. These operators cater to numerical, string, logical, and object values, with a focus on standard lexicographical ordering for strings.

### Type Conversion Insights:
Explore the intricacies of type conversion when operands differ in type. JavaScript, in most cases, endeavors to harmonize operand types for numerical comparisons. Exceptionally, the strict equality and inequality operators (=== and !==) defy this convention, demanding identical types for comparison without implicit conversions.

Operator:	
- Equal (==) - Returns true if the operands are equal.
- Not equal (!=) - Returns true if the operands are not equal.
- Strict equal (===) - Returns true if the operands are equal and of the same type.
- Strict not equal (!==) - Returns true if the operands are of the same type but not equal, or are of different types.
- Greater than (>) - Returns true if the left operand is greater than the right operand.
- Greater than or equal (>=)	- Returns true if the left operand is greater than or equal to the right operand.
- Less than (<) - Returns true if the left operand is less than the right operand.
- Less than or equal (<=) - Returns true if the left operand is less than or equal to the right operand.	

Note: => is not a comparison operator but rather the notation for Arrow functions.

### Examples of Comparison:
```javascript
const var1 = 3;
const var2 = 4;

console.log(3 == var1);       // true
console.log("3" == var1);     // true
console.log(3 == '3');        // true
console.log(var1 != 4);        // true
console.log(var2 !== "3");     // true
console.log(3 === var1);       // true
console.log(var1 !== "3");     // true
console.log(var2 > var1);      // true
console.log("12" > 2);         // true
console.log(var2 >= var1);     // true
console.log(var1 < var2);      // true
console.log("2" < 12);         // true
console.log(var1 <= var2);     // true
console.log(var2 <= 5);        // true
```

## Numeric and string comparisons:
Uncover the subtleties of numeric and string comparisons, where operators like > and < determine relationships between values. Explore how JavaScript navigates through scenarios involving numerical and lexicographical comparisons, offering insights into its underlying mechanisms.

## Arithmetic Operators:
Dive into the realm of JavaScript's arithmetic operators, essential tools that manipulate numerical values to produce singular numerical outcomes. These operators, whether applied to literals or variables, offer fundamental operations like addition, subtraction, multiplication, and division. Witness their behavior with floating-point numbers, where division by zero results in Infinity.

### Standard arithmetic operators:
Discover the core arithmetic operators that form the backbone of numerical operations. Gain insights into their behavior with floating-point numbers, such as the equality of different representations like 1/2 and 1.0/2.0.

```javascript
1 / 2;                   // 0.5
1 / 2 === 1.0 / 2.0;     // true
```

### Extended arithmetic operators:
Beyond the standard quartet of arithmetic operations, JavaScript introduces additional operators catering to specific needs.

Operator:
- Remainder (%) - Binary operator. Returns the integer remainder of dividing the two operands.
- Increment (++) - Unary operator. Adds one to its operand. Prefix (++x) returns the value after adding one; postfix (x++) returns the value before adding one.
- Decrement (--) - Unary operator. Subtracts one from its operand. The return value is similar to the increment operator.
- Unary negation (-) - Unary operator. Returns the negation of its operand.
- Unary plus (+) - Unary operator. Attempts to convert the operand to a number, if not already.
- Exponentiation operator (**) - Calculates the base to the exponent power.	

### Illustrative Examples:
Explore these operators in action, gaining a hands-on understanding of their impact on numerical values.

```javascript
let x = 12;
let y = 5;

console.log(x % y);         // 2
console.log(++x);           // 13
console.log(x++);           // 13 (returns before increment)
console.log(x);             // 14 (incremented value)
console.log(--y);           // 4
console.log(y--);           // 4 (returns before decrement)
console.log(y);             // 3 (decremented value)
console.log(-x);            // -14
console.log(+"3");          // 3
console.log(+true);         // 1
console.log(2 ** 3);        // 8
console.log(10 ** -1);      // 0.1
```

### Mastering arithmetic dynamics:
Delve into the nuanced dynamics of arithmetic operations in JavaScript. Gain proficiency in harnessing these operators for diverse scenarios, from basic mathematical calculations to complex numerical manipulations.

[Previous: Functions](functions)  
[Next: ]()  
[More information: MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators)  