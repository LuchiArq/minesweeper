import React,{useState,useEffect} from 'react'
import Table from '../Table/Table'
import HeaderGame from '../HeaderGame/HeaderGame'
import './game.css'

import createTable from '../../helpers/createTable.js'
import showCell from '../../helpers/showCell.js'
import {plantFlag,getCellFlag} from '../../helpers/flag.js'
import {countCellsHidden,showAll} from '../../helpers/countCellsHidden.js'

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