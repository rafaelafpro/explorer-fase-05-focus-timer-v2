import * as el from './elements.js'
import state from './state.js'
import * as  timer from './timer.js'
import * as sounds from './sounds.js'


export function toggleCountdown(){
    state.isRunning = !state.isRunning;
    sounds.buttonPress.play();
    timer.countdown();
}

export function addFiveMinutes(){
    timer.incrementCounter();
}

export function removeFiveMinutes(){
    timer.decrementCounter();
}