
import React from 'react'
import ReactDom from 'react-dom'


import './modal.css'

const Modal  = ({active,closeModal,children}) =>{

if(!active){
    return null   
}

return ReactDom.createPortal(
    <>
        
        <div tabIndex={-1} className="fondo" onClick={closeModal}></div>
            <div  className="modal">
                {children}
            </div>
    </>,
     
     document.getElementById('portal')
)}

export default Modal

Modal.defaultProps = {
    active: false
}