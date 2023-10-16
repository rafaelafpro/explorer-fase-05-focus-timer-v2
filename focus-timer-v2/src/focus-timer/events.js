import * as el from './elements.js'
import state from './state.js'
import * as actions from './actions.js'
import * as sounds from './sounds.js'

export function registerControls(){
    let isRunning = state.isRunning;

    el.controls.addEventListener("click", (e)=>{
        let action = e.target.dataset.action;
        
        if(typeof actions[action] !== 'function'){
            return;
        }

        actions[action]();
    })

    el.tree.addEventListener("click", (e)=>{
        let isActive = e.target.classList.toggle("active");
        isActive ? sounds.bgForest.play() : sounds.bgForest.pause();
    })
}

export function updateDisplay(minutes, seconds){
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds 


    el.seconds.textContent = String(seconds).padStart(2, "0")
    el.minutes.textContent = String(minutes).padStart(2, "0")
}