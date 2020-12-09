'use strict';

const clockDiv = document.querySelector('.clock');

let time = 0;
let isStopped = false;

const getMinutesForDisplay = (currentTime) => currentTime.getMinutes() < 10 ? `0${currentTime.getMinutes()}` : currentTime.getMinutes();
const getSecondsForDisplay = (currentTime) => currentTime.getSeconds() < 10 ? `0${currentTime.getSeconds()}` : currentTime.getSeconds();
const writeTime = () => {
    if (isStopped) { return; }
    const currentTime = new Date(time += 1000)
    clockDiv.innerHTML = `${getMinutesForDisplay(currentTime)}:${getSecondsForDisplay(currentTime)}`;
    setTimeout(() => writeTime(), 1000);
};

const counterIsRunning = () => time > 0;
const startCounter = () => {
    if (!counterIsRunning()) {
        writeTime();
    }
}


const counterStop = () => isStopped = true;