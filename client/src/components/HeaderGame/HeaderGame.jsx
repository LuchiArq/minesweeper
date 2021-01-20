import React,{useState,useEffect} from 'react'

import './headerGame.css'
import Timer from './Timer'

const HeaderGame = () =>{
console.log("renderizado !!! ")
   return(
       <div className="headerGame">
        <div>
            <Timer/>
            
         </div>
       </div>
   )
}

export default HeaderGame