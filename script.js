const form = document.querySelector("Formulario de Contacto");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = document.getElementById('Nombre:').value;
    const motivo = document.getElementById('Motivo del contacto:').value;
    const correo = document.getElementById('Correo Electrónico:').value;

    console.log("Nombre:", nombre);
    console.log("Motivo del contacto:", motivo);
    console.log("Correo Electronico:", correo);

    alert("Hola " + nombre + ", su correo electronico es " + correo + " y su motivo de contacto es: \n" + motivo);
});
