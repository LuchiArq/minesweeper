import React,{useState, useEffect} from 'react'
import Button from '../../Button/Button'
import './registro.css'
const Register = () =>{
    return(
        <div className="register">
            <div className="register-texto">
                <h2 className="modal-title-small">Registro</h2>
            </div>
            <form className="modal-body register-form" onSubmit={
                (e=>{
                    e.preventDefault();
                })
            }>
                <label className="register-form-label" htmlFor="user">Usuario
                    <input required name="user" className="register-form-input" placeholder="Usuario"/>
                </label>

                <label className="register-form-label" htmlFor="password">Contraseña
                    <input required type="password" name="password" className="register-form-input" placeholder="*******"/>
                </label>

                <label className="register-form-label" htmlFor="password">Repetir Contraseña
                    <input required type="password" name="password" className="register-form-input" placeholder="*******"/>
                </label>
                
                <button type="submit" className="register-submit">
                    <Button >Registrarse</Button>
                </button>
            </form>
        </div>
    )
}
export default Register