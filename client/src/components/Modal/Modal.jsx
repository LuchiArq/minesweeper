
import React,{useState} from 'react'
import ReactDom from 'react-dom'


import './modal.css'

const Modal  = ({active,closeModal,children,pause}) =>{

const [closeModalBackground,setCloseBackground] = useState('')
const [closeModalContent,setCloseModalContent] = useState('')

if(!active){
    return null   
}

function close(){
    setCloseBackground("CloseModalFondo")
    setCloseModalContent("CloseModal")
    setTimeout(()=>{
        setCloseBackground("")
        setCloseModalContent("")
        closeModal()
        },300)
}

return ReactDom.createPortal(
    <div>
        
        <div tabIndex={-1} className={`fondo openFondo ${closeModalBackground ? closeModalBackground :"" }`} onClick={()=>{
            close()
            pause && pause()}}
        ></div>
        <div  className="modal-container">
            <div  className={`modal slideIn ${closeModalContent ? closeModalContent : ""}`}>
                {children}
            </div>
        </div>
    </div>,
     
     document.getElementById('portal')
)}

export default Modal

Modal.defaultProps = {
    active: false
}