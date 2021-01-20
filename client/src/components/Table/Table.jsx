import React,{useState,useEffect} from 'react'
import Cell from '../Cell/Cell'
import createTable from '../../helpers/createTable.js'
import showCell from '../../helpers/showCell.js'
import {plantFlag,getCellFlag} from '../../helpers/flag.js'
import {countCellsHidden,showAll} from '../../helpers/countCellsHidden.js'
import './table.css'



const Table =() => {

const [game,setgame] = useState(createTable(10,10,20))

const getFlag = (event,x,y)=>{
    event.preventDefault()
    let newTable = plantFlag(game.table,y,x)
    setgame({...game,
        table:newTable})
    let checkFlagArray = getCellFlag(game)
    
    if(JSON.stringify(checkFlagArray)===JSON.stringify(game.minesLocation)){
        alert(" you win")
        setgame({...game,
            table:showAll(game)})
        }
    }
    
    const UpdateGame = (x,y) =>{
        
        let newTable = showCell(game,y,x)
        if(newTable.lose){
            alert(' you lose')
        }
        setgame({...game,
            table:newTable.table}
            )
            
            if(countCellsHidden(game).length === game.minesLocation.length){
                alert(" you win")
                setgame({...game,
                    table:showAll(game)})
                }

    } 

    return (
            <div>
            
            {
                game.table.length ?
                game.table.map((filas,i) =>{
                    return (
                    <div className="tabla" key={i}> 
                   {     filas.map((celda,j)=>{
                        return <Cell  
                                UpdateGame={UpdateGame}
                                flag={getFlag}
                                celda={celda} 
                                key={j}/>
                    })}
                    </div> )
            })
                :null
            }
            </div>

    )
}

export default Table