"use strict";

var divCont = document.getElementById("conteiner");
var myImage = document.querySelector("img");
var images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"];

function setRandomImage() {
  var randomNumber = Math.floor(Math.random() * images.length);
  myImage.src = "images/".concat(images[randomNumber]);
}

setRandomImage();
myImage.addEventListener("click", function () {
  setRandomImage();
  myImage.src = "images/".concat(images[randomNumber]);
});
divCont.appendChild(myImage);