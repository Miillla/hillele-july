const parents = document.querySelector("#parents");
parents.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    alert(`Ви клікнули на: ${event.target.textContent}`);
  }
});
