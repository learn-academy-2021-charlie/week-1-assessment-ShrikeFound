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

//create a function that takes a number
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
console.log("-----------------------------------------")
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

console.log("order smush:")
console.log(orderedSmush(myNumbers1,myNumbers2));

//gonna try to sort without using the sort() method's optional argument and without for/foreach/while loops.
//gonna try using two functions. one to concat the two arrays, one to sort.



// const concatAndSort = (arrayOne,arrayTwo) =>{
//     singleArray = arrayOne.concat(arrayTwo)
//     sortArray(singleArray)
// }

// const sortArray = (array) =>{
//     console.log(array)
// }

// concatAndSort(myNumbers1,myNumbers2);

//I can compare array[i] and array[i+1], then rearrange those two elements if needed. 
// with a loop, I could do these for each index and the loop would include logic for when to stop
//without a loop, I need to tell my function how to know when to stop.

//this function will accept an array (and an index)
// const loopThroughArray =(array,index) =>{
//     //if no index is passed in, we start at zero
//     if(typeof index === "undefined"){
//         index = 0
//     }
//     //if the index is greater than the array length, we return the array
//     if (index > array.length) return array
    
//     console.log(`looping through array [${array}]! index: ${index}`)
//     //otherwise we return the result of the same function with an incremented index
//     return loopThroughArray(array,++index)
// }

// //looping without loops!
// loopThroughArray(myNumbers1);



//we can iterate through the array and then compare the values
// const loopThroughArrayAndSort =(array,index) =>{

//     if(typeof index === "undefined"){
//         index = 0
//     }

//     if (index > array.length) return array
    
//     console.log(`looping through array [${array}]! index: ${index}`)
//     if(array[index] > array[index+1]){
//         const placeholder = array[index+1]
//         array[index+1] = array[index]
//         array[index] = placeholder
//     }

//     return loopThroughArrayAndSort(array,++index)
// }
// console.log("-----------------------");
// loopThroughArrayAndSort(myNumbers1);

//it does some sorting, but fully sorting would require looping through the array more than once.
//we could try looping through and this time, iterate through the array (starting back at 0 once we reach the end of the array)
//until the array is sorted.

// const loopUntilSorted = (array,index) =>{

// }

//welp.
//ok. how do I check if the loop is sorted?
//I can go through each index, compare it with the one ahead, and if it's less then we're good.

//takes an array. 
const isSorted = (array,index) =>{
    //same as above, if no index is passed then start at 0.
    if(typeof index === "undefined"){
        index = 0
    }
    // if we made it to the end of the array, the array is sorted
    if(index >= array.length-1) return true 
    // console.log(`index : ${index}. array length: ${array.length} testing ${array[index]} and ${array[index+1]}`)
    //if the value of array[index] is less than value at array[index+1], check the next index and return that value
    if(array[index] < array[index+1]){
        return isSorted(array,index+1)
    }else{
        //otherwise break the chain and just return false.
        return false
    }

}

// const sortedTestArray = [1,2,3,4,5,56]
// myNumbers1 = [3, 7, 0, 36, -9]
// console.log(isSorted(myNumbers1));
// console.log(isSorted(sortedTestArray));

//cool, function to test if array is sorted is ready.


const loopUntilSorted = (array,index) =>{
    //if array is sorted, return sorted array
    if (isSorted(array)) return array
    
    //if no index given, start at 0.
    //ALSO: if index is larger than an index we can safely compare, go back to 0.
    if(typeof index === "undefined" || index >= array.length-1){
        index = 0
    }
    
    //until array is sorted, we're gonna go through each index and sort it.
    if(array[index] > array[index+1]){
                const placeholder = array[index+1]
                array[index+1] = array[index]
                array[index] = placeholder
            }
    // console.log("we're going in!")
    return loopUntilSorted(array,index+1)

}


// console.log(loopUntilSorted(myNumbers1));
// console.log(loopUntilSorted(sortedTestArray));
//huzzah!




const concatAndSort = (arrayOne,arrayTwo) =>{
    singleArray = arrayOne.concat(arrayTwo)
    return loopUntilSorted(singleArray)
}

console.log("sort without sort:")
console.log(concatAndSort(myNumbers1,myNumbers2));
console.log("-----------------------------------------")






























// --------------------3) Create a function that takes in a string of a single word and returns the string with all letters reversed.
// Use the test variables provided below. Expected output: "ovarb", "eilrahc"

var myString1 = "bravo"
var myString2 = "charlie"

//create a function that takes a string
const reverserate = (string) =>{
    //taking the string and splitting it into an array of characters
    //reversing that array using an array method
    //joining that array into a string with empty strings between the characters
    //returning that now rejoined and reversed string
    return string.split("").reverse().join("");


}




console.log(reverserate(myString1))
console.log(reverserate(myString2))
console.log("-----------------------------------------")

// --------------------4) Create a function that takes in two numbers and subtracts the smaller number from the larger number.
// Use the two sets of test variables provided below. Expected output: 15, 12

var numberExample1 = 42
var numberExample2 = 27

var numberExample3 = 7
var numberExample4 = 19

//create a function that takes two numbers
//function name should should brought be a verb, sorry.
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

// console.log(bigGreenSubtractor(numberExample1,numberExample1))
// console.log(bigGreenSubtractor(numberExample3,numberExample4))

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