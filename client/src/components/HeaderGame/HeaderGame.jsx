import React,{useState} from 'react'
import { ReactComponent as Flag } from '../../assets/flag.svg';
import { ReactComponent as SaveIcon } from '../../assets/saveIcon.svg';
import { ReactComponent as Back } from '../../assets/back.svg';
import './headerGame.css'
import {Link} from 'react-router-dom'
import { useDispatch,useSelector} from 'react-redux';
import Timer from './Timer'
import Button from '../Button/Button'
import Modal from '../Modal/Modal'
import Pause from '../Modal/Pause/Pause'
import {setStateGame} from  '../../redux/actions/gameActions'



const HeaderGame = ({flag,mines,again}) =>{

const dispatch = useDispatch()

const [modalPause,setModalPause]= useState(false)
const {state} = useSelector(store=> store.gameReducer)
function OpenModalPause(){
    setModalPause(!modalPause)
}

function pause(){
    !state && setModalPause(!modalPause)

     if(state==="in progress"){
         dispatch(setStateGame("pause"))
    }
    if(state==="pause"){
        dispatch(setStateGame("in progress"))
   }
   setModalPause(!modalPause)
}
   return(

       <div className="headerGame">
           <Link className="headerGame-link-back" to="/">
            <Back className="headerGame-icon-back"/>
           </Link>
            <Modal closeModal={OpenModalPause} pause={pause} active={modalPause}>
                <Pause flag={mines-flag.length} closeModal={pause}/>
            </Modal>
            {
                state==="winn"||state==="loss"?
                <span className="headerGame-pause">
                    <Button onClick={again} buttonType="primary">Reintentar</Button>
                </span>
                :
                <span className="headerGame-pause">
                    <Button onClick={pause} buttonType="primary">Pausa</Button>
                </span>
            }
           <div className="headerGame-TimeAndFlag">
                <Timer/>
                <div className="headerGame-Flag">
                    <h2>{mines-flag.length}</h2><Flag className="headerGame-icon"/>
                </div>
           </div>
           <div className="headerGame-icon-container">
                <SaveIcon className="headerGame-icon" />
           </div>
       </div>
   )
}

export default HeaderGame