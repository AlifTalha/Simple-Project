const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');
const record = document.querySelector('.record');
const recordList = document.querySelector('.record-list');

const hr = document.querySelector('.hr');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');
const mili = document.querySelector('.mili');

sec.innerHTML = "00";
min.innerHTML = "00";
hr.innerHTML = "00";
mili.innerHTML = "00";

let second = 0;
let minute = 0;
let hour = 0;
let miliSec = 0;

let intervalId;
let isPaused = false;

start.addEventListener('click', function () {
    start.disabled = true;
    pause.disabled = false;
    stop.disabled = false;
    reset.disabled = false;
    intervalId = setInterval(miliSeconds, 10);
});

pause.addEventListener('click', function () {
    if (!isPaused) {
        clearInterval(intervalId);
        pause.innerText = "RESUME";
        isPaused = true;
    } else {
        intervalId = setInterval(miliSeconds, 10);
        pause.innerText = "PAUSE";
        isPaused = false;
    }
});

stop.addEventListener('click', function () {
    clearInterval(intervalId);
    stop.disabled = true;
    start.disabled = false;
});

reset.addEventListener('click', function () {
    clearInterval(intervalId);
    reset.disabled = true;
    start.disabled = false;
    stop.disabled = true;
    pause.innerText = "PAUSE";
    isPaused = false;
    second = 0;
    minute = 0;
    hour = 0;
    miliSec = 0;
    sec.innerHTML = "00";
    min.innerHTML = "00";
    hr.innerHTML = "00";
    mili.innerHTML = "00";
    recordList.innerHTML = "";  
});

record.addEventListener('click', function () {
    const time = `${hr.innerHTML}:${min.innerHTML}:${sec.innerHTML}:${mili.innerHTML}`;
    const listItem = document.createElement('li');
    listItem.innerText = time;
    
    if (recordList.children.length >= 3) {
        recordList.removeChild(recordList.firstChild); 
    }
    
    recordList.appendChild(listItem);
});

function miliSeconds() {
    miliSec++;
    if (miliSec <= 9) {
        mili.innerHTML = "0" + miliSec;
    } else {
        mili.innerHTML = miliSec;
    }
    
    if (miliSec == 100) {
        mili.innerHTML = "00";
        miliSec = 0;
        seconds();
    }
}

function seconds() {
    second++;
    if (second <= 9) {
        sec.innerHTML = "0" + second;
    } else {
        sec.innerHTML = second;
    }
    
    if (second == 60) {
        sec.innerHTML = "00";
        second = 0;
        minutes();
    }
}

function minutes() {
    minute++;
    if (minute <= 9) {
        min.innerHTML = "0" + minute;
    } else {
        min.innerHTML = minute;
    }
    
    if (minute == 60) {
        min.innerHTML = "00";
        minute = 0;
        hours();
    }
}

function hours() {
    hour++;
    if (hour <= 9) {
        hr.innerHTML = "0" + hour;
    } else {
        hr.innerHTML = hour;
    }
    
    if (hour == 24) {
        hr.innerHTML = "00";
        hour = 0;
    }
}
