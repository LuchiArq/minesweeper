
import React,{useState} from 'react'
import Button from '../../Button/Button'
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import {newGame} from '../../../redux/actions/gameActions'

import './createGame.css'

const CreateGame  = () =>{

const [difficulty,setDifficulty] = useState({difficulty:"Medio",columns:14,row:14,mines:40})
const dispatch = useDispatch()

function changeDifficulty(event){
    switch(event.target.value){
        case 'Facil':{
           return setDifficulty({difficulty:"Facil",columns:8,row:8,mines:10})
        }
        case 'Medio':{
           return setDifficulty({difficulty:"Medio",columns:14,row:14,mines:40})
        }
        case 'Dificil':{
           return setDifficulty({difficulty:"Dificil",columns:30,row:15,mines:90})
        }
        case 'Personalizado':{
           return setDifficulty({...difficulty, difficulty:"Personalizado"})
        }
    }
}

function handleChange(event){
    setDifficulty(
       { ...difficulty,
        [event.target.name]: event.target.value,
    })
}


function createGame(){
    dispatch(newGame(difficulty))
}
return(
        
            <div className="CreateGame">
                <h2 className="CreateGame-title">Elija una dificultad</h2>
                <div className="CreateGame-difficulty">
                    <select className="CreateGame-difficulty-dropdown" name="cars" id="cars" onChange={changeDifficulty}>
                        <option value="Facil">Facil</option>
                        <option selected value="Medio">Medio</option>
                        <option value="Dificil">Dificil</option>
                        <option value="Personalizado">Personalizado</option>
                    </select>
                </div>
                <form className="CreateGame-form">
                    <label className="CreateGame-form-label" htmlFor="row">
                        Filas
                        {difficulty.difficulty==="Personalizado"?
                        <input className="CreateGame-form-input" id="row" name="row" value={difficulty.row} onChange={difficulty.difficulty==='Personalizado'?handleChange:null}/>
                        :
                        <input className="CreateGame-form-input" disabled id="row" name="row"value={difficulty.row}/>
                        }
                    </label>
                    <label  className="CreateGame-form-label" htmlFor="columns">
                        Columnas
                        {difficulty.difficulty==="Personalizado"?
                        <input className="CreateGame-form-input" id="columns" name="columns"value={difficulty.columns} onChange={difficulty.difficulty==='Personalizado'?handleChange:null}/>
                        :
                        <input className="CreateGame-form-input" disabled id="columns" name="columns"value={difficulty.columns}/>
                        }
                    </label>
                    <label  className="CreateGame-form-label" htmlFor="mines">
                        Minas
                        <input className="CreateGame-form-input" 
                                name="mines"
                                disabled 
                                id="mines" 
                                value={difficulty.difficulty==="Personalizado"?Math.ceil(difficulty.columns*difficulty.row*0.2):difficulty.mines}/>
                    </label>
                    <div className="CreateGame-button">
                        <Link to="/game" className="linkCreateGame">
                            <Button buttonType="primary" onClick={createGame}>
                                    Empezar !
                            </Button>
                        </Link>
                    </div>
                </form>  
            </div>
)}

export default CreateGame
