import React,{useState,useEffect} from 'react'
import './timer.css'
import { ReactComponent as Reloj } from '../../assets/reloj.svg';
import { useDispatch, useSelector } from 'react-redux';
import {saveTime,setStateGame} from '../../redux/actions/gameActions'

const Timer = ()=>{

const [seconds, setSeconds] = useState(0.5)
    
const {state,time} = useSelector((store)=>store.gameReducer)

const dispatch = useDispatch()
let interval=null
   
function saveTimeGame(seconds){
    dispatch(saveTime(seconds))
}

useEffect(() => {
    if(state==="") return setSeconds(0)
    if(state==="in progress"){
        interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
           
        }, 1000);
    }
    if(state==="winn"||state==="loss"){
        return saveTimeGame(seconds)
    }
    saveTimeGame(seconds)
    return () => clearInterval(interval);
    },[state]);
    
return(
    <div className="time">
        <h2>{seconds===0?"000":((seconds/100).toFixed(2)).toString().replace(".","")}</h2>
        <Reloj className="time-reloj"/>
    </div>
)

}

export default Timer