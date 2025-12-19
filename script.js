/**
 * Script de JavaScript para la página personal de Juan David Rios
 * Implementa: Validación de formulario y manejo de eventos dinámicos
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. VALIDACIÓN DEL FORMULARIO DE CONTACTO ---
    const formulario = document.querySelector('form');
    
    if (formulario) {
        formulario.addEventListener('submit', (event) => {
            // Detenemos el envío automático para validar
            event.preventDefault();

            // Obtenemos los valores de los campos
            const nombre = document.getElementById('nombre').value.trim();
            const razon = document.getElementById('razon').value.trim();
            const correo = document.getElementById('correo').value.trim();

            // Variables de control
            let esValido = true;
            let mensajes = [];

            // Validación del nombre (mínimo 3 caracteres)
            if (nombre.length < 3) {
                esValido = false;
                mensajes.push("El nombre es demasiado corto.");
                document.getElementById('nombre').style.borderColor = "#e74c3c"; // Rojo error
            }

            // Validación del motivo
            if (razon.length < 5) {
                esValido = false;
                mensajes.push("Por favor, describe mejor el motivo del contacto.");
                document.getElementById('razon').style.borderColor = "#e74c3c";
            }

            // Validación de correo (formato básico)
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(correo)) {
                esValido = false;
                mensajes.push("El formato del correo electrónico no es válido.");
                document.getElementById('correo').style.borderColor = "#e74c3c";
            }

            // Resultado de la validación
            if (esValido) {
                alert(`¡Hola ${nombre}!\nTu mensaje con el motivo "${razon}" ha sido validado.\nTe responderemos pronto a: ${correo}`);
                // Aquí podrías proceder con el envío real
                // formulario.submit(); 
            } else {
                alert("Error al enviar:\n- " + mensajes.join("\n- "));
            }
        });
    }

    // --- 2. MANEJO DE EVENTOS (INTERACTIVIDAD) ---

    // Evento de Foco: Resaltar campos al escribir (usando el azul de tu h1 en CSS)
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.border = "2px solid #5a9bd4"; // Tu color de acento
            input.style.backgroundColor = "#fff";
        });
        input.addEventListener('blur', () => {
            input.style.border = "1px solid #ccc";
            input.style.backgroundColor = "";
        });
    });

    // Evento en la Tabla: Resaltar filas al pasar el mouse
    const filasTabla = document.querySelectorAll('tbody tr');
    filasTabla.forEach(fila => {
        fila.addEventListener('mouseover', () => {
            fila.style.backgroundColor = "#e9f0f9"; // Color de tus listas en CSS
            fila.style.fontWeight = "bold";
        });
        fila.addEventListener('mouseout', () => {
            fila.style.backgroundColor = "";
            fila.style.fontWeight = "normal";
        });
    });

    // Evento en Imagen: Mensaje de bienvenida al hacer clic en la foto
    const fotoPerfil = document.querySelector('img');
    if (fotoPerfil) {
        fotoPerfil.addEventListener('click', () => {
            console.log("Visualización de foto activada.");
            fotoPerfil.style.transition = "transform 0.3s";
            fotoPerfil.style.transform = "scale(1.1)";
            setTimeout(() => fotoPerfil.style.transform = "scale(1)", 300);
        });
    }
});