import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import Button from '../../Button/Button'
import FlagAndTime from '../FlagAndTime.jsx'
import {useSelector,useDispatch} from 'react-redux'
import { ReactComponent as Cheers } from '../../../assets/cheers.svg';
import './finishGame.css'
import { SaveGame } from '../../../redux/actions/gameActions'
import {Record} from '../../../redux/actions/userActions'

const FinishGame = ({newGame,title,textButton}) => {
    const dispatch = useDispatch()
    const {records} = useSelector(state => state.userReducer)
    const {difficulty,time,state} = useSelector(state => state.gameReducer)
    const [nr,setNr] = useState(null)
    const currentRecord = records[difficulty] && records[difficulty].score

    useEffect(() => {
        state==="win" && SaveNewRecord()
    }, [time])


    const setNewRecod = () =>{
        let newRecord={
            difficulty:difficulty,
            score:time,
            state:state
        }
        setNr( <p className="newRecord">
                        <Cheers className="newRecord-icon"/>
                            Nuevo Record
                        <Cheers className="newRecord-icon"/>
                    </p>)

            dispatch(SaveGame(newRecord))
            dispatch(Record(newRecord))
    }

    const SaveNewRecord=()=>{

        if(difficulty==="Personalizado")return
        if(!currentRecord && time!=0){
            setNewRecod()   
        }
        if( currentRecord>time && time!=0){
            setNewRecod()
        }

    }

    return(
        <div className="finishContainer">
            <div className="finish-title">
                <h2 className="modal-title-big finish-title" >{title}</h2>
                 { nr ? nr:null}
            </div>
            <div className="finish-body">
                <FlagAndTime/>
            </div>
            <div className="finish-button">
                <Link to='/'>
                    <Button onClick={newGame} buttonType="login">Salir</Button>
                </Link>
                <Button onClick={newGame} buttonType="primary">{textButton}</Button>
            </div>
        </div>
    )
}
export default FinishGame