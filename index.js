document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const navigationBar = document.getElementById("navigation-bar");
    const navLinks = document.querySelectorAll(".navigation-bar a");

    hamburgerMenu.addEventListener("click", function () {
        navigationBar.classList.toggle("active");
    });

    // Close the navigation menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            if (navigationBar.classList.contains("active")) {
                navigationBar.classList.remove("active");
            }
        });
    });
});
