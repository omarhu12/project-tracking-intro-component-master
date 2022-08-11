const menuBtn = document.querySelector(".hamburger");
const navUl = document.querySelector("#mobile");


menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("is-active");
});

menuBtn.addEventListener("click", function () {
  navUl.classList.toggle("show");
});
