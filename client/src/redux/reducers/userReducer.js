import {GET_SAVED_GAMES,
        GET_RECORDS,
        LOGOUT,
        SUCCES_REGISTER,
        SUCCES_LOGIN,
        SUCCES_PROFILE,
        LOADING_USER,
        NEW_RECORD,
        POST_SAVED_GAMES,
        ERROR_USER} from '../actions/userActions.js'

const initalState={
    error:"",
    loading:false,
    token:"",
    records:{
        Facil:null,
        Medio:null,
        Dificil:null
    },
    name:"",
    savedGames:[]
}

export default (state = initalState, action) =>{
    switch(action.type){

    case POST_SAVED_GAMES:{
        console.log("ACTION ",action.payload)
        return{
            ...state,
            savedGame:state.savedGames.concat(action.payload)
        }
    }

    case NEW_RECORD:{
        console.log(state.records[action.payload.difficulty].score>action.payload.score)
        return{
            ...state,
            records:{...state.records,
                [action.payload.difficulty]:state.records[action.payload.difficulty].score>action.payload.score && action.payload
            } 

        }
    }

    case LOGOUT:{
        return{
            ...state,
            error:"",
        loading:false,
        token:"",
        records:{
            ...state.records,
            Facil:null,
            Medio:null,
            Dificil:null
    },
    name:"",
    savedGames:[]
        }
    }
        
    case GET_SAVED_GAMES:{
        return{
            ...state,
            loading:false,
            error:"",
            savedGames:action.savedGames
        }
    }
    case GET_RECORDS:{
        return{
        ...state,
        loading:false,
        error:"",
        records:{
                ...state.records,
                Facil:action.records.Facil && action.records.Facil[0],
                Medio: action.records.Medio && action.records.Medio[0],
                Dificil:action.records.Dificil && action.records.Dificil[0]
              }
        }
    } 
       case LOADING_USER:{
           return{
            ...state,
            error:"",
            loading:true
           }
       } 
       case ERROR_USER:{
           return{
               ...state,
               loading:false,
               error:action.payload
           }
       }
       case SUCCES_REGISTER :{
           return{
            ...state,
            loading:false,
            token: action.payload.token,
            name:action.payload.userName
        }
       }
       case SUCCES_LOGIN:{
           return{
            ...state,
            records:{...state.records,
                Facil: action.payload.records.Facil[0],
                Medio:action.payload.records.Medio[0],
                Dificil:action.payload.records.Dificil[0]
            },
            savedGames:action.payload.tables,
            loading:false,
            error:"",
            token:action.payload.token,
            name:action.payload.userName
           }
       }

       case SUCCES_PROFILE:{
           return{
              ...state,
              token:action.payload
           }
       }

       default: return state;
    }
}