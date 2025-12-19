
document.addEventListener('DOMContentLoaded', () => {
  
    const formulario = document.querySelector('form');
    
    if (formulario) 
        {formulario.addEventListener('submit', (event) => {
            event.preventDefault();

            const nombre = document.getElementById('nombre').value.trim();
            const razon = document.getElementById('razon').value.trim();
            const correo = document.getElementById('correo').value.trim();

            let esValido = true;
            let mensajes = [];

            if (nombre.length < 3) {
                esValido = false;
                mensajes.push("El nombre es demasiado corto.");
                document.getElementById('nombre').style.borderColor = "#e74c3c"; 

            if (razon.length < 5) {
                esValido = false;
                mensajes.push("Por favor, describe mejor el motivo del contacto.");
                document.getElementById('razon').style.borderColor = "#e74c3c";
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(correo)) {
                esValido = false;
                mensajes.push("El formato del correo electrónico no es válido.");
                document.getElementById('correo').style.borderColor = "#e74c3c";
            }

            if (esValido) {
                alert(`¡Hola ${nombre}!\nTu mensaje con el motivo "${razon}" ha sido validado.\nTe responderemos pronto a: ${correo}`);
         
            } else {
                alert("Error al enviar:\n- " + mensajes.join("\n- "));
            }
        });
    }


    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.border = "2px solid #5a9bd4";
            input.style.backgroundColor = "#fff";
        });
        input.addEventListener('blur', () => {
            input.style.border = "1px solid #ccc";
            input.style.backgroundColor = "";
        });
    });

    const filasTabla = document.querySelectorAll('tbody tr');
    filasTabla.forEach(fila => {
        fila.addEventListener('mouseover', () => {
            fila.style.backgroundColor = "#e9f0f9"; 
            fila.style.fontWeight = "bold";
        });
        fila.addEventListener('mouseout', () => {
            fila.style.backgroundColor = "";
            fila.style.fontWeight = "normal";
        });
    });

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