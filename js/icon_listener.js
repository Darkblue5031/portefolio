document.addEventListener('DOMContentLoaded', function() {

    const articles = document.querySelectorAll('article');

    articles.forEach(function(article) {
        const icon = article.querySelector('img');
        const h2 = article.querySelector('h2');

        if (h2 && icon) {
            article.addEventListener("mouseover", function() {
                h2.style.color = "var(--main-color)";
                icon.style.border = "2px solid var(--main-color)";
            });

            article.addEventListener("mouseout", function() {
                h2.style.color = "";
                icon.style.border = "2px solid var(--three-three-three2)";
            });
        } else if (h2) {
            article.addEventListener("mouseover", function() {
                h2.style.color = "var(--main-color)";
            });

            article.addEventListener("mouseout", function() {
                h2.style.color = "";
            });
        } else if (icon) {
            article.addEventListener("mouseover", function() {
                icon.style.border = "2px solid var(--main-color)";
            });

            article.addEventListener("mouseout", function() {
                icon.style.border = "2px solid var(--three-three-three2)";
            });
        }
    });
});