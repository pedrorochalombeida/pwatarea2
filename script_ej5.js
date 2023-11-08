//formulario 
const formulario = document.getElementById("miFormulario");
const emailError = document.getElementById("emailError");

formulario.addEventListener("submit", function (e) {
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    if (!nombre.value || !email.value || !password.value) {
        alert("Por favor, complete todos los campos.");
        e.preventDefault(); // Evita el envío del formulario si faltan datos.
    }

    // Validar formato de correo electrónico
    const emailFormat = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    if (!email.value.match(emailFormat)) {
        emailError.style.display = "block"; // Muestra el mensaje de error.
        e.preventDefault();
    }
});
