## Assignment 3

For this assignment, we will be taking a nice break from Express and Firebase to learn about some cool JavaScript fundamentals! 

ALL questions in this assignment MUST be done using `.map`, `.filter`, or `.reduce`. We will give you no credit for an approach that is not functional.

ALL functions must also be defined using **arrow functions**:
```
(params) => { 
  // function body 
}
```

## Question 1

Write a function, `myMean`, that takes in an array of numbers and returns the mean.

## Question 2

Write a function, `getSquares`, that takes in an array of numbers and returns a new array containing only the elements that are perfect squares. 

Example: `getSquares([1, 2, 3, 4])` should return `[1, 4]`.  

## Question 3

Write a function, makeSentences, that takes in an array of objects 
in the format {name: string, age: number, breed: string} and maps it to an array of sentences
in the format "_name_ is _age_ years old, and is a _breed_."

Please use _object destructuring_ to get object fields.

**NOTE**

A "prototype" is an instance of an object in JavaScript. In documentation, methods are often denoted like:
  `Type.prototype.method()`
  
  Remember, anything in JavaScript can be an object!

  So, we can do: `5.toExponential(10)` or `let x = 5; x.toExponential()`

  Your goal is to display "5 years" for the value 5.6

Take a look at [this documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#Methods) and choose an appropriate method to use!

**EXAMPLE** 

```js
const doggos = [
  { name: 'Sparky', age: 3.3, breed: 'Pomeranian Husky'},
  { name: 'Oreo', age: 5.4, breed: 'Dalmatian'},
  { name: 'Stella', age: 4.3, breed: 'Alaskan Klee Kai'}
];

makeSentences(doggos); 
```

should output
```js
[
  "Sparky is 3 years old and is a Pomeranian Husky",
  "Oreo is 5 years old and is a Dalmatian",
  "Stella is 4 years old and is a Alaskan Klee Kai"
]
```

> Optional Challenge: In English, "a" becomes "an" before vowels. Create a function such that makeCorrectSentences(doggos) correctly handles this case.
