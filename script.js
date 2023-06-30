const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");


let interval;
let timeleft = 1500;

function updateTimer(){
    let minutes = Math.floor(timeleft / 60);
    let seconds = timeleft % 60;
    let formattedTime = minutes + ":" + seconds;

    timerEl.innerHTML = formattedTime;
}; 


function startTimer(){
    interval = setInterval(()=>{
        timeleft--;
        updateTimer();
    }, 1000);
};

function stopTimer(){
    
};

function resetTimer(){
    
};



startEl.addEventListener("click", startTimer);
startEl.addEventListener("click", stopTimer);
startEl.addEventListener("click", resetTimer);