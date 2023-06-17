// variables for buttons

const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');

// variables for time values

let seconds = 0;
let minutes = 0;
let hours = 0;

// variables for leading zero

let leadingZeroSeconds = 0;
let leadingZeroMinutes = 0;
let leadingZeroHours = 0;

// variable for interval

let timerInterval = null;
let timerStatus = 'stopped';

// stopwatch function

function stopWatch() {

    seconds++;

    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;

        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }

    leadingZeroSeconds = seconds < 10 ? '0' + seconds : seconds;
    leadingZeroMinutes = minutes < 10 ? '0' + minutes : minutes;
    leadingZeroHours = hours < 10 ? '0' + hours : hours;

    //display time

    let displayTimer = document.querySelector('#timer');
    displayTimer.innerHTML = `${leadingZeroHours}:${leadingZeroMinutes}:${leadingZeroSeconds}`;
}


startStopBtn.addEventListener('click', function() {
    if (timerStatus === 'stopped') {
        timerInterval = window.setInterval(stopWatch, 1000);
        this.innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
        timerStatus = 'started';
    } else {
        window.clearInterval(timerInterval);
        this.innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
        timerStatus = 'stopped';
    }
});

resetBtn.addEventListener('click', function() {
    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.querySelector('#timer').innerHTML = `00:00:00`;
    startStopBtn.innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
});