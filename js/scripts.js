// Script para el header móvil
function toggleMobileMenu() {
    var menu = document.getElementById('mobileMenu');
    menu.classList.toggle('active'); // Alternar la clase 'active' para mostrar/ocultar el menú
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
            const col = this.closest(".col-md-6");
            const row = col.closest(".row");
            const activeItem = col.querySelector(".carousel-item.active");
            const imageHeight = activeItem.querySelector("img").clientHeight;

            if (cardText.classList.contains("short-text")) {

                // Expandir la tarjeta actual
                cardText.classList.remove("short-text");
                col.classList.add("expanded");
                this.textContent = "Show less";

                // Ajustar altura de la tarjeta expandida
                col.querySelector(".fixed-height").style.height = imageHeight + "px";

                // Ocultar la tarjeta vecina en la misma fila (solo para escritorio)
                if (window.innerWidth >= 992) {

                    const siblingIndex = (Array.from(row.children).indexOf(col) % 2 === 0) ? (Array.from(row.children).indexOf(col) + 1) : (Array.from(row.children).indexOf(col) - 1);              
                    const neighborCol = row.children[siblingIndex];

                    if (neighborCol) {
                        neighborCol.classList.add("d-none");
                    }
                }

            } else {

                // Contraer la tarjeta actual
                cardText.classList.add("short-text");
                col.classList.remove("expanded");
                this.textContent = "Show more";

                // Restaurar altura de la tarjeta contraída
                col.querySelector(".fixed-height").style.height = "300px";
                
                // Mostrar la tarjeta vecina en la misma fila después de que termine la transición (solo para escritorio)
                if (window.innerWidth >= 992) {
                    col.addEventListener('transitionend', function () {
                        const siblingIndex = Array.from(row.children).indexOf(col) % 2 === 0 ? Array.from(row.children).indexOf(col) + 1 : Array.from(row.children).indexOf(col) - 1;
                        const neighborCol = row.children[siblingIndex];
                        if (neighborCol) {
                            neighborCol.classList.remove("d-none");
                        }
                    }, { once: true });
                }

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
