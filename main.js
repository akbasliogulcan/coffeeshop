const menuBtn = document.querySelector("#menu-btn");
const navBar = document.querySelector("nav");

menuBtn.addEventListener("Click", () => {
           navBar.classList.toggle("active");
})