'use strict';
console.log('app.js is connected.');


// Problem Domain: the Cedar Rapids Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.

//Each Kitten's profile should have: 
// Name
// Breed
// - gender   -- isFixed.
// - random age assigned
// a list of what they like.
// an image
// is good with kids
// is good with dogs
// is good with other animals


var petOne = {
  name: 'Tom',
  breed: 'Tabby',
  age: 0,
  imageName: 'tomCat',
  interest: ['play with strings','eat lasgna','catNip'],
  isGoodKids: true,
  isGoodDogs: false,
  isGoodAnimal: true,
  setAge: function(){
    this.age = randomAge(3, 12) + ' Months';
  }
};
petOne.setAge();


var petOne = {
  name: 'Tom',
  breed: 'Tabby',
  age: 0,
  imageName: 'tomCat',
  interest: ['play with strings','eat lasgna','catNip'],
  isGoodKids: true,
  isGoodDogs: false,
  isGoodAnimal: true,
  setAge: function(){
    this.age = randomAge(3, 12) + ' Months';
  }
};
petOne.setAge();


function randomAge(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//set up property outsie the object after it has been created. 
petOne.isFixedSpadeNuet = true;


//Create DOM elements


var parentElement = document.getElementById('kittenProfiles');

//inside that element article, h2, p, ul, li, interests, image.

var article = document.createElement('article');
//console.log(article);
parentElement.appendChild(article);

//h2 
var h2 = document.createElement('h2');
h2.textContent = petOne.name;
article.appendChild(h2);

// create p 

var petPara = document.createElement('p');
petPara.textContent = 'Cats are adorable, and this cat is ' + petOne.age + ' old.';
article.appendChild(petPara);


//create UL


var petUL = document.createElement('ul');
article.appendChild(petUL);

for(var i = 0; i < petOne.interest.length; i++){
  var petLi = document.createElement('li');
  petLi.textContent = petOne.interest[i];
  petUL.appendChild(petLi);
}
