import React from 'react'
import { ReactComponent as Flag } from '../../assets/flag.svg';
import { useDispatch, useSelector } from 'react-redux';
import {start,plantFlag} from '../../redux/actions/gameActions'
import './cell.css'

const Cell = ({flag,UpdateGame,celda})=>{
const dispatch = useDispatch()
const stateGame= useSelector((store)=>store.gameReducer.state)
return (
    <div className={`celda ${celda.show ? 'celda-revealed':""}`} 
    onClick={()=>{
            if(celda.flag){return}
            if(!stateGame){
                dispatch(start())
            }
            UpdateGame(celda.x,celda.y)
            console.log(celda)

         }}
    onContextMenu={(e)=>{
            flag(e,celda.x,celda.y)
            dispatch(plantFlag({x:celda.x,y:celda.y}))
        }}>
            
        { celda.flag===true ? 
            <Flag/>: 
            celda.show===true && celda.value!==0? 
                celda.value:  ""}
    </div>
    )
}

export default Cell