import {PLANT_FLAG, SET_STATE, NEW_GAME, LOAD_GAME, SAVE_GAME,SAVE_TIME} from '../actions/gameActions.js'

const initalState={
    dataGame:{},
    state:"",
    time:null,
    difficulty:"",
    flag:[],
    mines:null
}

export default (state = initalState, action) =>{
    switch(action.type){
    
       case NEW_GAME :{
        return{
            ...state,
            state:"",
            flag:[],
            dataGame:action.dataGame,
            difficulty:action.dataGame.difficulty,
            mines:action.dataGame.mines
        }
       }
       case SET_STATE :{
           return{
            ...state,
            state:action.state,
           }
       }

       case PLANT_FLAG:{
           var existe = (state.flag.filter(cell=> cell.x === action.cell.x && cell.y === action.cell.y)[0])
           console.log("CELL ",action.cell, "EXISTE ",existe)
           return{
               ...state,
               flag: existe ? state.flag.filter(cell=> cell.x !== action.cell.x || cell.y !== action.cell.y) : state.flag.concat(action.cell)
           }
       }
       case SAVE_TIME:{
           return{
               ...state,
               time: action.time
           }
       }

       default: return state;
    }
}