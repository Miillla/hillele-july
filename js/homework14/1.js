const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const cardWrapper = document.querySelector(".card-wrapper");
const slides = Array.from(cardWrapper.children);
const dotsNav = document.querySelector(".carousel__nav");
const dots = Array.from(dotsNav.children);
let currentSlideIdx = 0;

const moveToSlide = () => {
  cardWrapper.style.transform = `translateX(-${slides[currentSlideIdx].offsetLeft}px)`;

  dots.forEach((dot, i) =>
    dot.classList.toggle("current-slide", i === currentSlideIdx)
  );

  leftArrow.classList.toggle("hide", currentSlideIdx === 0);
  rightArrow.classList.toggle("hide", currentSlideIdx === slides.length - 1);
};

leftArrow.addEventListener("click", () => {
  if (currentSlideIdx > 0) {
    currentSlideIdx--;
    moveToSlide();
  }
});

rightArrow.addEventListener("click", () => {
  if (currentSlideIdx < slides.length - 1) {
    currentSlideIdx++;
    moveToSlide();
  }
});

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    currentSlideIdx = i;
    moveToSlide();
  });
});

moveToSlide();
