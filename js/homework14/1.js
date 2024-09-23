const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const track = document.querySelector(".slide-container");
const cardWrapper = document.querySelector(".card-wrapper");
const slides = Array.from(cardWrapper.children);
const dotsNav = document.querySelector(".carousel__nav");
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.offsetLeft + "px)";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

rightArrow.addEventListener("click", (e) => {
  const currentSlide = cardWrapper.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  moveToSlide(cardWrapper, currentSlide, nextSlide);
});

leftArrow.addEventListener("click", (e) => {
  const currentSlide = cardWrapper.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;
  moveToSlide(cardWrapper, currentSlide, prevSlide);
});

dotsNav.addEventListener("click", (e) => {
  const targetDot = e.target.closest("li");
  if (!targetDot) return;

  const currentSlide = track.querySelector(".current-slide");
  const currentDot = dotsNav.querySelector(".current-slide");
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);

  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");
});
