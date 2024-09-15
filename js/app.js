const modal = document.getElementById("modal");
const openModalBtns = document.getElementById("openModalBtn");
const closeModalBtns = document.getElementById("closeModalBtn");

openModalBtns.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

closeModalBtns.addEventListener("click", () => {
  modal.classList.add("hidden");
});

console.log(openModalBtns, closeModalBtns, modal);
