document.documentElement.style.setProperty('--main-color', '#e3a2d3'); // Pink
// function switchColors() { // Trois couleurs
//     // Get the current value of --main-color
//     var currentColor = document.documentElement.style.getPropertyValue('--main-color').trim();

//     // Toggle between two sets of variables
//     if (currentColor === 'rgb(0, 123, 255)') {
//         // Switch to alternate colors (Blue to Yellow)
//         document.documentElement.style.setProperty('--main-color', '#f9c74f'); // Yellow

//     } else if (currentColor === '#f9c74f') {
//         // Switch to another alternate color (Yellow to Pink)
//         document.documentElement.style.setProperty('--main-color', '#e3a2d3'); // Pink

//     } else if (currentColor === '#e3a2d3') {
//         // Switch back to default color (Pink to Blue)
//         document.documentElement.style.setProperty('--main-color', 'rgb(0, 123, 255)'); // Blue
//     }
// }

function switchColors() {
    var currentColor = document.documentElement.style.getPropertyValue('--main-color').trim();

    if (currentColor === 'rgb(0, 123, 255)') {
        document.documentElement.style.setProperty('--main-color', '#e3a2d3'); // Pink

    } else {
        document.documentElement.style.setProperty('--main-color', 'rgb(0, 123, 255)'); // Blue
    }
}

document.documentElement.style.setProperty('--fff', '#40444b'); //fond articles
document.documentElement.style.setProperty('--three-three-three', '#292b2f'); // header and footer
document.documentElement.style.setProperty('--three-three-three2', '#ccc'); //text
document.documentElement.style.setProperty('--form-input-background', '#40444b'); // not found
document.documentElement.style.setProperty('--background-color-body', '#2f3136'); // fond de page

function toggleDarkMode() {
  
    var currentColor = document.documentElement.style.getPropertyValue('--background-color-body').trim();
    if (currentColor === '#f9f9f9') {
      // Mode sombre (retour aux valeurs par défaut)
        document.documentElement.style.setProperty('--fff', '#40444b');
        document.documentElement.style.setProperty('--three-three-three', '#292b2f');
        document.documentElement.style.setProperty('--three-three-three2', '#ccc');
        document.documentElement.style.setProperty('--form-input-background', '#40444b');
        document.documentElement.style.setProperty('--background-color-body', '#2f3136');
    } else {
      // Mode clair
        document.documentElement.style.setProperty('--background-color-body', '#f9f9f9');
        document.documentElement.style.setProperty('--fff', '#fff');
        document.documentElement.style.setProperty('--three-three-three', '#cbced2');
        document.documentElement.style.setProperty('--three-three-three2', '#333');
        document.documentElement.style.setProperty('--form-input-background', '#D9DBDB');
    }
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    var currentPath = window.location.href;
    console.log("Current path:", currentPath);

    var navLinks = document.querySelectorAll("nav ul li a");
    console.log("Number of nav links:", navLinks.length);

    navLinks.forEach(function(link) {
        var linkPath = link.getAttribute("href");
        console.log("Link path:", linkPath);

        // Vérifie si le chemin de la page actuelle se termine par le lienPath
        if (currentPath.endsWith(linkPath)) {
            link.classList.add("active");
        }
    });
});

