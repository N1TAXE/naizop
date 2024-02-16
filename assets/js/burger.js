document.addEventListener("DOMContentLoaded", function() {
    const burgerMenu = document.querySelector(".burger-menu");
    const headerNav = document.querySelector(".mobile-menu");
    burgerMenu.addEventListener("click", function() {
        headerNav.classList.toggle('show')
        if (headerNav.style.maxHeight) {
            headerNav.style.maxHeight = null;
            headerNav.style.background = 'transparent';
        } else {
            headerNav.style.maxHeight = headerNav.scrollHeight * 2 + "px";
            headerNav.style.background = '#1c2021';
        }
    });
});