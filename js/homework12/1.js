const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", () => {
  site = prompt("Enter your site");
  if (site.startsWith("https://")) {
    alert("You are on the right site");
  } else {
    alert("You are on the wrong site try again");
  }
});
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
  if (site) {
    window.location.href = site;
  }
});
