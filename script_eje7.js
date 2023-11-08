// Obtener todos los elementos del submenú de Servicios
const submenuServicio = document.querySelectorAll('.submenuServicio ul li a');

// Iterar sobre los elementos y agregar un evento de clic a cada uno
submenuServicio.forEach((item, index) => {
    item.addEventListener('click', () => {
        // Mostrar un mensaje indicando el servicio escogido con el número correspondiente
        alert(`Ha escogido el servicio ${index + 1}`);
    });
});

// Obtener todos los elementos del submenú de Productos
const submenuProducto = document.querySelectorAll('.submenuProducto ul li a');

// Iterar sobre los elementos y agregar un evento de clic a cada uno
submenuProducto.forEach((item, index) => {
    item.addEventListener('click', () => {
        // Mostrar un mensaje indicando el producto escogido con el número correspondiente
        alert(`Ha escogido el producto ${index + 1}`);
    });
});
