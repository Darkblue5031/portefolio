document.addEventListener('DOMContentLoaded', function() {
    const contactSection = document.getElementById('contact-section');

    if (contactSection) {
        const title = contactSection.querySelector('#contact-title');
        const nameInput = contactSection.querySelector('#name');
        const nameLabel = contactSection.querySelector('#name-label');
        const emailInput = contactSection.querySelector('#email');
        const emailLabel = contactSection.querySelector('#email-label');
        const messageTextarea = contactSection.querySelector('#message');
        const messageLabel = contactSection.querySelector('#message-label');
        const button = contactSection.querySelector('button');

        if (title) {
            title.addEventListener("mouseover", function() {
                title.style.color = "var(--main-color)";
            });

            title.addEventListener("mouseout", function() {
                title.style.color = "";
            });
        }

        const handleInputEvents = (input, label) => {
            input.addEventListener("mouseover", function() {
                input.style.borderColor = "var(--main-color)";
                label.style.color = "var(--main-color)";
            });

            input.addEventListener("mouseout", function() {
                input.style.borderColor = "#ccc";
                if (document.activeElement !== input) {
                    label.style.color = "var(--three-three-three2)";
                }
            });

            input.addEventListener("focus", function() {
                label.style.color = "var(--main-color)";
            });

            input.addEventListener("blur", function() {
                input.style.borderColor = "#ccc";
                label.style.color = "var(--three-three-three2)";
            });

            label.addEventListener("mouseover", function() {
                label.style.color = "var(--main-color)";
                input.style.borderColor = "var(--main-color)";
            });

            label.addEventListener("mouseout", function() {
                if (document.activeElement !== input) {
                    label.style.color = "var(--three-three-three2)";
                }
                input.style.borderColor = "#ccc";
            });
        };

        handleInputEvents(nameInput, nameLabel);
        handleInputEvents(emailInput, emailLabel);
        handleInputEvents(messageTextarea, messageLabel);

        if (button) {
            button.addEventListener("mouseover", function() {
                button.style.backgroundColor = "var(--main-color)";
                button.style.color = "var(--fff)";
            });

            button.addEventListener("mouseout", function() {
                button.style.backgroundColor = "var(--three-three-three2)";
                button.style.color = "var(--fff)";
            });
        }
    }
});