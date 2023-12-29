# Expressios and operators

This chapter delves into JavaScript's expressions and operators, covering a spectrum from assignment to comparison, arithmetic, bitwise, logical, string, ternary, and more.

## Expressions defined:
At its core, an expression is a code unit that computes a value. Two types exist: those with side effects, such as assignments, and those solely evaluative.

### Examples of expressions:
Examine the dual nature of expressions through examples. The assignment expression x = 7 demonstrates side effects, using the = operator to assign the value seven to variable x, while the expression 3 + 4 showcases evaluation, adding 3 and 4.

## Operators overview:
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

### Operator precedence:
Unravel the significance of operator precedence in determining the evaluation order. Explore examples like const x = 1 + 2 * 3 to understand how operators with different precedence levels impact the outcome. Learn to override precedence using parentheses.

### Binary and unary operators:
Distinguish between binary and unary operators in JavaScript. Binary operators, like 3 + 4, require two operands, while unary operators, such as x++ or ++x, operate on a single operand. Explore the concepts of infix and postfix unary operators.

### Special ternary operator:
Encounter the conditional operator, a special ternary operator. It involves three operands and serves as a concise way to write if-else statements in a single line. Uncover its utility in simplifying conditional expressions.

## Assignment operators
This section delves into the realm of JavaScript assignment operators, crucial tools for manipulating variables. The primary assignment operator, '=', assigns the value of the right operand to the left operand. Shorthand versions, such as +=, -=, *=, and more, offer concise alternatives for common operations.

### Compound Assignment Operators:
Explore a spectrum of compound assignment operators, each serving as a shorthand for a specific operation. From addition and subtraction to exponentiation and logical operations, these operators enhance code readability and efficiency.

### Assigning to properties:
Uncover the power of assignment expressions when dealing with object properties. Learn how expressions evaluating to objects allow dynamic property assignments, providing flexibility in object manipulation.

### Destructuring assignment:
Delve into the elegant syntax of destructuring assignments, simplifying the extraction of data from arrays or objects. Witness its efficiency in contrast to traditional multi-statement approaches, streamlining the code-writing process.

### Evaluation and nesting:
Examine the nuances of assignment expressions' evaluation, shedding light on their role within variable declarations or standalone statements. Understand the potential pitfalls of chaining or nesting assignments and the importance of comprehending their behavior in various contexts.

### Examples of evaluation:
Embark on detailed examples illustrating the evaluation process of assignment expressions. From the right-associative nature of the '=' operator to the step-by-step breakdown of complex expressions involving functions and arrays, gain a profound understanding of the evaluation flow.

### Avoiding assignment chains:
Navigate the cautionary realm of assignment chains, where chaining or nesting assignments within expressions may lead to unexpected outcomes. Understand the risks associated with such practices, especially when declaring variables using const, let, or var statements.

## Comparison operators
Embark on a journey through JavaScript's comparison operators, powerful tools that assess operands and yield logical values based on the outcome of the comparison. These operators cater to numerical, string, logical, and object values, with a focus on standard lexicographical ordering for strings.

### Type conversion insights:
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

### Examples of comparison:
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

## Arithmetic operators
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

### Illustrative examples:
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

## Bitwise operators
Embark on a journey into the binary universe as JavaScript's bitwise operators take center stage. Unlike traditional numerical operations, bitwise operators treat their operands as 32-bit binary entities, unlocking a new dimension of numerical manipulation. Dive into this realm of zeros and ones, where binary representations pave the way for intriguing bitwise operations.

### Bitwise operators overview:
Explore the diverse set of bitwise operators that redefine how JavaScript handles binary representations. These operators, summarized in the table below, delve into tasks like AND, OR, XOR, NOT, left shift, sign-propagating right shift, and zero-fill right shift.

Operator	Usage	Description
- Bitwise AND: a & b - Returns a one in each bit position where both operands have ones.
- Bitwise OR: a | b - Returns a zero in each bit position for which the corresponding bits of both operands are zeros.
- Bitwise XOR: a ^ b - Returns a zero where bits are the same, and a one where bits are different.
- Bitwise NOT: ~ a - Inverts the bits of its operand.
- Left shift: a << b - Shifts the bits of a to the left by b positions, filling in zeros from the right.
- Sign-propagating right shift:	a >> b - Shifts the bits of a to the right by b positions, preserving the leftmost bit (sign bit).
- Zero-fill right shift: a >>> b	- Shifts the bits of a to the right by b positions, filling in zeros from the left.

### Bitwise logical operators:
Conceptualize the operation of bitwise logical operators, where operands are converted to thirty-two-bit integers, and bit pairs are subjected to logical operations. Witness this process through illustrative examples involving AND, OR, XOR, and NOT.

### Illustrative examples:
Explore how binary representations of numbers undergo bitwise operations, resulting in distinct numerical outcomes.

```javascript
const nine = 9;        // Binary: 1001
const fifteen = 15;    // Binary: 1111

console.log(fifteen & nine);   // 9 (AND operation)
console.log(fifteen | nine);   // 15 (OR operation)
console.log(fifteen ^ nine);   // 6 (XOR operation)
console.log(~fifteen);         // -16 (Bitwise NOT)
console.log(~nine);            // -10 (Bitwise NOT)
```

### Bitwise shift operators:
Delve into the dynamics of bitwise shift operators, where bits are shifted left or right, creating intriguing results. Explore left shift, sign-propagating right shift, and zero-fill right shift.

Examples:
Uncover the impact of shifting bits in both directions, generating unique numerical outcomes.

```javascript
let num = 9;            // Binary: 1001

console.log(num << 2);  // 36 (Left shift)
console.log(num >> 2);  // 2 (Sign-propagating right shift)
console.log(num >>> 2); // 2 (Zero-fill right shift)
```

### Mastering the binary terrain:
Gain mastery over the binary terrain as you grasp the intricacies of JavaScript's bitwise operators. Witness how these operators open up new possibilities for numerical manipulation and delve into scenarios where binary logic shines.

## Logical operators
Logical operators in JavaScript are powerful tools primarily used with Boolean values. However, their versatility extends beyond Booleans, as they can return non-Boolean values. This exploration will dissect the logical AND (&&), logical OR (||), and logical NOT (!) operators, unraveling their behavior with illustrative examples.

### Logical AND (&&) operator:
The logical AND operator combines two expressions, returning the second expression if the first can be converted to false; otherwise, it returns the first expression. When used with Boolean values, it returns true only if both operands are true; otherwise, it returns false.

Examples:
```javascript
const a1 = true && true;      // true && true returns true
const a2 = true && false;     // true && false returns false
const a3 = false && true;     // false && true returns false
const a4 = false && 3 === 4;  // false && false returns false
const a5 = "Cat" && "Dog";     // true && true returns Dog
const a6 = false && "Cat";    // false && true returns false
const a7 = "Cat" && false;    // true && false returns false
```
### Logical OR (||) operator:
The logical OR operator evaluates two expressions, returning the first expression if it can be converted to true; otherwise, it returns the second expression. When employed with Boolean values, it returns true if either operand is true; if both are false, it returns false.

Examples:
```javascript
const o1 = true || true;      // true || true returns true
const o2 = false || true;     // false || true returns true
const o3 = true || false;     // true || false returns true
const o4 = false || 3 === 4;  // false || false returns false
const o5 = "Cat" || "Dog";     // true || true returns Cat
const o6 = false || "Cat";    // false || true returns Cat
const o7 = "Cat" || false;    // true || false returns Cat
```

### Logical NOT (!) operator:
The logical NOT operator negates a single operand, returning false if the operand can be converted to true; otherwise, it returns true.

Examples:
```javascript
const n1 = !true;   // !true returns false
const n2 = !false;  // !false returns true
const n3 = !"Cat";  // !true returns false
```

### Short-Circuit evaluation:
Logical expressions undergo left-to-right evaluation, employing short-circuit rules to optimize execution:

- false && anything short-circuits to false.
- true || anything short-circuits to true.

This ensures correctness while avoiding unnecessary evaluations.

Modern Alternative: Nullish Coalescing Operator (??):
For scenarios involving defaults where values like '' or 0 are valid, the Nullish coalescing operator (??) serves as a superior alternative to ||.

## BigInt operators
In the vast realm of JavaScript, BigInt operators wield immense power, enabling precise operations on large integer values. This exploration unveils the secrets of BigInt addition, division, and bitwise operations, shedding light on their nuances.

### BigInt addition:
BigInt addition seamlessly combines two BigInt values, delivering an accurate result.

```javascript
const a = 1n + 2n; // 3n
```

### Division with BigInts:
BigInt division adheres to a unique rule, rounding towards zero and producing BigInt results.

```javascript
const b = 1n / 2n; // 0n
```

### Bitwise operations with BigInts:
Bitwise operations with BigInts maintain full precision, avoiding truncation on either side.

```javascript
const c = 40000000000000000n >> 2n; // 10000000000000000n
```

### Exception: unsigned right shift (>>>):
Unsigned right shift (>>>) finds no place in the BigInt realm, as BigInt lacks a fixed width, making the concept of the "highest bit" non-existent.

```javascript
const d = 8n >>> 2n; // TypeError: BigInts have no unsigned right shift, use >> instead
```

### Mixing BigInts and numbers:
Caution surfaces when attempting to mix BigInts and numbers, as they are not interchangeable in calculations.

```javascript
const a = 1n + 2; // TypeError: Cannot mix BigInt and other types
```

### Explicit conversion for precision:
Explicit conversion emerges as a solution to the dissonance between BigInts and numbers, preserving precision.

```javascript
const a = Number(1n) + 2;    // 3
const b = 1n + BigInt(2);    // 3n
```

### Bridging the Gap: Comparing BigInts with numbers:
Despite their differences, BigInts and numbers can engage in comparisons, allowing developers to navigate their distinct characteristics.

```javascript
const a = 1n > 2;  // false
const b = 3 > 2n;  // true
```

## String operators
In addition to the comparison operators, which can be used on string values, the concatenation operator (+) concatenates two string values together, returning another string that is the union of the two operand strings.

For example,

```javascript
console.log("my " + "string"); // console logs the string "my string".
```

The shorthand assignment operator += can also be used to concatenate strings.

For example,

```javascript
let mystring = "alpha";
mystring += "bet"; // evaluates to "alphabet" and assigns this value to mystring.
```

## Conditional (ternary) operator
The conditional operator is the only JavaScript operator that takes three operands. The operator can have one of two values based on a condition. The syntax is:

```javascript
condition ? val1 : val2
```

If condition is true, the operator has the value of val1. Otherwise it has the value of val2. You can use the conditional operator anywhere you would use a standard operator.

For example,

```javascript
const status = age >= 18 ? "adult" : "minor";
```

This statement assigns the value "adult" to the variable status if age is eighteen or more. Otherwise, it assigns the value "minor" to status.

## Comma operator
The comma operator (,) evaluates both of its operands and returns the value of the last operand. This operator is primarily used inside a for loop, to allow multiple variables to be updated each time through the loop. It is regarded bad style to use it elsewhere, when it is not necessary. Often two separate statements can and should be used instead.

For example, if a is a 2-dimensional array with 10 elements on a side, the following code uses the comma operator to update two variables at once. The code prints the values of the diagonal elements in the array:

```javascript
const x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const a = [x, x, x, x, x];

for (let i = 0, j = 9; i <= j; i++, j--) {
  //                              ^
  console.log(`a[${i}][${j}]= ${a[i][j]}`);
}
```

## Unary operators
Unary Operators: Solo Performances

### Delete operator:
The delete operator gracefully removes an object's property, with a nuanced dance of success and failure.

```javascript
delete Math.PI; // Returns false (cannot delete non-configurable properties)

const myObj = { h: 4 };
delete myObj.h; // Returns true (can delete user-defined properties)
```

### Typeof operator:
The typeof operator unveils the identity of variables, keywords, and objects, a linguistic oracle in the world of types.

```javascript
typeof myFun; // Returns "function"
typeof shape; // Returns "string"
typeof size; // Returns "number"
typeof foo; // Returns "object"
typeof today; // Returns "object"
typeof doesntExist; // Returns "undefined"
```

### Void operator:
The void operator, a whisper in the void, evaluates expressions without returning a value, a silent yet intentional act.

```javascript
void expression;
```
## Relational Operators
In the vast terrain of JavaScript, relational operators serve as navigators, comparing objects and unveiling the intricate relationships within. Traverse the in operator's landscapes, explore the instanceof operator's realm, and discover the nuances of basic expressions.

In Operator: Unveiling Object Realms
The in operator uncovers hidden realms, returning true if a property resides within the specified object.

```javascript
// Arrays
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
0 in trees; // Returns true
3 in trees; // Returns true
6 in trees; // Returns false
"bay" in trees; // Returns false (specify index, not value)
"length" in trees; // Returns true (length is an Array property)

// Built-in objects
"PI" in Math; // Returns true
const myString = new String("coral");
"length" in myString; // Returns true

// Custom objects
const mycar = { make: "Honda", model: "Accord", year: 1998 };
"make" in mycar; // Returns true
"model" in mycar; // Returns true
```

### Instanceof operator
The instanceof operator reveals the true nature of objects, confirming if an object belongs to a specified type.

```javascript
const theDay = new Date(1995, 12, 17);
if (theDay instanceof Date) {
  // Statements to execute
}
```

## Basic Expressions:

### this Keyword:
The this keyword guides us to the current object, a dynamic beacon in the method landscape.

```javacript
this["propertyName"];
this.propertyName;
```

### Grouping operator ( ):
The grouping operator orchestrates the precedence ballet, allowing expressions to dance in harmony.

```javascript
const a = 1;
const b = 2;
const c = 3;

// Default precedence
a + b * c; // 7
// Evaluated by default like this
a + (b * c); // 7

// Overriding precedence
// Addition before multiplication
(a + b) * c; // 9

// Equivalent to
a * c + b * c; // 9
```

### New operator:
The new operator conjures instances of objects, breathing life into both user-defined and built-in types.

```javascript
const objectName = new ObjectType(param1, param2, /* …, */ paramN);
```

### Super keyword:
The super keyword summons the wisdom of an object's parent, a conduit to invoke the parent constructor or functions.

```javascript
super(args); // Calls the parent constructor
super.functionOnParent(args);
```

Embark on the journey through relational operators, where inquisitive operators unveil object realms, instanceof uncovers object types, and basic expressions navigate the expressive galaxy. May your comparisons be true, your instances vibrant, and your expressions harmonious in the captivating landscapes of JavaScript.

[Previous: Functions](functions)  
[Next: ]()  
[More information: MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators)  