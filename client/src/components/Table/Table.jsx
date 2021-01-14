import React,{useState,useEffect} from 'react'
import Cell from '../Cell/Cell'
import createTable from '../../helpers/createTable.js'
import showCell from '../../helpers/showCell.js'
import {plantFlag,getCellFlag} from '../../helpers/flag.js'
import {countCellsHidden,showAll} from '../../helpers/countCellsHidden.js'
import './table.css'



const Table =() => {

const [game,setgame] = useState(createTable(5,5,3))

console.log(game.minesLocation)

const getFlag = (event,x,y)=>{
    event.preventDefault()
    let newTable = plantFlag(game.matrix,y,x)
    setgame({...game,
        matrix:newTable})

    let checkFlagArray = getCellFlag(game)
    
    console.log("banderas : ",checkFlagArray," Minas: ",game.minesLocation)
    
    if(JSON.stringify(checkFlagArray)==JSON.stringify(game.minesLocation)){
        alert(" you win")
        setgame({...game,
            matrix:showAll(game)})
        }
    console.log(game.matrix[x][y])
}


    
const UpdateGame = (x,y) =>{

    let newTable = showCell(game,y,x)
    if(newTable.lose){
        alert(' you lose')
    }
    setgame({...game,
        matrix:newTable.table}
        )
        
    if(countCellsHidden(game).length == game.minesLocation.length){
        alert(" you win")
        setgame({...game,
            matrix:showAll(game)})
        }

    } 

    return (
        <div>
            <h1>Table</h1>
            <div>
            
            {
                game.matrix.length ?
                game.matrix.map((filas,i) =>{
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
        </div>
    )
}

export default Table