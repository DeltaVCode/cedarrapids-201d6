'use strict';

console.log('this file is connected.');


// function functionName() {
// //our code lives here.
//   console.log('this is from the functions');

// }
//functionName();

// parameter are  var variables = allow us to give things in our code human readable values that we can use throughout the code.

// function multiply(num1, num2){
// //   console.log('console', num1);
//   var answer = num1 * num2;
//   return answer;

// }

// var result1 = multiply(2, 3);
// var result2 = multiply(4,5);

// console.log('console result 1', result1);
// console.log('console result 2', result2);


// function circleProps(radius){

//   var area = Math.PI * radius * radius;
//   var circumference = 2 * Math.PI * radius;
//   var props = [area, circumference];

//   return props;
// }
// var circle1 = circleProps(3);

// console.log(circle1);

// this is a function expression. 
// var circleProps = function(radius){

//   var area = Math.PI * radius * radius;
//   var circumference = 2 * Math.PI * radius;
//   return [area, circumference];

// };

// var getCircle = circleProps(3);
// console.log(getCircle);



// var checkLogin = 

// (     function() {
//   var userID;
//   if (userID) {
//     console.log('user with ID ' + userID + ' is logged in.');
//   } else {
//     console.log('user not logged in.');
//   }
// }           )      ();

// console.log(checkLogin);

// var i;
// //Scope 
// for(i = 0; 2; 3;)

var globalVar = 'universal';

function scoper(param){
  var localVar = 'I like my privacy!';
  console.log('inside the function we can see para = ' + param);
  console.log('we can see localVar ' + localVar);
  console.log('we can see the global variable ' + globalVar);

  for(var i = 0; i < 3; i++){
    console.log('the value of i ' + i);
  }

  console.log('can we see i outside the loop? ' + i);

}
scoper('argument');

console.log('we can see the global variable ' + globalVar);
// console.log('we can see localVar ' + localVar);
// console.log('inside the function we can see para = ' + param);
