"use strict";

var leftArrow = document.querySelector(".left");
var rightArrow = document.querySelector(".right");
var track = document.querySelector(".slide-container");
var cardWrapper = document.querySelector(".card-wrapper");
var slides = Array.from(cardWrapper.children);
var dotsNav = document.querySelector(".carousel__nav");
var dots = Array.from(dotsNav.children);
var slideWidth = slides[0].getBoundingClientRect().width;

var moveToSlide = function moveToSlide(track, currentSlide, targetSlide) {
  track.style.transform = "translateX(-" + targetSlide.offsetLeft + "px)";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

rightArrow.addEventListener("click", function (e) {
  var currentSlide = cardWrapper.querySelector(".current-slide");
  var nextSlide = currentSlide.nextElementSibling;
  moveToSlide(cardWrapper, currentSlide, nextSlide);
});
leftArrow.addEventListener("click", function (e) {
  var currentSlide = cardWrapper.querySelector(".current-slide");
  var prevSlide = currentSlide.previousElementSibling;
  moveToSlide(cardWrapper, currentSlide, prevSlide);
});
dotsNav.addEventListener("click", function (e) {
  var targetDot = e.target.closest("li");
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