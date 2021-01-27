import React from 'react'
import { ReactComponent as Flag } from '../../assets/flag.svg';
import './headerGame.css'
import { useDispatch, useSelector } from 'react-redux';
import Timer from './Timer'



const HeaderGame = () =>{
const {flag,difficulty} = useSelector((store)=>store.gameReducer)
const {mines} = useSelector((store)=>store.gameReducer.newGame)

   return(
       <div className="headerGame">
            <button>
                {difficulty}
            </button>
           <div className="headerGame-TimeAndFlag">
                <Timer/>
                <div className="headerGame-Flag">
                    <h2>{mines-flag.length}</h2>
                    <Flag/>
                </div>
           </div>
       </div>
   )
}

export default HeaderGame