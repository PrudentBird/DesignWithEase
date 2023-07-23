const menuBtn = document.querySelector(".menu-icon"),
      navBar = document.querySelector(".navbar"),
      navBarWrap = document.querySelector(".navbar-wrap"),
      navLinks = document.querySelectorAll(".nav-link"),
      overlay = document.querySelector(".overlay"),
      darkModeToggle = document.querySelector(".dark-mode"),
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

darkModeToggle.addEventListener("click", () => {
    htmlController.classList.toggle("dark");
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
