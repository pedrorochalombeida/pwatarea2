document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll("#menu a");

    menuItems.forEach(function (item) {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Ajusta el desplazamiento según tu diseño
                    behavior: "smooth"
                });
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const mostrarFormularioButton = document.getElementById("mostrarFormulario");
    const formularioConsulta = document.getElementById("formularioConsulta");

    mostrarFormularioButton.addEventListener("click", function () {
        if (formularioConsulta.style.display === "none") {
            formularioConsulta.style.display = "block";
        } else {
            formularioConsulta.style.display = "none";
        }
    });
});
