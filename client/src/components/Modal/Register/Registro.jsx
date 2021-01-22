import React,{useState, useEffect} from 'react'
import './registro.css'
const Registro = () =>{
    return(
        <div className="registro">
            <div className="registro-texto">
                <p className="home-text">Si desea guardar sus partidas debera registrarse.</p>
            </div>
            <div className="registro-form">
            
                <input className="registro-form-input" placeholder="Usuario"/>
                <input className="registro-form-input" placeholder="Contraseña"/>
            
            </div>
            <div className="registro-submit">
                <button>Registrarse</button>
            </div>
        </div>
    )
}
export default Registro