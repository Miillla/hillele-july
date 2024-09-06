const divCont = document.getElementById("conteiner");
const myImage = document.querySelector("img");
const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"];

function setRandomImage() {
  let randomNumber = Math.floor(Math.random() * images.length);
  myImage.src = `images/${images[randomNumber]}`;
}

setRandomImage();

myImage.addEventListener("click", function () {
  setRandomImage();
  myImage.src = `images/${images[randomNumber]}`;
});

divCont.appendChild(myImage);
