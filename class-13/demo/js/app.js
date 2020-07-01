'use strict';
console.log('app.js is connected.');


// //These are in an html collection(array) use ref to image index instead of id's for tracking images shown we are still going to count total clicks and each image's click amount.
var imageElements = document.getElementsByTagName('img');

var pizzaIndex1 = 0;
var pizzaIndex2 = 1;
var rounds = 5;
var allPizzas = [];

//Add a constructor function for our pizzas
function Pizza(name, imageUrl, timesClicked){
  this.name = name;
  this.imageUrl = imageUrl;
  //Second step is to take in the timesclicked from localStorage
  if(timesClicked){
    this.timesClicked = timesClicked;
  } else {
    this.timesClicked = 0;
  }

  //Add how many times each image was shown here.
  this.timesShown = 0;
  allPizzas.push(this);
}

//Create function for the chart render so that we can access the object properties.
function getPizzaArray(nameOfThePropertyIWant){
  var answer = [];
  for(var j = 0; j < allPizzas.length; j++){
    answer[j] = allPizzas[j][nameOfThePropertyIWant];
  }
  // console.log(answer);
  return answer;
}

Pizza.prototype.toString = function() {

  return `${this.name} pizza is from our this.name for the specified arrayIndex, clicked ${this.timesClicked} times`;
};




// if there is local storage, go see if its true and get that local storage string and parse it. 
var savedPizzaString = localStorage.getItem('savedPizza');

if(savedPizzaString){

  var arrayOfNotPizzaObject = JSON.parse(savedPizzaString);

  for(var j = 0; j < arrayOfNotPizzaObject.length; j++){
   
    new Pizza(arrayOfNotPizzaObject[j].name,
      arrayOfNotPizzaObject[j].imageUrl,
      arrayOfNotPizzaObject[j].timesClicked);
  }

} else {
//create pizza objects
  new Pizza('Brick Oven Pizza', 'images/brickOvenPizza.jpeg');
  new Pizza('Calzone', 'images/calzonePizza.jpeg');
  new Pizza('Chicago Deep Dish', 'images/chicagoPizza.jpeg');
  new Pizza('Chicago Pizza and Oven Grinder', 'images/cpoGinderPizza.jpeg');
  new Pizza('Detroit Style', 'images/detroitPizza.jpeg');
  new Pizza('Papa Vito\'s Thin', 'images/mwDeluxePizzaThinCrust.jpg');
  new Pizza('New York Thin', 'images/newYorkPizza.jpeg');
  new Pizza('Detroit Style', 'images/sgDansHtossedMeatLovPizza.jpg');

}

allPizzas[0].timesShown = 1;
allPizzas[1].timesShown = 1;


var totalClicks = 0;
function imageWasClicked(event){
  totalClicks++;
  if(event.srcElement.id === '1'){
    allPizzas[pizzaIndex1].timesClicked++;
  } else if(event.srcElement.id === '2'){
    allPizzas[pizzaIndex2].timesClicked++;
  }

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
  //count the times shown for the image in the index 0 for the allPizzas array.
  allPizzas[pizzaIndex1].timesShown++;
  imageElements[1].src = allPizzas[pizzaIndex2].imageUrl;
  //count the times shown for the image in the index 1 for the allPizzas array.
  allPizzas[pizzaIndex2].timesShown++;


  //Lets count the first images that show up. 
 
  
  // for(var i = 0; i < 2; i++){
  //   allPizzas[i].timesShown++;
  //   console.log(allPizzas[i]);
  // }



  //calculate rounds.
  if(totalClicks >= rounds){

    // Step One
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
    runMyChartNow();
  }//closing the if total rounds is >= rounds
}//this closes the imageWasClicked(event) function




//Add chart function 
function runMyChartNow() {

  var ctx = document.getElementById('resultsChart').getContext('2d');


  new Chart(ctx, {
    type: 'bar',
    data: {
    //what does the labels key do?
    // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      labels: getPizzaArray('name'),
      datasets: [{
      //what does this label do?
      //key, lengend
        label: '# of Votes',
        //what does this data do?
        //actually the valies in the chart
        data: getPizzaArray('timesClicked'),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}
//Dont forget to listen for the click on the image
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
