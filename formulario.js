document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtener los campos del formulario
    const nombre = document.getElementById('nombre').value.trim();
    const asunto = document.getElementById('asunto').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    // Expresión regular para validar solo caracteres alfabéticos
    const regex = /^[a-zA-Z\s]+$/;

    let isValid = true;

    // Validar nombre
    if (nombre === "") {
        document.querySelector('.errorNombre').textContent = 'El texto es requerido.';
        isValid = false;
    } else if (!regex.test(nombre)) {
        document.querySelector('.errorNombre').textContent = 'El nombre debe contener solo caracteres alfabéticos.';
        isValid = false;
    } else {
        document.querySelector('.errorNombre').textContent = '';
    }

    // Validar asunto
    if (asunto === "") {
        document.querySelector('.errorAsunto').textContent = 'El texto es requerido.';
        isValid = false;
    } else if (!regex.test(asunto)) {
        document.querySelector('.errorAsunto').textContent = 'El asunto debe contener solo caracteres alfabéticos.';
        isValid = false;
    } else {
        document.querySelector('.errorAsunto').textContent = '';
    }

    // Validar mensaje
    if (mensaje === "") {
        document.querySelector('.errorMensaje').textContent = 'El texto es requerido.';
        isValid = false;
    } else if (!regex.test(mensaje)) {
        document.querySelector('.errorMensaje').textContent = 'El mensaje debe contener solo caracteres alfabéticos.';
        isValid = false;
    } else {
        document.querySelector('.errorMensaje').textContent = '';
    }

    // Si todos los campos son válidos, mostrar mensaje de éxito
    if (isValid) {
        document.querySelector('.resultado').textContent = '¡Mensaje enviado con éxito!';
    } else {
        document.querySelector('.resultado').textContent = '';
    }
});
