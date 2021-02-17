import React,{useState,useEffect} from 'react'
import {login , SetError} from '../../../redux/actions/userActions'
import { useDispatch,useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom'
import Button from '../../Button/Button'
import './login.css'

const Login = () =>{
const dispatch = useDispatch()
const history = useHistory();
const {error,loading,token} = useSelector(store=>store.userReducer)
const [dataLogin, setDataLogin] = useState({
    name:"",
    password:""
})

useEffect(()=>{
    dispatch(SetError(""))
    token && history.push("/profile")
},[token])

const handlerOnchange=(e)=>{
    setDataLogin({
      ...dataLogin,
      [e.target.name]: e.target.value
    })
  }
const handlerOnsubmite = (e) =>{
    e.preventDefault();
    dispatch(login(dataLogin))
}
    
    return(
        <div className="login">
            <div className="login-texto">
                <h2 className="modal-title-small">Ingresar</h2>
            </div>
            <form className="modal-body login-form" onSubmit={handlerOnsubmite}>
                <label className="login-form-label" htmlFor="user">Usuario
                    <input onChange={handlerOnchange} required name="name" className="register-form-input" placeholder="Usuario"/>
                </label>

                <label className="login-form-label" htmlFor="password">Contraseña
                    <input onChange={handlerOnchange} required type="password" name="password" className="login-form-input" placeholder="*******"/>
                </label>
                
                <div className="login-submit">
                    <Button buttonType={"primary"}>Iniciar sesion</Button>
                    
                    {
                        
                        loading ? <h2>Cargando...</h2> : error 
                    }
                </div>    
                
            </form>
        </div>
    )
}
export default Login