import React from 'react'
import Button from '../../Button/Button'
import { ReactComponent as SaveIcon } from '../../../assets/saveIcon.svg';
import FlagAndTime from '../FlagAndTime.jsx'
import './pause.css'


const Pause = ({closeModal}) =>{
    return(
        <div className="pause">
            <SaveIcon className="pause-saveIcon pause-icon"/>
            <h2 className="modal-title-big pause-title" >Pausa</h2>
            <div className="pause-data">
                <FlagAndTime/>
            </div>
            <div className="pause-button">    
              <Button onClick={closeModal} buttonType="primary">Continuar</Button>
            </div> 
        </div>
    )
}
export default Pause