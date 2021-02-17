import axios from 'axios'
import {SaveStateLocalStorage,LoadStateLocalStorage} from '../../helpers/localStorage'

export const SUCCES_REGISTER = "SUCCES_REGISTER";
export const SUCCES_PROFILE = "SUCCES_PROFILE";
export const SUCCES_LOGIN = "SUCCES_LOGIN";
export const LOADING_USER = "LOADING_USER";
export const ERROR_USER = "ERROR";
export const LOGOUT = "LOGOUT";
export const GET_RECORDS = "GET_RECORDS";
export const GET_SAVED_GAMES = "GET_SAVED_GAMES"
export const NEW_RECORD="NEW_RECORD";
export const POST_SAVED_GAMES="POST_SAVED_GAMES";


export function Logout(){
    localStorage.clear()
    return {
        type:LOGOUT,
    }
}

export function AllDataUser(token){
    return function(dispatch){
        
        dispatch(request())
        axios.get('http://localhost:3000/dev/dataUser',{
            headers:{
                Authorization:LoadStateLocalStorage("dataUser").token
            }
        })
        .then((user)=>{
            const loginUser = user.data
            SaveStateLocalStorage("dataUser",loginUser)
            dispatch(succesLogin(loginUser)) 
        })
        .catch(err=>{
            console.log(err)
        })
    }
}

export function getSavedGames(){
    return function(dispatch){
        dispatch(request())
        axios.get("http://localhost:3000/dev/table/AllTables",{
            headers:{
                Authorization:LoadStateLocalStorage("dataUser").token
            }})
        .then((resp)=>{
            console.log("RESPUESTA DE RUTA ALL TABLES: ",resp)
           let games = resp.data 
            dispatch(successGetSavedGame(games))
        })
        .catch(err=>{
            dispatch(error(err.message))
        })
    }
}


export function getRecords(){
    return function(dispatch){
        dispatch(request())
        axios.get("http://localhost:3000/dev/scores",{
            headers:{
                Authorization:LoadStateLocalStorage("dataUser").token
            }})
        .then((resp)=>{
            let records = resp.data
           dispatch(successGetRecords(records))
        })
        .catch(err=>dispatch(error(err.message)))
    }
}

export function register(newUser){
    return function(dispatch){
        dispatch(request())
        axios.post('http://localhost:3000/dev/auth/register',newUser)
        .then((user)=>{
            console.log(user.data)
           const registerUser = user.data
           registerUser.statusCode===500?
           dispatch(error(registerUser.message)):
            dispatch(successRegister(registerUser))
        })
        .catch(err=>dispatch(error(err)))
    }
}

export function login(user){
    return function(dispatch){
        dispatch(request())
        axios.post('http://localhost:3000/dev/auth/login',user)
        .then((user)=>{
            const loginUser = user.data
            SaveStateLocalStorage("dataUser",loginUser)
            console.log("USUARIO ACTION USER LOGIN",user.data)
            loginUser.statusCode===500 ?
            dispatch(error(loginUser.message)):
            dispatch(succesLogin(loginUser)) 
        })
        .catch(err=>{
            console.log("ESTE ES EL ERROR ",err)
            dispatch(error("El usuario no existe"))
        })
    }
}

export function myProfile(user){
    return function(dispatch){
        
        axios.post('http://localhost:3000/dev/user/myProfile',user)
        .then((user)=>{
            
        })
    }
}

export function Record(Record){
    return{
        type:NEW_RECORD,
        payload:Record
    }
}

function successGetRecords(records){
    return{
        type:GET_RECORDS,
        records: records
    }
}
function successRegister(user){
    return{
        type:SUCCES_REGISTER,
        payload:user
    }
}

function successGetSavedGame(games){
    return{
        type:GET_SAVED_GAMES,
        savedGames:games
    }
}

export function successPostSavedGame(games){
    return{
        type:POST_SAVED_GAMES,
        payload:games.data
    }
}

function succesLogin(user){
   return {
        type: SUCCES_LOGIN,
        payload:user
    }
}

function request(){
    return {
        type: LOADING_USER,
    }
}

function error(error){
    return {
        type: ERROR_USER,
        payload:error
    }
}
export function SetError(error){
    return {
        type: ERROR_USER,
        payload:error
    }
}
