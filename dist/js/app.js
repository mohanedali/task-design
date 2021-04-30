const navBtn = document.querySelector("nav .mobile-nav");
const navMenu = document.querySelector("nav .navbar");

navBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});
