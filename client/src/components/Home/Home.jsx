import React,{useState, useEffect} from 'react'
import Button from '../Button/Button'
import './home.css'
const Home = () =>{
    return(
        <div className="home">
            <div className="home-container">
                <div className="home-container-buttonGroup">
                    <Button buttonType='register' children='Registrarse'/>
                    <Button buttonType='login' children='Iniciar sesion'/>
                </div>
                <div className="home-container-welcome">
                    <p className="home-title">Buscaminas</p>
                    <p className="home-text">
                        • El objetivo del juego es despejar un campo de minas sin detonar ninguna.
                    </p>
                    <p className="home-text">
                        • Algunas casillas tienen un número, el cual indica la cantidad de minas que hay en las casillas circundantes. Así, si una casilla tiene el número 3, significa que de las ocho casillas que hay alrededor hay 3 con minas y 5 sin minas. 
                    </p>
                    <p className="home-text">
                        • Si se descubre una casilla sin número indica que ninguna de las casillas vecinas tiene mina y éstas se descubren automáticamente.
                    </p>
                    <p className="home-text">
                        • Si se descubre una casilla con una mina se pierde la partida.
                    </p>
                    <p className="home-text">
                        • Se puede poner una marca (boton secundario) en las casillas que el jugador piensa que hay minas para ayudar a descubrir las que están cerca.
                    </p>    
                </div>
                <div className="home-button-jugar">
                    <Button buttonType='primary' children='Jugar'/>
                </div>
            </div>
        </div>
    )
}
export default Home