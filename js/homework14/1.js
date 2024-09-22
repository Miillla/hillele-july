// const leftArrow = document.querySelector(".left");
// const rightArrow = document.querySelector(".right");
// const cardWrapper = document.querySelector(".card-wrapper");
// const indicators = document.querySelectorAll(".controls ul li");

// let index = 0;
// const cards = document.querySelectorAll(".card");
// const totalCards = cards.length;

// // Встановлюємо однакову ширину для всіх карток
// const cardWidth = cards[0].offsetWidth;

// function updateIndicators() {
//   indicators.forEach((indicator, i) => {
//     indicator.classList.toggle("selected", i === index);
//   });
// }

// function moveCards() {
//   cardWrapper.style.transform = `translateX(-${index * cardWidth}px)`;
//   updateIndicators();
// }

// leftArrow.addEventListener("click", function () {
//   if (index > 0) {
//     index--;
//     moveCards();
//   }
// });

// rightArrow.addEventListener("click", function () {
//   if (index < totalCards - 1) {
//     index++;
//     moveCards();
//   }
// });

// // Клік по індикаторах
// indicators.forEach(function (indicator, i) {
//   indicator.addEventListener("click", function () {
//     index = i;
//     moveCards();
//   });
// });
