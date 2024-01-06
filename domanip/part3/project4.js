// Variables for buttons
const buttonPausePlay = document.querySelector('#start-btn');
const buttonReset = document.querySelector('#reset-btn');


// Variables timers
const timer = document.querySelector('#timer');
let hours = 0;
let minutes = 0;
let seconds = 0;
let intervalId;
let isrunning = false;

// Fonction de démarrage du chronomètre
function startWatch()
{
    intervalId = setInterval(stopWatch, 1000);
}

// Fonction d'arrêt du chronomètre
function stopWatch() {
    seconds++;

    if (seconds/60 === 1) {
        seconds = 0;
        minutes++;
        if (minutes/60 === 1) {
            minutes = 0;
            hours++;
            if (hours/24 === 1) {
                hours = 0
            }
        }
    
    }

    let displayWatch = timer.innerText = 
    (hours < 10 ? '0'+ hours : hours) + ':' +
    (minutes < 10 ? '0'+ minutes : minutes) + ':' +
    (seconds < 10 ? '0'+ seconds : seconds);

}
// Fonction toggle status
function startStopWatch() {
    if (isrunning) {
        clearInterval(intervalId);
        isrunning = false;
        buttonPausePlay.innerHTML = '<i class="bx bx-play" id="play"></i>';
    } else {
        startWatch();
        isrunning = true;
        buttonPausePlay.innerHTML = '<i class="bx bx-stop" id="stop"></i>';
    }
}
// Fonction de réinitialisation du chronomètre
function resetWatch() {
    clearInterval(intervalId);
    hours = 0;
    minutes = 0;
    seconds = 0;
    timer.innerText = '00:00:00';
    isrunning = false;
}

// Écouteurs d'événements pour les boutons
buttonPausePlay.addEventListener('click', startStopWatch);
buttonReset.addEventListener('click', resetWatch)