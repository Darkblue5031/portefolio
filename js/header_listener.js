document.addEventListener("DOMContentLoaded", function() {
    var currentPath = window.location.href;
    var navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(function(link) {
        var linkPath = link.getAttribute("href");

        if (currentPath.endsWith(linkPath)) {
            link.classList.add("active");
        }
    });
});