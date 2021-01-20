import React,{useState,useEffect} from 'react'
import './timer.css'
import { ReactComponent as Reloj } from '../../assets/reloj.svg';
import { useDispatch, useSelector } from 'react-redux';

const Timer = ({time,play})=>{

const [seconds, setSeconds] = useState(0)
    
const {pause,state} = useSelector((store)=>store.gameReducer)

let interval=null
   
useEffect(() => {
    console.log(state) 
    if(!pause || state=="in progress"){
        interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 1000);
    }
    return () => clearInterval(interval);
    },[pause,state]);
    
return(
    <div className="time">
        <h1>{seconds===0?"000":((seconds/100).toFixed(2)).toString().replace(".","")}</h1>
        <Reloj className="time-reloj"/>
    </div>
)

}

export default Timer