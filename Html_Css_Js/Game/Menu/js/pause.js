paused = false;
 // set minutes
var mins = 30;
 // calculate the seconds 
var secs = mins * 60;
var t = 0;

function countdown() {
    t = setTimeout('Decrement()', 1000);
}

function Decrement() {
    if (document.getElementById) {
        minutes = document.getElementById("minutes");
        seconds = document.getElementById("seconds");
        // if less than a minute remaining
        if (seconds < 59) {
            seconds.value = secs;


        } else {
            minutes.value = getminutes();
            seconds.value = getseconds();
        }
        secs--;
        t = setTimeout('Decrement()', 1000);
    }
}

function getminutes() {
    // minutes is seconds divided by 60, rounded down
    mins = Math.floor(secs / 60);
    return mins;
}

function getseconds() {
    // take mins remaining (as seconds) away from total seconds remaining
    return secs - Math.round(mins * 60);
}

function pause() {
    clearTimeout(t);
    document.getElementById('Pause').value = "Resume";
    document.getElementById("Pause").onclick = resume();
}

function resume() {
    t = setTimeout();
}