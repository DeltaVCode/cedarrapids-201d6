'use strict';
console.log('app.js is connected.');


var imageElements = document.getElementsByTagName('img');
var pizzaIndex1 = 0;
var pizzaIndex2 = 1;
var rounds = 5;

// Pizza.prototype.toString = function() {
//   return `${this.name} pizza is from our this.name for the specified arrayIndex, clicked ${this.timesClicked} times`;
// };

var totalClicks = 0;
function imageWasClicked(event){
  totalClicks++;
  if(event.srcElement.id === '1'){
    allPizzas[pizzaIndex1].timesClicked++;
  } else if(event.srcElement.id === '2'){
    allPizzas[pizzaIndex2].timesClicked++;
  }
  var nextPizzaIndex1 = Math.floor(Math.random() * allPizzas.length);
  while((pizzaIndex1 === nextPizzaIndex1) || (nextPizzaIndex2 === nextPizzaIndex1)){
    nextPizzaIndex1 = Math.floor(Math.random() * allPizzas.length);
  }
  var nextPizzaIndex2 = Math.floor(Math.random() * allPizzas.length);
  while((nextPizzaIndex2 === pizzaIndex2) || (nextPizzaIndex2 === nextPizzaIndex1)){

    nextPizzaIndex2 = Math.floor(Math.random() * allPizzas.length);
  }
  pizzaIndex1 = nextPizzaIndex1;
  pizzaIndex2 = nextPizzaIndex2;
  imageElements[0].src = allPizzas[pizzaIndex1].imageUrl;
  //count the times shown for the image in the index 0 for the allPizzas array.
  allPizzas[pizzaIndex1].timesShown++;
  imageElements[1].src = allPizzas[pizzaIndex2].imageUrl;
  //count the times shown for the image in the index 1 for the allPizzas array.
  allPizzas[pizzaIndex2].timesShown++;

  if(totalClicks >= rounds){
    localStorage.setItem('savedPizza', JSON.stringify(allPizzas)) ;
    var asideUL = document.getElementById('voteResults');
    for(var x = 0; x < allPizzas.length; x++){
      var voteResultListItem = document.createElement('li');
      // adding a template literal to utilize the object properties.
      voteResultListItem.textContent = `${allPizzas[x].name} was clicked on ${allPizzas[x].timesClicked} times and was shown ${allPizzas[x].timesShown} times.`;
      asideUL.appendChild(voteResultListItem);
      //Add another li in the for loop for more data on the images being clicked.
      var percentageListItem = document.createElement('li');
      if(allPizzas[x].timesClicked === 0){
        var math = `ZERO clicks and shown ${allPizzas[x].timesShown} times.`;
      } else {
        math = Math.round(((allPizzas[x]['timesClicked'] / allPizzas[x]['timesShown']).toFixed(2) * 100)) + '%';
      }
      percentageListItem.textContent = `${allPizzas[x].name} percentage of clicked on VS times shown is ` + math;
      asideUL.appendChild(percentageListItem);
      

    } //closes for loop.
    //Add in a remove the add event listener
    for(var i = 0; i < imageElements.length; i++){
      imageElements[i].removeEventListener('click', imageWasClicked);
    }
    //runMyChartNow();
  }//closing the if total rounds is >= rounds
}//this closes the imageWasClicked(event) function

for(var i = 0; i < imageElements.length; i++){
  // console.log('this is the event listener for the click on pizza event');
  //   debugger;
  imageElements[i].addEventListener('click', imageWasClicked);
}



//form 
var nameForm = document.getElementById('nameForm');

nameForm.addEventListener('submit', function(event){
  event.preventDefault();
  console.log('name form is listening');
  //grab what the user typed in 
  var nameUserProvided = document.getElementById('name').value;
  console.log(nameUserProvided);
  //save to local storage
  localStorage.setItem('userName', nameUserProvided);
  //show that input on the page itself
  //get rid of the form
  nameForm.textContent = 'Welcome to our site ' + nameUserProvided;
});


var savedName = localStorage.getItem('userName');
if(savedName){
  nameForm.textContent = `Thanks for stopping by ${savedName} what is your favorite pizza?`;
} 
