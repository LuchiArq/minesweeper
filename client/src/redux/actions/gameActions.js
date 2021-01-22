import axios from 'axios'

export const PAUSE = "PAUSE";
export const NEW_GAME_GUEST = "NEW_GAME_GUEST";
export const LOAD_GAME = "LOAD_GAME";
export const SAVE_GAME = "SAVE_GAME";
export const START = "START";
export const PLANT_FLAG = "PLANT_FLAG";





export function newGameGuest(newGame){
    return{
        type:NEW_GAME_GUEST,
        newGame
    }
}

export function pause(){
    return{
        type:PAUSE,
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
