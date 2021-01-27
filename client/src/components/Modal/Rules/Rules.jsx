import React from 'react'
import Button from '../../Button/Button'
import './rules.css'
const Rules = ({closeModal}) =>{
    return(
        <div className="rules">
            <div className="rules-cointainer-text">
                <p className="rules-text">
                    • El objetivo del juego es despejar un campo de minas sin detonar ninguna.
                </p>
                <p className="rules-text">
                    • Algunas casillas tienen un número, el cual indica la cantidad de minas que hay en las casillas circundantes. Así, si una casilla tiene el número 3, significa que de las ocho casillas que hay alrededor hay 3 con minas y 5 sin minas. 
                </p>
                <p className="rules-text">
                    • Si se descubre una casilla sin número indica que ninguna de las casillas vecinas tiene mina y éstas se descubren automáticamente.
                </p>
                <p className="rules-text">
                    • Si se descubre una casilla con una mina se pierde la partida.
                </p>
                <p className="rules-text">
                    • Se puede poner una marca (boton secundario) en las casillas que el jugador piensa que hay minas para ayudar a descubrir las que están cerca.
                </p>  
                <Button onClick={closeModal} buttonType='primary'>Continuar</Button>
            </div>
        </div>
    )
}
export default Rules