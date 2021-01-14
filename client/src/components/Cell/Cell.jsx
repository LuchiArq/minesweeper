import React from 'react'
import './cell.css'
const Cell = ({flag,UpdateGame,celda})=>{
    return (
        <div className="celda" 
            onClick={()=>{
                if(celda.flag){
                    return
                }
                console.log(celda)
                UpdateGame(celda.x,celda.y)
            }}
            onContextMenu={(e)=>{
                flag(e,celda.x,celda.y)
            }}
        >
            { celda.flag===true ? "F": celda.show===true ? celda.value:  ""}
        </div>
    )
}

export default Cell