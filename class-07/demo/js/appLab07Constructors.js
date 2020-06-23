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


//Constructor Function    Instance of an Object 
function Pet(petName, petBreed, petWeight, imageName, petInterests, isGoodWithKids, isGoodWithDogs, isGoodWithCats) {
  this.petName = petName;
  this.petBreed = petBreed;
  this.petWeight = petWeight;
  this.imageName = imageName;
  this.petInterests = petInterests;
  this.isGoodWithKids = isGoodWithKids;
  this.isGoodWithDogs = isGoodWithDogs;
  this.isGoodWithCats = isGoodWithCats;
  this.petAge = this.setAge();
}

function randomAge(min, max) {
  return Math.floor(Math.random() * (max - min +1) + min);
}

Pet.prototype.setAge = function(){
  this.petAge = randomAge(3,12) + ' months';
};

Pet.prototype.getInterests = function() {
  var randomIndex = Math.floor(Math.random() * this.petInterests.length);
  return this.petInterests[randomIndex];//0,1,2
};


Pet.prototype.render = function(){
//Creat DOM elements is a Section
  var parentElement = document.getElementById('kittenProfiles');
  //Create child elements h2, p, ul, li interests, image
  var article = document.createElement('article');
  parentElement.appendChild(article);
  //Create header
  var h2 = document.createElement('h2');
  h2.textContent = this.petName;
  article.appendChild(h2);
  //Pet Para 
  var petPara = document.createElement('p');
  petPara.textContent = `${this.petName} is adorable, and is ${this.petAge} old.`;
  article.appendChild(petPara);
  //list items for out pet.
  var petUL = document.createElement('ul');
  article.appendChild(petUL);

  for(var i = 0; i < this.petInterests.length; i++){
    var petLi = document.createElement('li');
    petLi.textContent = this.petInterests[i];
    petUL.appendChild(petLi);
  }

  var img = document.createElement('img');
  img.setAttribute('src', 'images/' + this.imageName + '.jpeg');
  img.setAttribute('alt', 'Adopt ' + this.name + 'NOW!, no TODAY!');
  article.appendChild(img);


  var animalTable = document.getElementById('animal-table');

  var petRow = document.createElement('tr');
  var nameCell = document.createElement('td');
  nameCell.textContent = this.petName;
  petRow.appendChild(nameCell);

  var breedCell = document.createElement('td');
  breedCell.textContent = this.petBreed;
  petRow.appendChild(breedCell);

  var ageCell = document.createElement('td');
  ageCell.textContent = this.petAge;
  petRow.appendChild(ageCell);

  var interestsCell = document.createElement('td');
  interestsCell.textContent = this.getInterests();
  // interestsCell.textContent = this.interests;
  petRow.appendChild(interestsCell);

  animalTable.appendChild(petRow);

};


//petName, petBreed, petWeight, imageName, petInterests, isGoodWithKids, isGoodWithDogs, isGoodWithCats


//to creat instance use the new to call the constructor function. 
var firstPet = new Pet('Nova','Labrador', 45, 'labradorDog',['tug of war','chewys','walks'], true,true,true);
firstPet.setAge();
firstPet.getInterests();


var allPets = [firstPet];


for(var i = 0; i < allPets.length; i++){
  allPets[i].render();
}





































































