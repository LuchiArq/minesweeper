import axios from 'axios'

export const NEW_GAME = "NEW_GAME";
export const LOAD_GAME = "LOAD_GAME";
export const SAVE_GAME = "SAVE_GAME";
export const START = "START";
export const PLANT_FLAG = "PLANT_FLAG";
export const SAVE_TIME ="SAVE_TIME"
export const SET_STATE = "SET_STATE"

export function newGame(dataGame){
    return{
        type:NEW_GAME,
        dataGame
    }
}

export function start(){
    return{
        type:START
    }
}

export function plantFlag(cell){
    return{
        type:PLANT_FLAG,
        cell
    }
}

export function saveTime(time){
    return{
        type:SAVE_TIME,
        time
    }
}

export function setStateGame(state){
    return{
        type:SET_STATE,
        state
    }
}
