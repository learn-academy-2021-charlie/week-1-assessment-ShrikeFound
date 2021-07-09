// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// All problems can be solved with concepts covered in class or in the syllabus
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a function that takes in a number and determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Fahrenheit.
// Use the test variables provided below. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212

// create a function that
// accepts a number 
// determines whether it is 
// above boiling point 
// at boiling point 
// or below boiling point
// returns the number and an appropriate message 

//created a function that takes a number
const thermomatize =(number) =>{
    
    //constant that we'll check against 
    const boilingPoint = 212;
    
    //if input is not a number, return a message letting you know.
    if(typeof number !== "number") return "please enter a number"
    
    //if the number is ABOVE (not at) the boiling point, return this
    if(number > boilingPoint){
        return `${number} is above boiling point`
    //else, if the number is AT the boiling point, return this
    }else if(number === boilingPoint){
        return `${number} is at boiling point`
    //else, we're assuming that the number is below the boiling point so we return this
    }else{
        return  `${number} is below boiling point`
    }
}

//trying out the test cases
console.log(thermomatize(temp1))
console.log(thermomatize(temp2))
console.log(thermomatize(temp3))

// console.log(thermomatize(45))
// console.log(thermomatize(400000))
// console.log(thermomatize(-100))
// console.log(thermomatize(212.05))
// console.log(thermomatize(0))
// console.log(thermomatize("really cold"))


// --------------------2) Create a function that takes in two arrays of numbers and returns a single array with all the values sorted least to greatest.
// Use the test variables provided below. Expected output: [-9, -7, 0, 3, 7, 8, 9, 13, 22, 36]

var myNumbers1 = [3, 7, 0, 36, -9]
var myNumbers2 = [8, -7, 22, 9, 13]

//function that takes two arrays and smushes them, but in an orderly way.
const orderedSmush = (arrayOne,arrayTwo) =>{
    // combine the two arrays into one 
    const result = arrayOne.concat(arrayTwo)
    
    //pass a function into the sort method that accepts two arguments itself: 
    // a (the first number being compared)
    // b (the second number being compared)
    //sort according to the result
    //should mention that the curly brackets and return statement aren't required when it's on the same line
    result.sort((a,b) => a-b)

    //return the smushed and sorted array
    return result
}

console.log(orderedSmush(myNumbers1,myNumbers2))

// --------------------3) Create a function that takes in a string of a single word and returns the string with all letters reversed.
// Use the test variables provided below. Expected output: "ovarb", "eilrahc"

var myString1 = "bravo"
var myString2 = "charlie"

//create a function that takes a string
const reverserator = (string) =>{
    //taking the string and splitting it into an array of characters
    //reversing that array using an array method
    //joining that array into a string with empty strings between the characters
    //returning that now rejoined and reversed string
    return string.split("").reverse().join("");


}

console.log(reverserator(myString1))
console.log(reverserator(myString2))


// --------------------4) Create a function that takes in two numbers and subtracts the smaller number from the larger number.
// Use the two sets of test variables provided below. Expected output: 15, 12

var numberExample1 = 42
var numberExample2 = 27

var numberExample3 = 7
var numberExample4 = 19

//create a function that takes two numbers
const bigGreenSubtractor = (numOne,numTwo) =>{
    //return if not a number
    if (typeof numOne !== "number" || typeof numTwo !== "number") return "please enter two numbers."
    // if number one is larger than number two, then subtract two from one and return the result
    if(numOne > numTwo){
        return numOne - numTwo
    // otherwise, we can return the result of number two - number one.
    }else{
        return numTwo - numOne
    }
    //there's nothing specific we're supposed to if the numbers are equal, so I'm just returning 0 in that case.
}

console.log(bigGreenSubtractor(numberExample1,numberExample1))
console.log(bigGreenSubtractor(numberExample3,numberExample4))

// --------------------5) Copy/paste your code from #4. Refactor your code to also accept non-number edge cases. Inform your user if the variable passed into the subtraction function is not a number.
// Use the two sets of test variables provided below. Expected output: "Your input is not a number", 3
// Hint: There is an operator in JavaScript called typeof :)

var numberExampleRefactor1 = 42
var numberExampleRefactor2 = "hello"

var numberExampleRefactor3 = 27
var numberExampleRefactor4 = 24

//copy and paste from above, with new and improved name
const bigGreenSubtractorRefactor = (numOne,numTwo) =>{
    //add some helpful text in case a non-number is entered
    if (typeof numOne !== "number" || typeof numTwo !== "number") return `please enter two numbers. you entered: ${numOne} & ${numTwo}`
    if(numOne > numTwo){
        return numOne - numTwo
    }else{
        return numTwo - numOne
    }
}

console.log(bigGreenSubtractorRefactor(numberExampleRefactor1,numberExampleRefactor2))
console.log(bigGreenSubtractorRefactor(numberExampleRefactor3,numberExampleRefactor4))