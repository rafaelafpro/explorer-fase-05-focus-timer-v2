import { registerControls, updateDisplay } from "./events.js"
import state from "./state.js"

export function start(minutes, seconds){
    state.minutes = minutes ?? state.minutes
    state.seconds = seconds ?? state.seconds 

    registerControls();
    updateDisplay(minutes, seconds);
}