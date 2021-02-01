import React,{useState} from 'react'
import {loginUser} from '../../../redux/actions/userActions'
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
import Button from '../../Button/Button'
import './login.css'

const Login = () =>{
const dispatch = useDispatch()
const [login, setLogin] = useState({
    name:"",
    password:""
})

const handlerOnchange=(e)=>{
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    })
  }
    
    return(
        <div className="login">
            <div className="login-texto">
                <h2 className="modal-title-small">Ingresar</h2>
            </div>
            <form className="modal-body login-form" onSubmit={
                (e=>{
                    e.preventDefault();
                    dispatch(loginUser(login))
                })
            }>
                <label className="login-form-label" htmlFor="user">Usuario
                    <input onChange={handlerOnchange} required name="name" className="register-form-input" placeholder="Usuario"/>
                </label>

                <label className="login-form-label" htmlFor="password">Contraseña
                    <input onChange={handlerOnchange} required type="password" name="password" className="login-form-input" placeholder="*******"/>
                </label>
                <Link to="/profile" className="linkLogin">
                    <button type="submit" className="login-submit">
                        <Button >Iniciar sesion</Button>
                    </button>    
                </Link>
            </form>
        </div>
    )
}
export default Login