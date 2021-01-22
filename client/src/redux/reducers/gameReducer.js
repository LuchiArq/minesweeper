import {PAUSE,PLANT_FLAG, START, NEW_GAME_GUEST, LOAD_GAME, SAVE_GAME} from '../actions/gameActions.js'

const initalState={
    pause:true,
    teble:{},
    state:"",
    time:"",
    difficulty:"Normal",
    flag:[],
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

       case PLANT_FLAG:{
           var existe = (state.flag.filter(cell=> cell.x == action.cell.x && cell.y == action.cell.y)[0])
           console.log("CELL ",action.cell, "EXISTE ",existe)
           return{
               ...state,
               flag: existe ? state.flag.filter(cell=> cell.x !== action.cell.x || cell.y !== action.cell.y) : state.flag.concat(action.cell)
           }
       }

       default: return state;
    }
}