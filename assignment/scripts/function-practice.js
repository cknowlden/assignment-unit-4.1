console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return `Hello, ${name}!`;
}

// Remember to call the function to test
console.log(helloName('Cali'));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber,secondNumber) {
  // return firstNumber + secondNumber;
  let sum = firstNumber+secondNumber;
  return sum;
}
console.log('The function says the sum of the numbers is:', addNumbers(3,5))

// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber,secondNumber,thirdNumber) {
  let multiplication = firstNumber*secondNumber*thirdNumber;
  return multiplication;
}

console.log('The multiplication of the numbers is:', multiplyThree(3,5,2))
// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  } else {
    return false;
}
}

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log(`The number is positive: ${isPositive(-72)}`);
console.log(`The number is positive: ${isPositive(49)}`);
console.log(`The number is positive: ${isPositive(0)}`);

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let array = [0, 9, -42, -99, 4];
let lastItem = array[array.length-1];
function getLast(array) {
  return lastItem;
}
//array.length=0
console.log(`items in the array, ${array}`);
console.log('the last item is:', getLast());
// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
let randomArray = ['purple', 45, 'pajamas', -112, 0, 'elementary']
function find(value, array) {
  for (i = 0; i < array.length; i++){
    if (array[i] === value){
      return true;
      } else {
    } 
  } return false;
}

console.log(`the array includes these values: ${randomArray}`);
console.log('I found the value that you are looking for', find('pajamas', randomArray));
console.log('I found the value that you are looking for', find(189, array));

// ----------------------
// Stretch Goals
// ----------------------
console.log('*********STRETCH GOALS**********')
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
let letter;
let string; 
function isFirstLetter(letter, string) {
if (string.startsWith(letter)){
return true;
} else {
  return false;
}
}
letter = 'r';
string = 'red rover red rover send Billy right over';
console.log(letter, 'is the first letter of the string', isFirstLetter(letter, string));
// 9. Function to return the sum of all numbers in an array
let newArray = [2, -8, 4, 17];
console.log(`the array has the following numbers: ${newArray}`);
function sumAll(newArray) {
  let sum = 0;
  // TODO: loop to add items
  for (let i = 0; i < newArray.length; i++){
  // TODO: return the sum
    sum += newArray[i];
  }
  return sum;
}
console.log('the sum of the numbers in the array is', sumAll(newArray));

//Alternatively, Ryan Barfield helped me to understand how to write this in a simplified way with a for of loop:
// function sumAll(newArray) {
//   let sum = 0;
//   for (let number of newArray) {
//       sum += number;
//   }
//   return sum;
// }
// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive() {

}


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
