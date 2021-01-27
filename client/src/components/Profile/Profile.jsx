import React from 'react'
import './profile.css'
import Button from '../Button/Button'
const Profile  = () =>{
    return(
        <div className="profile">
            <div className="profile-container">
                <Button buttonType="login">Salir</Button>
                <h2>mi perfil</h2>
            </div>
        </div>
    )
}

export default Profile