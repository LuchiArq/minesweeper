import React from 'react'
import {Link} from 'react-router-dom'
import Button from '../../Button/Button'
import FlagAndTime from '../FlagAndTime.jsx'
import './finishGame.css'

const FinishGame = ({newGame,title,textButton}) => {
    return(
        <div className="finishContainer">
            <h2 className="modal-title-big finish-title" >{title}</h2>
            <div className="finish-body">
                <FlagAndTime/>
            </div>
            <div className="finish-button">
                <Link to='/'>
                    <Button onClick={newGame} buttonType="login">Salir</Button>
                </Link>
                <Button onClick={newGame} buttonType="primary">{textButton}</Button>
            </div>
        </div>
    )
}
export default FinishGame