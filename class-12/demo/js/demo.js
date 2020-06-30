'use strict';
console.log('demo.js is connected.');



var imageElements = document.getElementsByTagName('img');


var img1Clicked = 0;
var img2Clicked = 0;
var totalClicks = 0;
console.log(totalClicks);


function imageWasClicked(event){
  console.log('image was clicked');
  totalClicks++;
  if(event.srcElement.id === 'imageOne'){
    img1Clicked++;
    console.log('image one was clicked', img1Clicked);
  } else if(event.srcElement.id === 'imageTwo'){
    img2Clicked++;
    console.log('image two was clicked', img2Clicked);
  }
}



for(var i = 0; i < imageElements.length; i++){
  console.log('this is the event listener for the click image event.');
  imageElements[i].addEventListener('click', imageWasClicked);
}
