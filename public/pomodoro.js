var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

var workMinutes = document.getElementById('work_minutes');
var workSeconds = document.getElementById('work_seconds');

var breakMinutes = document.getElementById('break_minutes');
var breakSeconds = document.getElementById('break_seconds');
//all my time variables
//store a reference to a timer variable
var startTimer;

start.addEventListener('click', function(){
    if(startTimer === undefined){
        startTimer = setInterval(timer, 1000)
    } else {
        alert("Timer is already running");
    }
})

reset.addEventListener('click', function(){
    workMinutes.innerText = 25;
    workSeconds.innerText = "00";

    breakMinutes.innerText = 5;
    breakSeconds.innerText = "00";

    document.getElementById('counter').innerText = 0;
    stopInterval()
    startTimer = undefined;
})

stop.addEventListener('click', function(){
    stopInterval()
    startTimer = undefined;
})


//Start Timer Function
function timer(){
    //Work Timer Countdown
    if(workSeconds.innerText != 0){
        workSeconds.innerText--;
    } else if(workMinutes.innerText != 0 && workSeconds.innerText == 0){
        workSeconds.innerText = 59;
        workMinutes.innerText--;
    }

    //Break Timer Countdown
    if(workMinutes.innerText == 0 && workSeconds.innerText == 0){
        if(breakSeconds.innerText != 0){
            breakSeconds.innerText--;
        } else if(breakMinutes.innerText != 0 && breakSeconds.innerText == 0){
            breakSeconds.innerText = 59;
            breakMinutes.innerText--;
        }
    }
}

//Stop Timer Function
function stopInterval(){
    clearInterval(startTimer);
}