// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Charlie 2021"
console.log(cohort.length)

// a) Your answer:
// output: 12
// b) Verify and explain: 12, since the string has 12 characters including spaces.


// --------------------2) What will this log?

var greeting = "Hello World!"
console.log(greeting[3])

// a) Your answer: "l"
// b) Verify and explain: "l" is the fourth character in the string. since string indices start at 0, the fourth character would be at index 3.



// --------------------3) What will this log?

var languages = ["JavaScript", "Ruby", "Python", "C++"]
var index = 1
console.log(languages[index])

// a) Your answer: "Ruby"
// b) Verify and explain: we're logging the value of an element in the languages array that is at [index]. index is holding 1, so we log the value of the element at languages[1]: "Ruby".


// --------------------4) What will this log?

var weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: assuming this is an error?
// b) Verify and explain: gives us "weekendDays.toUpperCase is not a function" since we're trying to get an array to use a string method.


// --------------------5) What will this log?

var dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: number
// b) Verify and explain: we're getting the length of the array. we're then checking the type of the length (not the array), so the result is a number.
