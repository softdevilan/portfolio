// Script para el header móvil
function toggleMobileMenu() {

    var menu = document.getElementById('mobileMenu');

    if (menu.classList.contains('d-none')) {

        menu.classList.remove('d-none');

    } else {

        menu.classList.add('d-none');
        
    }

}

// Script efecto escribir
document.addEventListener('DOMContentLoaded', (event) => {

    var options = {

        strings: ["<h1 class='fs-1 fs-sm-4 pt-3 pb-1 fw-bold'> <div class='pb-2' style='font-size: 10vh;'> Hello, </div> <div class='fw-bold text-nowrap'> my name is <span class='fw-light'>{ </span>Angel Ilai<span class='fw-light'> } </span></div></h1>"],
        typeSpeed: 60

    };

    var typed = new Typed("#typed-output", options);

});

// Scripts para los tooltips
document.addEventListener('DOMContentLoaded', function () {

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));

    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {

        return new bootstrap.Tooltip(tooltipTriggerEl);

    });

});

// Script para que se encoja la tarjeta 
document.addEventListener("DOMContentLoaded", function () {

    const toggleButtons = document.querySelectorAll(".toggle-button");

    toggleButtons.forEach(button => {

        button.addEventListener("click", function () {
            const cardText = this.parentNode.previousElementSibling;
            if (cardText.classList.contains("short-text")) {
                cardText.classList.remove("short-text");
                this.textContent = "Show less";
            } else {
                cardText.classList.add("short-text");
                this.textContent = "Show more";
            }
        });

    });

});

// Inicialización de EmailJS
(function () { emailjs.init("O6l5VhxHQNthXd9J-"); })();

// Script para el formulario de contacto
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe de manera predeterminada

    // Envía el formulario
    emailjs.sendForm('service_33f3xcg', 'template_6s9u91i', this)

        .then(function (response) {

            console.log('¡Correo enviado!', response);
            // Resetea el formulario y muestra un mensaje de agradecimiento
            document.getElementById('contact-form').reset();
            alert('Thank you for your message! We will get back to you soon.');

        }, function (error) {

            console.log('Error al enviar el correo:', error);
            
        }
    );

});
