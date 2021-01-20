import {PAUSE, START, NEW_GAME_GUEST, LOAD_GAME, SAVE_GAME} from '../actions/gameActions.js'

const initalState={
    pause:true,
    teble:{},
    state:"",
    time:"",
    difficulty:"",
    flag:"",
    minesLocation:[]
}

export default (state = initalState, action) =>{
    switch(action.type){

       case NEW_GAME_GUEST :{
        return{
            ...state,
            teble:action.table,
            state:action.state,
            difficulty:action.difficulty,
            flag:action.mines,
        }
       }

       case START :{
           return{
            ...state,
            state:"in progress"
           }
       }

       default: return state;
    }
}