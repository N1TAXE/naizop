document.addEventListener("DOMContentLoaded", function() {
    const burgerMenu = document.querySelector(".burger-menu");
    const headerNav = document.querySelector(".header-nav");
    burgerMenu.addEventListener("click", function() {
        headerNav.classList.toggle("show");
    });
});