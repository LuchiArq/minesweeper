import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './profile.css';
import Button from '../Button/Button';
import Modal from '../Modal/Modal'
import CreateGame from '../Modal/CreateGame/CreateGame'
import { ReactComponent as IconProfile } from '../../assets/iconProfile.svg';
import { useDispatch, useSelector } from 'react-redux';


import SavedGames from '../SavedGames/SavedGames'
const Profile  = () =>{
    const {token,user,savedGames} = useSelector((store) => store.userReducer)

    const [modalCreateGame,setModalCreateGame]= useState(false)
    function OpenModalGame(){
        setModalCreateGame(!modalCreateGame)
    }

    return(
        <div className="profile">
            <Modal closeModal={OpenModalGame} active={modalCreateGame}>
                <CreateGame/>
            </Modal>
            <div className="profile-container">
                <div className="profile-container-header">
                    <Link to="/">
                        <Button buttonType="login">Salir</Button>
                    </Link>
                    <div className="profile-name">
                        <h2>{user}</h2>
                        <IconProfile className="iconProfile"/>
                    </div>
                </div>
                <div className="profile-container-savedGame">
                    <SavedGames/>
                </div>
                <div className="profile-button-jugar">
                    <Button onClick={OpenModalGame} buttonType="primary">Jugar</Button>
                </div>
            </div>
        </div>
    )
}

export default Profile