"use strict";

var leftArrow = document.querySelector(".left");
var rightArrow = document.querySelector(".right");
var cardWrapper = document.querySelector(".card-wrapper");
var slides = Array.from(cardWrapper.children);
var dotsNav = document.querySelector(".carousel__nav");
var dots = Array.from(dotsNav.children);
var currentSlideIdx = 0;

var moveToSlide = function moveToSlide() {
  cardWrapper.style.transform = "translateX(-".concat(slides[currentSlideIdx].offsetLeft, "px)");
  dots.forEach(function (dot, i) {
    return dot.classList.toggle("current-slide", i === currentSlideIdx);
  });
  leftArrow.classList.toggle("hide", currentSlideIdx === 0);
  rightArrow.classList.toggle("hide", currentSlideIdx === slides.length - 1);
};

leftArrow.addEventListener("click", function () {
  if (currentSlideIdx > 0) {
    currentSlideIdx--;
    moveToSlide();
  }
});
rightArrow.addEventListener("click", function () {
  if (currentSlideIdx < slides.length - 1) {
    currentSlideIdx++;
    moveToSlide();
  }
});
dots.forEach(function (dot, i) {
  dot.addEventListener("click", function () {
    currentSlideIdx = i;
    moveToSlide();
  });
});
moveToSlide();