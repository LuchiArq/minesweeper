import React from 'react'
import Table from '../Table/Table'
import HeaderGame from '../HeaderGame/HeaderGame'
import './game.css'

const Game  = () =>{


return(
    
    <div className="mainContainer">
        <div className="game-container">
            <div className="game-container-headerGame">
                <HeaderGame />
            </div>
            <div className="game-container-table">
                <Table/>
            </div>
        </div>
    </div>

)

}

export default Game