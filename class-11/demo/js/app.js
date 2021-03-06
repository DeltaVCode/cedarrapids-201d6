'use strict';
console.log('app.js is connected.');


//These are in an html collection(array) use ref to image index instead of id's for tracking images shown we are still going to count total clicks and each image's click amount.

var imageElements = document.getElementsByTagName('img');

var pizzaIndex1 = 0;
var pizzaIndex2 = 1;
var rounds = 5;
var allPizzas = [];

function Pizza(name, imageUrl){
  this.name = name;
  this.imageUrl = imageUrl;
  this.timesClicked = 0;
  allPizzas.push(this);
}

//create pizza objects
new Pizza('Brick Oven Pizza', 'images/brickOvenPizza.jpeg');
new Pizza('Calzone', 'images/calzonePizza.jpeg');
new Pizza('Chicago Deep Dish', 'images/chicagoPizza.jpeg');
new Pizza('Chicago Pizza and Oven Grinder', 'images/cpoGinderPizza.jpeg');
new Pizza('Detroit Style', 'images/detroitPizza.jpeg');
new Pizza('Papa Vito\'s Thin', 'images/mwDeluxePizzaThinCrust.jpg');
new Pizza('New York Thin', 'images/newYorkPizza.jpeg');
new Pizza('Detroit Style', 'images/sgDansHtossedMeatLovPizza.jpg');

var totalClicks = 0;
function imageWasClicked(event){
//total clicks are being counted.
  totalClicks++;
  //console.log('image was clicked');
  if(event.srcElement.id === '1'){
   // console.log('this was image one.');
    allPizzas[pizzaIndex1].timesClicked++;
  } else if(event.srcElement.id === '2'){
    allPizzas[pizzaIndex2].timesClicked++;
  }
// } I removed this because it was in the wrong spot go to line 74.

//Add logic so that we dont see the same images from click to click.
var nextPizzaIndex1 = Math.floor(Math.random() * allPizzas.length);
while((pizzaIndex1 === nextPizzaIndex1) || (nextPizzaIndex2 === nextPizzaIndex1)){
  nextPizzaIndex1 = Math.floor(Math.random() * allPizzas.length);
}

var nextPizzaIndex2 = Math.floor(Math.random() * allPizzas.length);
while((nextPizzaIndex2 === pizzaIndex2) || (nextPizzaIndex2 === nextPizzaIndex1)){

  nextPizzaIndex2 = Math.floor(Math.random() * allPizzas.length);
}

//set up a passing a variable by reference to pizzaIndex 1 and 2
pizzaIndex1 = nextPizzaIndex1;
pizzaIndex2 = nextPizzaIndex2;


//Pick a random picture to display
imageElements[0].src = allPizzas[pizzaIndex1].imageUrl;
imageElements[1].src = allPizzas[pizzaIndex2].imageUrl;

//calculate rounds.
if(totalClicks >= rounds){
  var footerElement = document.getElementsByTagName('footer')[0];
  //remove the first child the h2
  if(footerElement.firstElementChild){
    footerElement.firstElementChild.remove();
  }
  footerElement.textContent = 'You voted on 5 pizzas good work.';
 }
}//added closing brace here so that we can run all the logic for the image rendering. 


//Dont forget to listen for the click on the image
for(var i = 0; i < imageElements.length; i++){
  console.log('Event listener for our pizza images.');
  imageElements[i].addEventListener('click', imageWasClicked);
}