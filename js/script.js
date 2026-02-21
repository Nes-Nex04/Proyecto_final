// Mensajes de bienvenida y alerta
console.log("Bienvenido a la página de Fórmula 1");
window.addEventListener('load', function() {
    // alerta removida para evitar ventana emergente al cargar
});

// Validación de formulario de contacto
function validateContactForm() {
    const email = document.getElementById('email');
    if (!email.value) {
        alert('Por favor ingresa un correo electrónico.');
        email.focus();
        return false;
    }
    return true;
}

// Añadir evento submit al formulario
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', function(event) {
        if (!validateContactForm()) {
            event.preventDefault();
        }
    });
}

// Dato curioso en historia
const btnDato = document.getElementById('datoCuriosoBtn');
if (btnDato) {
    // el comportamiento con alerta fue removido para no mostrar ventanas emergentes
    btnDato.addEventListener('click', function() {
        console.log('Dato curioso: el primer campeonato de F1 se disputó en 1950 y fue ganado por Giuseppe Farina.');
    });
}