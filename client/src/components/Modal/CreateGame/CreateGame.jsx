import React,{useState} from 'react'
import Button from '../../Button/Button'
import { useDispatch} from 'react-redux';
import {Link,useHistory} from 'react-router-dom'
import {SaveStateLocalStorage} from '../../../helpers/localStorage.js'
import {newGame} from '../../../redux/actions/gameActions'
import './createGame.css'

const CreateGame  = () =>{

const defaultGame={difficulty:"Medio",columns:14,row:14,mines:40}

const [game,setGame] = useState(defaultGame)
const [error,setError] = useState()
const dispatch = useDispatch()
const history = useHistory();

function validation(target){
 
    let error={}
    switch(target.name){
        case "row":
            if(target.value<1){
                error[target.name] = `Las filas deben ser mayor a 1`
            }
            if(target.value>100){
                error[target.name] = `Las filas deben ser menor a 100`
            }
            return error
        case "column":
            if(target.value<1){
                error[target.name] = `Las columnas deben ser mayor a 1`
            }
            if(target.value>100){
                error[target.name] = `Las columnas deben ser menor a 100`
            }
            return error
        case "mines":
            let minMines= Math.ceil(game.columns*game.row*0.1)
            let maxMines= Math.ceil(game.columns*game.row)

            if(target.value<minMines){
                error[target.name] = `La cantidad minima de minas para la dimension de su tablero es ${minMines}`
            }
            if(target.value>maxMines){
                error[target.name] = `La cantidad maxima de minas para la dimension de su tablero es ${maxMines}`
            }
            return error
    }
}

function changeDifficulty(event){
    switch(event.target.value){
        case 'Facil':{
           return setGame({difficulty:"Facil",columns:8,row:8,mines:12})
        }
        case 'Medio':{
           return setGame({difficulty:"Medio",columns:14,row:14,mines:40})
        }
        case 'Dificil':{
           return setGame({difficulty:"Dificil",columns:30,row:15,mines:90})
        }
        case 'Personalizado':{
           return setGame({...game, difficulty:"Personalizado"})
        }
    }
}
function handleChange(event){
    setError(validation(event.target))
    setGame(
       { ...game,
        [event.target.name]: event.target.value,
    })
}
function createGame(event){
    if(error)return
    event.preventDefault()
    SaveStateLocalStorage("game",game)
    dispatch(newGame(game))
    history.push("/game")
}

return(
            <div className=" CreateGame">
                <h2 className="modal-title-small CreateGame-title">Elija una dificultad</h2>
                <div className="CreateGame-difficulty">
                    <select className="CreateGame-difficulty-dropdown" name="cars" id="cars" onChange={changeDifficulty}>
                        <option value="Facil">Facil</option>
                        <option selected value="Medio">Medio</option>
                        <option value="Dificil">Dificil</option>
                        <option value="Personalizado">Personalizado</option>
                    </select>
                </div>
                <form className="modal-body CreateGame-form" onSubmit={(event)=>createGame(event)}>
                    <label className="CreateGame-form-label">
                        Filas
                        {game.difficulty==="Personalizado"?
                        <input  
                            className="CreateGame-form-input" 
                            min={1}  
                            name="row"
                            value={game.row} 
                            type="number"  
                            onChange={handleChange}/>
                        :
                        <input 
                            className="CreateGame-form-input"  
                            disabled  
                            name="row"
                            value={game.row}/>
                        }
                    </label>
                        {error && error.row && <p className="message-error">{error.row}</p>}
                    <label  className="CreateGame-form-label">
                        Columnas
                        {game.difficulty==="Personalizado"?
                        <input  
                            className="CreateGame-form-input"  
                            min={1}  
                            name="columns"
                            value={game.columns} 
                            type="number"  
                            onChange={handleChange}/>
                        :
                        <input  
                            className="CreateGame-form-input"  
                            disabled  
                            name="columns"
                            value={game.columns}/>
                        }
                    </label>
                        {error && error.columns && <p className="message-error">{error.columns}</p>}
                    <label  className="CreateGame-form-label">
                        Minas
                        { game.difficulty==="Personalizado"?
                            <input className="CreateGame-form-input" 
                            name="mines"
                            onChange={handleChange}
                            value={game.mines}/>
                            :
                            <input className="CreateGame-form-input" 
                            name="mines"
                            disabled 
                            disabled
                            value={game.mines}/>
                        }
                    </label>
                        {error && error.mines && <p className="message-error" >{error.mines}</p>}
                    <div className="CreateGame-button">
                        <Button buttonType="primary">Comenzar !</Button>
                    </div>
                </form>  
            </div>
)}

export default CreateGame
