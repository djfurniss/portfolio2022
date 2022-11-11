import React from "react";
import { useNavigate } from "react-router-dom";

// TODO: use an icon

export default function HomeButtom(){
    const navigate = useNavigate();
    
    return (
        <div 
            onClick={()=>navigate("/")}
            style={{
                position: 'absolute',
                top: 30,
                left: 30,
                width: '30px',
                height: '30px',
                backgroundColor: 'black',
            }}></div>
    )
}