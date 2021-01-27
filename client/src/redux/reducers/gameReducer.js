import {PAUSE,PLANT_FLAG, START, NEW_GAME, LOAD_GAME, SAVE_GAME} from '../actions/gameActions.js'

const initalState={
    pause:true,
    table:{},
    state:"",
    time:"",
    newGame:{
        row:null,
        columns:null,
        mines:null
    },
    difficulty:"",
    flag:[],
}

export default (state = initalState, action) =>{
    switch(action.type){
    
       case NEW_GAME :{
           console.log(action.newGame)
        return{
            ...state,
            difficulty:action.newGame.difficulty,
            newGame:{...state.newGame,
                    row:action.newGame.row,
                    columns:action.newGame.columns,
                    mines: action.newGame.difficulty==="Personalizado"?Math.ceil(action.newGame.columns*action.newGame.row*0.2):action.newGame.mines}
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