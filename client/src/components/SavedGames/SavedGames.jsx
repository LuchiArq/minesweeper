import React from 'react'
import './savedGames.css';
import {useSelector,useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import { ReactComponent as Reloj } from '../../assets/reloj.svg';
import {LoadGame} from '../../redux/actions/gameActions'
import Button from '../Button/Button';

const SavedGames  = () =>{

const {savedGames} = useSelector((store) => store.userReducer)
const dispatch =useDispatch()
const history = useHistory()

 const setDate = (date) =>{
    return Date(date).split(" ").slice(1,3).join().replace(","," ")
 } 

 function load(game){
    dispatch(LoadGame(game))
    history.push("/game")

 }

    return(
        <div className="savedGames">
            <h2 className="savedGames-title">Partidas Guardadas</h2>
             <div className="savedGame-header">
                <p className="savedGame-header-col"></p>
                <p className="savedGame-header-col">Dif.</p>
                <p className="savedGame-header-col">Tiempo</p>
                <p className="savedGame-header-col">Fecha</p>
            </div>
            <div className="savedGame-games">
                {
                    savedGames.length ? savedGames.map(data=>{
                        return(
                        <div className="savedGame-games-game">
                            <div className="savedGame-games-button" >
                                <Button onClick={()=>{load(data)}} buttonType="register">Reanudar</Button>
                            </div>
                            <span className="savedGame-games-data">{data.difficulty}</span>
                            <span className="savedGame-games-data-time">{data.score}<Reloj className="savedGame-games-reloj"/></span>
                            <span className="savedGame-games-data">{setDate(data.createAt)}</span>
                        </div>
                        
                        )
                    })  : <h2>No posee Tablas Guardadas</h2>  }
            </div> 
        </div>
    )
}

export default SavedGames