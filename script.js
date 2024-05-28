document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Récupérer les valeurs des champs du formulaire
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;


        // Utiliser EmailJS pour envoyer l'email
        emailjs.send('service_u2uvztd', 'template_2kb9rfb', {
            from_name: name,
            from_email: email,
            message: message
        })
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Votre message a été envoyé avec succès!');
                form.reset(); // Réinitialiser le formulaire
            }, function(error) {
                console.log('FAILED...', error);
                alert('Une erreur s\'est produite. Veuillez réessayer.');
            });
    });
});

