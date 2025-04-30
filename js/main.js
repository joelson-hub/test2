// Rotação de banners
const bannerContainer = document.getElementById("banner-container");
const banners = bannerContainer.querySelectorAll("img");
let currentIndex = 0;

setInterval(() => {
  currentIndex = (currentIndex + 1) % banners.length;
  bannerContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}, 5000);

// Menu hambúrguer
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
