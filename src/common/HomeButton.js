import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineHome } from 'react-icons/ai'

// TODO: use an icon

export default function HomeButtom(){
    const navigate = useNavigate();
    
    return (
        <div 
            onClick={()=>navigate("/")}
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                top: 30,
                left: 30,
                width: '30px',
                height: '30px',
                border: '1px black solid',
                borderRadius: '1vw'
            }}>
                <AiOutlineHome style={{color: 'black'}}/>
            </div>
    )
}