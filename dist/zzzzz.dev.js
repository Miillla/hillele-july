"use strict";

var leftArrow = document.querySelector(".left");
var rightArrow = document.querySelector(".right");
var track = document.querySelector(".slide - container");
var cardWrapper = document.querySelector(".card-wrapper");
var slides = Array.from(cardWrapper.children);
var dotsNav = document.querySelectorAll(".carousel__nav");
var dots = Array.from(dotsNav.children);
var slideWidth = slides[0].getBoundingClientsRect().width;

var setSlidePosition = function setSlidePosition(slide, index) {
  slide.style.left = slideWidth * index + "px";
};

slides.forEach(setSlidePosition);

var moveToSlide = function moveToSlide(track, currentSlide, targetSlide) {
  // track.style.transform = "translateX('+ targetSlide.style.left +')";
  track.style.transform = "translateX(-" + targetSlide.offsetLeft + "px)";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

rightArrow.addEventListener("click", function (e) {
  var currentSlide = cardWrapper.querySelector(". current-slide"); // const prevSlide = currentSlide.previousElementSibling;

  var nextSlide = currentSlide.nextElementSibling;
  moveToSlide(track, currentSlide, nextSlide);
});
leftArrow.addEventListener("click", function (e) {
  var currentSlide = track.querySelector(". current-slide");
  var prevSlide = currentSlide.previousElementSibling;
  moveToSlide(track, currentSlide, prevSlide);
});
dotsNav.addEventListener("click", function (e) {
  // const targetDot = e.taget.closest("button");
  var targetDot = e.target;
  if (!targetDot) return;
  var currentSlide = track.querySelector(".current-slide");
  var currentDot = dotsNav.querySelector(".current-slide");
  var targetIndex = dots.findIndex(function (dot) {
    return dot === targetDot;
  });
  var targetSlide = slides[targetIndex];
  moveToSlide(track, currentSlide, targetSlide);
  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");
});