document.addEventListener('DOMContentLoaded', function() {
    const flipCard = document.getElementById('flip-card');

    if (flipCard) {
        flipCard.addEventListener('mouseover', function() {
            flipCard.style.transform = 'rotateY(180deg)';
        });

        flipCard.addEventListener('mouseout', function() {
            flipCard.style.transform = 'rotateY(0deg)';
        });

        const flipCardLink = document.getElementById('flip-card-link');
        if (flipCardLink) {
            flipCardLink.addEventListener('click', function(event) {
                if (flipCard.style.transform !== 'rotateY(180deg)') {
                    event.preventDefault();
                }
            });
        }
    }
});
