import axios from 'axios'

export const REGISTER = "REGISTER"
export const LOGIN = "LOGIN"
export const MY_PROFILE = "MY_PROFILE"


export function register(newUser){
    return function(dispatch){
        axios.post('http://localhost:3000/dev/auth/register',newUser)
        .then((user)=>{
            dispatch({
                type: REGISTER,
                user
            })
        })
    }
}

export function loginUser(user){
    return function(dispatch){
        axios.post('http://localhost:3000/dev/auth/login',user)
        .then((user)=>{
            console.log("RESPUESTA DE RUTA LOGIN: ",user)
            dispatch({
                type: LOGIN,
                user
            })
        })
    }
}

export function myProfile(newUser){
    return function(dispatch){
        axios.post('http://localhost:3000/dev/user/myProfile',newUser)
        .then((user)=>{
            dispatch({
                type: MY_PROFILE,
                user
            })
        })
    }
}