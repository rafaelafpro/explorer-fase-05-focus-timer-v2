import * as el from './elements.js'
import state from './state.js'
import * as events from './events.js'
import * as sounds from './sounds.js'

export function incrementCounter(){

    let minutes = Number(el.minutes.textContent) + 5
    let seconds = Number(el.seconds.textContent) 
    events.updateDisplay(minutes, seconds);
}

export function decrementCounter(){
    let minutes = Number(el.minutes.textContent) 
    let seconds = Number(el.seconds.textContent) 

    if(minutes <= 5){
        minutes = 0;
        seconds = 0;
    } else{
        minutes -= 5;
    }
    events.updateDisplay(minutes, seconds);
}

export function countdown(){
    clearTimeout(state.timeoutId);

    if(!state.isRunning){
        return;
    }

    let seconds = Number(el.seconds.textContent)
    let minutes = Number(el.minutes.textContent)

    seconds--;

    if(seconds < 0){
        seconds = 59;
        minutes--;
    }

    if(minutes < 0){
        state.isRunning = !state.isRunning
        sounds.kitchenTimer.play();
        return;
    }

    events.updateDisplay(minutes, seconds)
    state.timeoutId = setInterval(()=>countdown(), 1000);
}