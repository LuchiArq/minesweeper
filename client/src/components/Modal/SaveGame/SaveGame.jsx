import React from 'react'
import Button from '../../Button/Button'
import FlagAndTime from '../FlagAndTime.jsx'
import './saveGame.css';


const SaveGame = ({saveNewGame,loading,contiunue,closeModal,name}) =>{
    if(!name){
        return(
        <div className="saveGame">
            <h2 className="modal-title-big saveGame-title" >Guardar</h2>
            <div className="saveGame-data">
                <h3 className="modal-title-small">Debe estar registrado para guardar su partida</h3>
            </div>
            <div className="saveGame-button">    
                 <Button onClick={closeModal} buttonType="primary">Continuar</Button>
            </div> 
        </div>
        )
    }
    return (
    <div className="saveGame">
        <h2 className="modal-title-big saveGame-title" >Guardar</h2>
        <div className="saveGame-data">
            <FlagAndTime/>
        </div>
        <div className="saveGame-button">    
         {
             loading 
             ? <h3>Cargando...</h3>
             : <Button onClick={contiunue ? closeModal : saveNewGame} buttonType="primary">
                 {contiunue? "Continuar" : "Guardar Juego"}
               </Button>
         } 
        </div> 
    </div>
    )
}

export default SaveGame
