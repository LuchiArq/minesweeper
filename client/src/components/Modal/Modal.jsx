
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
        pause && pause()
        closeModal()
        },300)
}

return ReactDom.createPortal(
    <div>
        <div tabIndex={-1} 
            className={`fondo openFondo ${closeModalBackground ? closeModalBackground :"" }`} 
            onClick={close}>
        </div>
        <div  className="modal-container">
            <div  className={`modal slideIn ${closeModalContent ? closeModalContent : ""}`}>
                {children}
            </div>
        </div>
    </div>,
     
     document.getElementById('root')
)}

export default Modal

Modal.defaultProps = {
    active: false
}