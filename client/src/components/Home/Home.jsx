import React,{useState,useEffect} from 'react'
import CreateGame from '../Modal/CreateGame/CreateGame'
import Register from '../Modal/Register/Register'
import Rules from '../Modal/Rules/Rules'
import Button from '../Button/Button'
import Modal from '../Modal/Modal'
import Login from '../Modal/Login/Login'
import './home.css'

const Home = () =>{

const [modalCreateGame,setModalCreateGame]= useState(false)
const [modalRegister,setModalRegister]= useState(false)
const [modalLogin,setModalLogin]= useState(false)
const [modalRules,setModalRules]= useState(false)

function OpenModalRules(){
    setModalRules(!modalRules)
}

function OpenModalRegister(){
    setModalRegister(!modalRegister)
}

function OpenModalGame(){
    setModalCreateGame(!modalCreateGame)
}
function OpenModalLogin(){
    setModalLogin(!modalLogin)
}
    return(
        <div className="home">
            <Modal closeModal={OpenModalGame} active={modalCreateGame}>
                <CreateGame/>
            </Modal>
            <Modal closeModal={OpenModalRegister} active={modalRegister}> 
                <Register/>
            </Modal>
            <Modal closeModal={OpenModalLogin} active={modalLogin}> 
                <Login/>
            </Modal>
            <Modal closeModal={OpenModalRules} active={modalRules}> 
                <Rules closeModal={OpenModalRules}/>
            </Modal>
            <div className="home-container">
                <div className="home-container-buttonGroup">
                    <Button onClick={OpenModalRegister} buttonType='register' children='Registrarse'/>
                    <Button onClick={OpenModalLogin} buttonType='login' children='Iniciar sesion'/>
                </div>
                <div className="home-container-welcome">
                    <p className="home-title">Buscaminas</p>
                    <p className="home-text">Buscaminas es un videojuego para un jugador.</p>
                    <p className="home-text"> El objetivo del juego es despejar un campo de minas sin detonar ninguna.</p> 
                    <p className="home-text"> Buena Suerte!</p>
                    <span className="home-button-rules" >
                        <Button onClick={OpenModalRules} buttonType='register' children='Reglas'/> 
                    </span>
                </div>
                <div className="home-button-jugar">
                    <Button onClick={OpenModalGame} buttonType='primary'>Jugar</Button>
                </div>
                <div className="home-text-aclaracion">
                    <p>Registrese para poder guardar sus partidas, sino puede continuar como usuario invitado</p>
                </div>
            </div>
        </div>
    )
}
export default Home