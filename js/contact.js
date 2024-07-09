document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const submitButton = document.getElementById('submit-button');
    let isSubmitting = false;

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        addAlertToContainer('info', 'Votre formulaire de demande de contact est en cours d\'envoi. Vous allez être informé(e) de sa bonne transmission. Merci de patienter quelques instants !');

        if (isSubmitting) return;
        isSubmitting = true;
        submitButton.disabled = true;

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        emailjs.send('service_u2uvztd', 'template_2kb9rfb', {
            from_name: name,
            from_email: email,
            message: message
        })
        .then(function(response) {
            addAlertToContainer('success', 'Merci d\'avoir pris le temps de me contacter via mon blog portfolio. Votre formulaire de contact a été envoyé avec succès et une réponse vous sera adressée dans les meilleurs délais.');
            form.reset();
            isSubmitting = false;
            submitButton.disabled = false;
        }, function(error) {
            addAlertToContainer('warning', 'Un problème est survenu lors de l\'envoi de votre formulaire de contact. Je travaille actuellement à résoudre cette situation et vous encourage à réessayer ultérieurement. Veuillez m\'excuser pour ce désagrément.');
            isSubmitting = false;
            submitButton.disabled = false;
        });
    });
});

function addAlertToContainer(type, message) {
    removeInfoAlert()
    const container = document.querySelector('.container');
    if (container) {
        let alertHTML = '';
        switch (type) {
            case 'success':
                alertHTML = `
                    <div class="success alert">
                        <div class="content">
                            <div class="icon">
                                <svg width="50" height="50" id="Layer_1" style="enable-background:new 0 0 128 128;" version="1.1" viewBox="0 0 128 128" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><circle fill="#fff" cx="64" cy="64" r="64"/></g><g><path fill="#3EBD61" d="M54.3,97.2L24.8,67.7c-0.4-0.4-0.4-1,0-1.4l8.5-8.5c0.4-0.4,1-0.4,1.4,0L55,78.1l38.2-38.2c0.4-0.4,1-0.4,1.4,0l8.5,8.5c0.4,0.4,0.4,1,0,1.4L55.7,97.2C55.3,97.6,54.7,97.6,54.3,97.2z"/></g></svg>
                            </div>
                            <p>${message}</p>
                        </div>
                        <button class="close" onclick="closeAlert(event)">
                            <svg height="18px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="18px" xml:space="preserve" xmlns="http://www.w3.org/1999/xlink"><path fill="#69727D" d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z"/></svg>
                        </button>
                    </div>
                `;
                break;
            case 'info':
                alertHTML = `
                    <div class="info alert">
                        <div class="content">
                            <div class="icon">
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="50" height="50" rx="25" fill="white"/>
                                    <path d="M27 22H23V40H27V22Z" fill="#006CE3"/>
                                    <path d="M25 18C24.2089 18 23.4355 17.7654 22.7777 17.3259C22.1199 16.8864 21.6072 16.2616 21.3045 15.5307C21.0017 14.7998 20.9225 13.9956 21.0769 13.2196C21.2312 12.4437 21.6122 11.731 22.1716 11.1716C22.731 10.6122 23.4437 10.2312 24.2196 10.0769C24.9956 9.92252 25.7998 10.0017 26.5307 10.3045C27.2616 10.6072 27.8864 11.1199 28.3259 11.7777C28.7654 12.4355 29 13.2089 29 14C29 15.0609 28.5786 16.0783 27.8284 16.8284C27.0783 17.5786 26.0609 18 25 18V18Z" fill="#006CE3"/>
                                </svg>
                            </div>
                            <p>${message}</p>
                        </div>
                        <button class="close" onclick="closeAlert(event)">
                            <svg height="18px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="18px" xml:space="preserve" xmlns="http://www.w3.org/1999/xlink"><path fill="#69727D" d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z"/></svg>
                        </button>
                    </div>
                `;
                break;
            case 'warning':
                alertHTML = `
                    <div class="warning alert">
                        <div class="content">
                            <div class="icon">
                                <svg height="50" viewBox="0 0 512 512" width="50" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M449.07,399.08,278.64,82.58c-12.08-22.44-44.26-22.44-56.35,0L51.87,399.08A32,32,0,0,0,80,446.25H420.89A32,32,0,0,0,449.07,399.08Zm-198.6-1.83a20,20,0,1,1,20-20A20,20,0,0,1,250.47,397.25ZM272.19,196.1l-5.74,122a16,16,0,0,1-32,0l-5.74-121.95v0a21.73,21.73,0,0,1,21.5-22.69h.21a21.74,21.74,0,0,1,21.73,22.7Z"/></svg>
                            </div>
                            <p>${message}</p>
                        </div>
                        <button class="close" onclick="closeAlert(event)">
                            <svg height="18px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="18px" xml:space="preserve" xmlns="http://www.w3.org/1999/xlink"><path fill="#69727D" d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z"/></svg>
                        </button>
                    </div>
                `;
                break;
            default:
                break;
        }
        container.innerHTML += alertHTML;
    }
}

function closeAlert(event) {
    const alertDiv = event.target.closest('div[class*="alert"]');
    if (alertDiv) {
        alertDiv.remove();
    }
}

function removeInfoAlert() {
    const elementToRemove = document.querySelector('.info.alert');
    if (elementToRemove) {
        elementToRemove.remove();
    }
}
