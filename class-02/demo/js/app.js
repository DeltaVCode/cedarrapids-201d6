'use script';
//first thing to do
console.log('This file is connected.');


//prompt our user for input data
// var userName = prompt('What is your name?');
// console.log(userName);

//Greet the user
// alert('Hello ' + userName);

// //convert the input to lowerCase
// var lowerCaseName = userName.toLowerCase();
// console.log(lowerCaseName);

// //Validate the input using conditional logic using strict equals.
// if(lowerCaseName === 'craig' || lowerCaseName === 'bob') {
//   alert('Welcom back to my page, ' + userName);
// } else {
//   alert('Welcome new user to my page.');
// }


// logical operator example
// var myBooleenValueTrue = true;
// var anotherBooleenValueFalse = false;
// var thirdBooleenValueTrue = true;
//else if
var myBooleenValueTrue = true;
var anotherBooleenValueFalse = false;
var thirdBooleenValueTrue = false;
//next else if
// var myBooleenValueTrue = false;
// var anotherBooleenValueFalse = false;
// var thirdBooleenValueTrue = true;
//else
// var myBooleenValueTrue = false;
// var anotherBooleenValueFalse = false;
// var thirdBooleenValueTrue = false;

if (myBooleenValueTrue && thirdBooleenValueTrue){
  alert('The && will run if both are true');
  console.log('both values were true');
} else if(myBooleenValueTrue || anotherBooleenValueFalse){
  alert('The || will run if both are true');
  console.log('one of values was true');
} else if(thirdBooleenValueTrue){
  alert('the 3rd value was tru so this will run');
  console.log('thirdBooleenValueTrue was true');
} else {
  console.log('There were no true values');
}


//create an empty array
var emptyArray = [];
//Create an array full of "quiz answers" by putting the answers into the array
//                 0   1   2   3   4
var quizAnswer = ['b','c','d','a','c'];

//nested array
var nestedArray = [['yes', 'y'], ['no', 'n'],['maybe', 'maybeNot']];

//multiline
var nestedArrayMultiLine  = [
  ['yes', 'y'],
  ['no', 'n'],
  ['maybe', 'maybeNot']
];

// we don't always have to commit to a specific data type
var mixedDataTypes = ['Harry', 'Potter', 10, true, 'magic'];
