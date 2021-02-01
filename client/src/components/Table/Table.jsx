import React,{useState,useEffect} from 'react'
import HeaderGame from '../HeaderGame/HeaderGame'
import Cell from '../Cell/Cell'
import showCell from '../../helpers/showCell.js'
import {plantFlag} from '../../helpers/flag.js'
import {countCellsHidden} from '../../helpers/countCellsHidden.js'
import {LoadStateLocalStorage} from '../../helpers/localStorage.js'
import createTable from '../../helpers/createTable.js'
import {setStateGame,newGame,saveTime} from '../../redux/actions/gameActions'
import { useSelector,useDispatch } from 'react-redux';
import FinishGame from  '../Modal/FinishGame/FinishGame'
import Modal from '../Modal/Modal'
import './table.css'

const Table =() => {
const dispatch = useDispatch()
//console.log("Tamaño de pantalla",window.screen)

const {flag,state} = useSelector((store)=>store.gameReducer) 
const {row,columns,mines}=LoadStateLocalStorage("game")
const [game,setgame] = useState()
const [modalFinishGame, setModaFinishGame] = useState(false)

useEffect(()=>{
    dispatch(newGame(LoadStateLocalStorage("game")))
   !game && setgame(createTable(row,columns,mines)) 
},[])   


const OpenModalFinishGame =() =>{
    setModaFinishGame(!modalFinishGame)
}

const SaveGame =(table)=>{
    setgame({...game,
        table:table})
}

const firstClick = (x,y)=>{
    let newgame = createTable(row,columns,mines)
    if(newgame.table[y][x].value==="x"){
       return firstClick(x,y)
   }
   let newtable=showCell(newgame,y,x)
   dispatch(setStateGame("in progress"))
   setgame({...game,
            table:newtable.table,
            minesLocation:newgame.minesLocation})
    
   return 
}

const again=()=>{
    dispatch(saveTime(0))
    dispatch(setStateGame(""))
    dispatch(newGame(LoadStateLocalStorage("game")))
    modalFinishGame && setModaFinishGame(!modalFinishGame)
    setgame(createTable(row,columns,mines))
}

const getFlag = (event,x,y)=>{
    event.preventDefault()
    let newTable = plantFlag(game.table,y,x)
    SaveGame(newTable)
    }

const UpdateGame = (x,y) =>{
    let newTable = showCell(game,y,x)

    if(newTable.lose){
        dispatch(setStateGame("loss"))
        OpenModalFinishGame()
        return
    }
    
    SaveGame(newTable.table)
        
    if(countCellsHidden(game).length === game.minesLocation.length){
        dispatch(setStateGame("winn"))
        OpenModalFinishGame()
        return
    }
} 
    return (

    <div className="mainContainerGame slideIn">
        <Modal closeModal={OpenModalFinishGame} active={modalFinishGame}>
            <FinishGame 
                modalType={state} 
                title={state==="winn"? "Ganaste":"Perdiste"} 
                textButton={state==="winn"? "Jugar de Nuevo":"Reintentar"}
                newGame={again}
                />
        </Modal> 
        <div className="game-container">
            <div className="game-container-headerGame">
                <HeaderGame again={again} flag={flag} mines={mines} />
            </div>
            <div className="game-container-table">
                {     
                  game && game.table.length ?
                    game.table.map((filas,i) =>{
                        return (
                        <div className="table-game " key={i}> 
                    {     filas.map((celda,j)=>{
                            return <Cell  
                                    UpdateGame={!state?firstClick:UpdateGame}
                                    flag={getFlag}
                                    celda={celda} 
                                    key={j}/>
                        })}
                        </div> )
                })
                    :<div></div>
                }
               
            </div>
        </div>
    </div>

    )
}

export default Table