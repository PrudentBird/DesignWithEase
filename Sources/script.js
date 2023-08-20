const menuBtn = document.querySelector(".menu-icon"),
      navBar = document.querySelector(".navbar"),
      navBarWrap = document.querySelector(".navbar-wrap"),
      navLinks = document.querySelectorAll(".nav-link"),
      overlay = document.querySelector(".overlay"),
      darkModeToggle = document.querySelectorAll(".dark-mode"),
      themeIconToggle = document.querySelector(".toggle-icon"),
      htmlController = document.querySelector("html");

const toggleMenu = () => {
    menuBtn.classList.toggle("openmenu");
    htmlController.classList.toggle("responsive");
    navBar.classList.toggle("openmenu");
};

menuBtn.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);
navLinks.forEach((navLink) => {
    navLink.addEventListener("click", toggleMenu);
});

darkModeToggle.forEach((darkMode) => {
    darkMode.addEventListener("click", () => {
        htmlController.classList.toggle("dark");
        themeIconToggle.classList.toggle("bxs-sun");
        themeIconToggle.classList.toggle("bxs-moon");
    });
});

function handleScroll() {
    if (window.scrollY > 0) {
        navBar.classList.add('navbar-shadow');
        navBarWrap.classList.add('navbar-padding');
    } else {
        navBar.classList.remove('navbar-shadow');
        navBarWrap.classList.remove('navbar-padding');
    }
}

window.addEventListener('scroll', handleScroll);

const cards = document.querySelectorAll('.discover-slick-card');
let currentIndex = 0;
let intervalId; // Variable to hold the interval ID

function showCard(index) {
  cards[currentIndex].style.display = 'none';
  currentIndex = index % cards.length;
  cards[currentIndex].style.display = 'block';
}

function startAutoSlide() {
  intervalId = setInterval(() => {
    showCard(currentIndex + 1);
  }, 3000);
}

function stopAutoSlide() {
  clearInterval(intervalId);
}

// Show the first card immediately when the page loads
showCard(currentIndex);

// Start the automatic slideshow after a delay
setTimeout(() => {
  startAutoSlide();
}, 3000); // Delay of 3 seconds

// Check if the media query matches
const mediaQuery = window.matchMedia('(max-width: 768px)');
if (mediaQuery.matches) {
  startAutoSlide(); // Start the automatic slideshow
} else {
  stopAutoSlide(); // Stop the slideshow if the media query doesn't match
}

// Listen for changes in the media query and adjust the slideshow accordingly
mediaQuery.addListener((mq) => {
  if (mq.matches) {
    startAutoSlide();
  } else {
    stopAutoSlide();
  }
});
