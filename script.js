// Grab elements
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobilemenu");

// Toggle menu on click
hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});
