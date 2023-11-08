document.addEventListener('DOMContentLoaded', function () {
    // Obtener el campo de entrada de las horas y el botón de inicio
    const hoursInput = document.getElementById('hours');
    const startButton = document.createElement('button');
    startButton.innerText = 'Comenzar Temporizador';
    document.body.appendChild(startButton);

    let tiempoFinal;

    startButton.addEventListener('click', function () {
        // Obtener las horas ingresadas por el usuario
        const horas = parseInt(hoursInput.value);

        // Validar que se haya ingresado un número positivo
        if (horas <= 0 || isNaN(horas)) {
            alert('Por favor, ingrese un número de horas válido.');
            return;
        }

        // Calcular la fecha y hora de finalización del temporizador
        tiempoFinal = new Date().getTime() + horas * 60 * 60 * 1000; // horas * 60 minutos/hora * 60 segundos/minuto * 1000 milisegundos/segundo

        // Ocultar el campo de entrada y el botón de inicio después de comenzar el temporizador
        hoursInput.style.display = 'none';
        startButton.style.display = 'none';

        // Actualizar el temporizador cada segundo
        const timer = setInterval(function () {
            // Obtener la fecha y hora actual
            const ahora = new Date().getTime();

            // Calcular la diferencia entre la fecha de finalización y la fecha actual
            const diferencia = tiempoFinal - ahora;

            // Calcular horas, minutos y segundos a partir de la diferencia
            const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

            // Mostrar el tiempo restante en el elemento con id "timer"
            document.getElementById('timer').innerText = `${agregarCeros(horas)}:${agregarCeros(minutos)}:${agregarCeros(segundos)}`;

            // Si la cuenta regresiva ha terminado, mostrar un mensaje y detener el temporizador
            if (diferencia <= 0) {
                document.getElementById('timer').innerText = '¡Tiempo terminado!';
                clearInterval(timer);
            }
        }, 1000); // Actualizar cada segundo

        // Función para agregar ceros delante de números menores que 10
        function agregarCeros(numero) {
            return numero < 10 ? '0' + numero : numero;
        }
    });
});
