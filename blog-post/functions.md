# Functions

Embark on an odyssey through the intricate symphony of JavaScript functions – the orchestrators of code harmony. This comprehensive guide transcends the basics, unraveling the depths of function declarations, closures, recursion, and advanced techniques like arrow functions and rest parameters. By the journey's end, you'll wield functions as virtuoso instruments, conducting code with elegance and precision.

## Defining functions:

### Function declarations:
JavaScript functions, akin to procedural maestros, encapsulate tasks or computations. A function declaration consists of the function keyword, name, parameters, and a block of statements. Behold the simplicity in defining a function like a musical composition.

```javascript
function square(number) {
  return number * number;
}
```

## Parameters and objects:
Parameters breathe life into functions, enabling dynamic input. Witness the transformative power of object references as function parameters, unveiling a symphony of modifications beyond function boundaries.

```javascript
function myFunc(theObject) {
  theObject.make = "Toyota";
}

const mycar = {
  make: "Honda",
  model: "Accord",
  year: 1998,
};

console.log(mycar.make); // "Honda"
myFunc(mycar);
console.log(mycar.make); // "Toyota"
```

## Function expressions:
Functions birthed through expressions, both anonymous and named, add a nuanced melody to your code. The interplay of named and anonymous expressions echoes the flexibility of a musical improvisation.

```javascript
const square = function (number) {
  return number * number;
};

const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};
```

## Calling functions:

## Executing functions:
Defining a function merely orchestrates its existence; calling it plays the actual notes. Understand the intricacies of function invocation, where scope dynamics and JavaScript's dynamism blend seamlessly.

```javascript
square(5);
```

## Recursion:
Delve into the recursive harmonies, where a function's melody echoes within itself. Appreciate the recursive dance as factorials unfold, painting a musical portrait of mathematical elegance.

```javascript
console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(3)); // 6
```

## Closures and nested functions:

### Closures unveiled:
Closures, akin to musical motifs, imbue functions with the ability to access external variables. Witness the melodic preservation of variables within nested functions, encapsulating the essence of your code.

```javascript
const pet = function (name) {
  const getName = function () {
    return name;
  };
  return getName;
};

const myPet = pet("Vivie");
console.log(myPet()); // "Vivie"
```

### Nested functions and scope:
Delight in the symphony of scope chaining, where nested functions harmonize with parent variables. Variable precedence unfolds like musical notes, creating a dynamic composition of encapsulation.

```javascript
function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z);
    }
    C(3);
  }
  B(2);
}
A(1); // Logs 6
```

## Arrow functions and advanced techniques:

### Arrow functions simplified:
Arrow functions, the virtuosos of brevity, introduce a shorter syntax and escape the binding complexities of this. Immerse yourself in the expressive elegance of arrow function compositions.

```javascript
const multiply = (a, b = 1) => a * b;

console.log(multiply(5)); // 5
```

## Rest parameters and spread syntax:
Uncover the symphony of flexibility as rest parameters conduct an array-like ensemble. The spread syntax orchestrates an array ballet, enabling dynamic manipulations.

```javascript
function multiply(multiplier, ...theArgs) {
  return theArgs.map((x) => multiplier * x);
}

const arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
```

[Previous: Loops](loops)  
[Next: Expressions and operators](expressions-operators)  
[More information: MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)   
