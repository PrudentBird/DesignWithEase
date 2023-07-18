const menuBtn = document.querySelector(".menu-icon"),
    openMenuBtn = document.querySelector(".menu-icon");

menuBtn.addEventListener("click", () => {
    openMenuBtn.classList.toggle("openmenu");
});