const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const track = document.querySelector(".slide - container");
const slides = Array.from(track.children);
const cardWrapper = document.querySelector(".card-wrapper");
const dotsNav = document.querySelectorAll(".carousel__nav");
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientsRect().width;

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX('+ targetSlide.style.left +')";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

rightArrow.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(". current-slide");
  const prevSlide = currentSlide.previousElementSibling;

  moveToSlide(track, currentSlide, prevSlide);
});

leftArrow.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(". current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  moveToSlide(track, currentSlide, nextSlide);
});
dotsNav.addEventListener("click", (e) => {
  const targetDot = e.taget.closest("button");
  if (!targetDot) return;

  const currentSlide = track.querySelector(".current-slide");
  const currentDot = dotsNav.querySelector(".current-slide");
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);

  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");
});
