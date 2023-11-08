const menuIcon = document.getElementById("menuIcon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", function() {
    navbar.classList.toggle("responsive");
});

function cambiarImagen() {
    document.getElementById("imagen").src = "imagen2.png";
}

function restaurarImagen() {
    document.getElementById("imagen").src = "imagen1.jpg";
}



//reloj


function actualizarReloj() {
    const reloj = new Date();
    const hora = reloj.getHours().toString().padStart(2, '0');
    const minuto = reloj.getMinutes().toString().padStart(2, '0');
    const segundo = reloj.getSeconds().toString().padStart(2, '0');

    const horaElement = document.getElementById("hora");
    const minutoElement = document.getElementById("minuto");
    const segundoElement = document.getElementById("segundo");

    horaElement.textContent = hora;
    minutoElement.textContent = minuto;
    segundoElement.textContent = segundo;
}

actualizarReloj();
setInterval(actualizarReloj, 1000);

const mostrarHoraBtn = document.getElementById("mostrarHoraBtn");
mostrarHoraBtn.addEventListener("click", () => {
    actualizarReloj();
});


function updateClock() {
    var now = new Date();
    var utcOffset = -5; // Diferencia horaria en horas (UTC -5)
    
    // Ajustar la hora local a UTC -5
    var utcTime = new Date(now.getTime() + (utcOffset * 60 * 60 * 1000));

    var hour = utcTime.getUTCHours();
    var minute = utcTime.getUTCMinutes();
    var second = utcTime.getUTCSeconds();

    var hourHand = document.getElementById('hour-hand');
    var minuteHand = document.getElementById('minute-hand');
    var secondHand = document.getElementById('second-hand');

    var hourDeg = (hour % 12) * 30 + (minute / 60) * 30 + 90;
    var minuteDeg = minute * 6 + (second / 60) * 6 + 90;
    var secondDeg = second * 6 + 90;

    hourHand.style.transform = `translate(-50%, -100%) rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `translate(-50%, -100%) rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `translate(-50%, -100%) rotate(${secondDeg}deg)`;
}

setInterval(updateClock, 1000);


