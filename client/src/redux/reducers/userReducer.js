import {REGISTER,LOGIN,MY_PROFILE} from '../actions/userActions.js'

const initalState={
    token:"",
    usuario:"",
}

export default (state = initalState, action) =>{
    switch(action.type){
    
       case REGISTER :{
           return{
            ...state,
            token: action.user
        }
       }
       case LOGIN :{
           return{
            ...state,
            token:action.user
           }
       }

       case MY_PROFILE:{
           return{
              ...state,
              token:action.user
           }
       }

       default: return state;
    }
}