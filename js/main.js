const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".nav-menu");

function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");

        // add menu icon
        toggle.innerHTML = `<i class="fas fa-bars">`;
    }
    else {
        menu.classList.add("active");

        // add x (close menu) icon
        toggle.innerHTML = `<i class="fas fa-times"></i>`;
    }
}

toggle.addEventListener("click", toggleMenu, false);


// dark Mode
const darkModeToggle = document.getElementById("dark-mode-toggle");

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    darkModeToggle.classList.toggle("clicked");
});

// text
const textElement = document.getElementById("text");
const textToType = textElement.textContent;
let currentIndex = 0;

function typeText() {
  textElement.textContent = textToType.slice(0, currentIndex);
  currentIndex++;

  if (currentIndex > textToType.length) {
    currentIndex = 0;
  }
}

setInterval(typeText, 450); // Ganti 100 dengan nilai yang sesuai untuk kecepatan tik


// carousel
// document.addEventListener("DOMContentLoaded", function () {
//     const carousel = document.getElementById("achievementsCarousel");
//     const carouselItems = carousel.querySelectorAll(".carousel-item");
//     let currentSlide = 0;

//     function changeSlide(direction) {
//         carouselItems[currentSlide].classList.remove("active");
//         currentSlide = (currentSlide + direction + carouselItems.length) % carouselItems.length;
//         carouselItems[currentSlide].classList.add("active");
//     }

//     const prevButton = document.querySelector(".carousel-control-prev");
//     prevButton.addEventListener("click", function () {
//         changeSlide(-1);
//     });

//     const nextButton = document.querySelector(".carousel-control-next");
//     nextButton.addEventListener("click", function () {
//         changeSlide(1);
//     });
// });
