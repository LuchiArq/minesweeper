import React,{useState} from 'react'
import './tabsProfile.css';
import Button from '../Button/Button'

const TabsProfile  = ({children}) =>{
const [activeTab,setActiveTab] = useState(children[0].props.label)

const HandleClick=(act)=>{
    setActiveTab(act)
}


    return(
        <>
            <ul className="tabsProfile">
                {children.map(list=>{
                   const label= list.props.label
                    return(
                        <Button onClick={()=>{HandleClick(label)}} buttonType="register">{label}</Button>
                    )
                })}
            </ul>
                {children.map(child=>{
                    console.log(child.props.label)
                    if(activeTab===child.props.label)
                    return(
                    <div className="box-container-center">
                        {child.props.children}
                    </div>
                    )
                })}
        </>
    )
}

export default TabsProfile