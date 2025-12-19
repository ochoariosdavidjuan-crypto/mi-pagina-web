
document.addEventListener('DOMContentLoaded', () => {
    
    const formulario = document.querySelector('form');
    const inputNombre = document.querySelector('#nombre');
    const inputRazon = document.querySelector('#razon');
    const inputCorreo = document.querySelector('#correo');

    if (formulario) {
        formulario.addEventListener('submit', (e) => {
            let error = false;
            let mensajesError = [];

         
            if (inputNombre.value.trim().length < 3) {
                mensajesError.push("El nombre debe tener al menos 3 caracteres.");
                inputNombre.style.borderColor = "red";
                error = true;
            } else {
                inputNombre.style.borderColor = "#ccc";
            }

            
            if (inputRazon.value.trim().length < 5) {
                mensajesError.push("Por favor, explica detalladamente el motivo.");
                inputRazon.style.borderColor = "red";
                error = true;
            } else {
                inputRazon.style.borderColor = "#ccc";
            }

            
            if (error) {
                e.preventDefault(); // Evita que el formulario se envíe
                alert("Errores en el formulario:\n- " + mensajesError.join("\n- "));
            } else {
                alert("¡Gracias, " + inputNombre.value + "! Tu mensaje sobre '" + inputRazon.value + "' ha sido validado correctamente.");
                
            }
        });
    }

    
    const inputs = [inputNombre, inputRazon, inputCorreo];
    inputs.forEach(input => {
        if (input) {
            input.addEventListener('focus', () => {
                input.style.outline = "none";
                input.style.border = "2px solid #5a9bd4";
                input.style.backgroundColor = "#ffffff";
            });

            input.addEventListener('blur', () => {
                input.style.border = "1px solid #ccc";
                input.style.backgroundColor = "#f4f4f9";
            });
        }
    });

    const filasTabla = document.querySelectorAll('table tr');
    filasTabla.forEach(filas => {
        filas.addEventListener('mouseover', () => {
            filas.style.backgroundColor = "#e9f0f9";
        });
        filas.addEventListener('mouseout', () => {
            filas.style.backgroundColor = "";
        });
    });
});