const menuBtn = document.querySelector("#menu-btn");
const navbar = document.querySelector("nav");

menuBtn.addEventListener("Click", () => {
           navbar.classList.toggle("active");
})