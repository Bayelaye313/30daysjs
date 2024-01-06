// Variables for buttons
const startStopButton = document.getElementById('start-btn');
const resetButton = document.getElementById('reset-btn');

// Variables timers
const timer = document.querySelector('#timer');
let seconds = 0;
let minutes = 0;
let hours = 0;
let intervalId; // To store the interval ID
let isRunning = false;

// Fonction de démarrage du chronomètre
function startWatch() {
    intervalId = setInterval(stopWatch, 1000); // Appelle stopWatch toutes les 1000 ms (1 seconde)
}

// Fonction d'arrêt du chronomètre
function stopWatch() {
    seconds++;
    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;
        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
            if (hours / 24 === 1) {
                hours = 0;
            }
        }
    }

    let displayTimes = document.querySelector('#timer').innerText =
        (hours < 10 ? '0' + hours.toString() : hours) + ':' +
        (minutes < 10 ? '0' + minutes.toString() : minutes) + ':' +
        (seconds < 10 ? '0' + seconds.toString() : seconds);
}

// Fonction toggle status
function startStopWatch() {
    if (isRunning) {
        clearInterval(intervalId);
        isRunning = false;
        document.getElementById('start-btn').innerHTML = '<i class="bx bx-play" id="play"></i>';
    } else {
        startWatch();
        isRunning = true;
        document.getElementById('start-btn').innerHTML = '<i class="bx bx-stop" id="stop"></i>';
    }
}

// Fonction de réinitialisation du chronomètre
function resetWatch() {
    clearInterval(intervalId);
    seconds = 0;
    minutes = 0;
    hours = 0;
    timer.innerText = '00:00:00';
    isRunning = false;
}

// Écouteurs d'événements pour les boutons
startStopButton.addEventListener('click', startStopWatch);
resetButton.addEventListener('click', resetWatch);
