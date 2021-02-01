import React from 'react'
import './savedGames.css';
import { ReactComponent as Reloj } from '../../assets/reloj.svg';

import Button from '../Button/Button';
const SavedGames  = () =>{

    const partidas=[
                    {dificultad:"Medio",tiempo:"150",fecha:"20/1"},
                    {dificultad:"Dificil",tiempo:"150",fecha:"21/3"},
                    {dificultad:"Facil",tiempo:"250",fecha:"21/2"},
                    {dificultad:"Medio",tiempo:"110",fecha:"27/1"},
                    {dificultad:"Medio",tiempo:"110",fecha:"27/1"}
                ]
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
                    partidas.map(data=>{
                        return(
                        <div className="savedGame-games-game">
                            <div className="savedGame-games-button" >
                                <Button buttonType="register">Reanudar</Button>
                            </div>
                            <span className="savedGame-games-data">{data.dificultad}</span>
                            <span className="savedGame-games-data">{data.tiempo}<Reloj className="savedGame-games-reloj"/></span>
                            <span className="savedGame-games-data">{data.fecha}</span>
                        </div>
                        
                        )
                    })                    }
            </div> 
        </div>
    )
}

export default SavedGames