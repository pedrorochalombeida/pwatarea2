const botonCambiarColor = document.getElementById("cambiarColorBtn");
const elementoCambiante = document.getElementById("elementoCambiante");

botonCambiarColor.addEventListener("click", function() {
    // Cambiamos el color de fondo al agregar/eliminar la clase "cambioDeFondo"
    if (elementoCambiante.classList.contains("cambioDeFondo")) {
        elementoCambiante.classList.remove("cambioDeFondo");
    } else {
        elementoCambiante.classList.add("cambioDeFondo");
    }
});

const menuIcon = document.getElementById("menuIcon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", function() {
    navbar.classList.toggle("responsive");
});
