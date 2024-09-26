// const leftArrow = document.querySelector(".left");
// const rightArrow = document.querySelector(".right");
// const cardWrapper = document.querySelector(".card-wrapper");
// const slides = Array.from(cardWrapper.children);
// const dotsNav = document.querySelector(".carousel__nav");
// const dots = Array.from(dotsNav.children);
// let currentSlideIdx = 0;
// const moveToSlide = () => {
//   cardWrapper.style.transform = `translateX(-${slides[currentSlideIdx].offsetLeft}px)`;
//   dots.forEach((dot, i) =>
//     dot.classList.toggle("current-slide", i === currentSlideIdx)
//   );
//   leftArrow.classList.toggle("hide", currentSlideIdx === 0);
//   rightArrow.classList.toggle("hide", currentSlideIdx === slides.length - 1);
// };
// leftArrow.addEventListener("click", () => {
//   if (currentSlideIdx > 0) {
//     currentSlideIdx--;
//     moveToSlide();
//   }
// });
// rightArrow.addEventListener("click", () => {
//   if (currentSlideIdx < slides.length - 1) {
//     currentSlideIdx++;
//     moveToSlide();
//   }
// });
// dots.forEach((dot, i) => {
//   dot.addEventListener("click", () => {
//     currentSlideIdx = i;
//     moveToSlide();
//   });
// });
// moveToSlide();

/* <div class="slide-container">
<div class="card-wrapper">
  <div class="card current-slide">
    <div class="card-image">
      <img src="images/1.jpg" alt="" class="card-img" />
    </div>
    <div class="card-content">
      <span class="sub-title">КОМАНДА</span>
      <h1 class="title">
        Ми звикли брати на себе відповідальність та завжди гарантуємо,
        честну власну допомогу навіть у ситуаціях, коли більшість безсилі.
      </h1>
      <div class="author">
        <p class="name">Олександр Олександровський</p>
        <span class="sub-name">Керуючий партнер</span>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-image">
      <img src="images/2.jpg" alt="" class="card-img" />
    </div>
    <div class="card-content">
      <span class="sub-title">КОМАНДА</span>
      <h1 class="title">
        Ми звикли брати на себе відповідальність та завжди гарантуємо,
        честну власну допомогу навіть у ситуаціях, коли більшість безсилі.
      </h1>
      <div class="author">
        <p class="name">Олександр Олександровський</p>
        <span class="sub-name">Керуючий партнер</span>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-image">
      <img src="images/3.jpg" alt="" class="card-img" />
    </div>
    <div class="card-content">
      <span class="sub-title">КОМАНДА</span>
      <h1 class="title">
        Ми звикли брати на себе відповідальність та завжди гарантуємо,
        честну власну допомогу навіть у ситуаціях, коли більшість безсилі.
      </h1>
      <div class="author">
        <p class="name">Олександр Олександровський</p>
        <span class="sub-name">Керуючий партнер</span>
      </div>
    </div>
  </div>
</div>

<div class="controls">
  <span class="card-button left material-symbols-outlined"
    >chevron_left</span
  >
  <ul class="carousel__nav">
    <li class="carousel__indicator current-slide"></li>
    <li class="carousel__indicator"></li>
    <li class="carousel__indicator"></li>
  </ul>
  <span class="card-button right material-symbols-outlined"
    >chevron_right</span
  >
</div>
</div> */
"use strict";