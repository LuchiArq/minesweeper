import React,{useState, useEffect} from 'react'
import Button from '../../Button/Button'
import { useHistory } from "react-router-dom";
import { useDispatch,useSelector} from 'react-redux';
import {register,SetError} from '../../../redux/actions/userActions'
import './registro.css'

const Register = ({closeModal}) =>{
    const dispatch = useDispatch()
    const history = useHistory()
    const [welcome,setWelcome] = useState(false)
    const {error,loading} = useSelector(store=>store.userReducer)
    const [dataRegister, setDataRegister] = useState({
        name:"",
        password:"",
        repeatPassword:""
    })

    useEffect(()=>{
        dispatch(SetError(""))
    },[])

    function successRegister(){
        setWelcome(!welcome)
        setTimeout(() => {
            history.push("/profile")
            closeModal()
        }, 2000);
    }


    const handlerOnchange=(e)=>{
        setDataRegister({
            ...dataRegister,
            [e.target.name]: e.target.value
        })
    }

    const handlerOnsubmite = (e) =>{
        e.preventDefault();
        if(dataRegister.password===dataRegister.repeatPassword){
                dispatch(register({name:dataRegister.name,password:dataRegister.password}))
        }else{
            alert("las contraseñas no coinciden")
        }
    }

        return(
            <div className="register">
                <div className="register-texto">
                    <h2 className="modal-title-small">Registro</h2>
                </div>
                <form className="modal-body register-form" onSubmit={
                    (e=>{
                        handlerOnsubmite(e)
                        
                    })
                }>
                    <label className="register-form-label" htmlFor="user">Usuario
                        <input onChange={handlerOnchange} required name="name" className="register-form-input" placeholder="Usuario"/>
                    </label>

                    <label className="register-form-label" htmlFor="password">Contraseña
                        <input onChange={handlerOnchange} required type="password" name="password" className="register-form-input" placeholder="*******"/>
                    </label>

                    <label className="register-form-label" htmlFor="password">Repetir Contraseña
                        <input onChange={handlerOnchange} required type="password" name="repeatPassword" className="register-form-input" placeholder="*******"/>
                    </label>
                    
                    <div type="submit" className="register-submit">
                        <Button buttonType={"primary"}>Registrarse</Button>
                        {
                            loading ? <h2>Cargando...</h2> : <small className="message-error" >{error}</small>    
                        }
                    </div>
                </form>
            </div>
        )
}
export default Register