import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { AiOutlineHome } from 'react-icons/ai';

export default function HomeButton(){
    const navigate = useNavigate();
    
    return (
        <motion.div 
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
                borderRadius: '1vw',
                cursor: 'pointer'
            }}
            initial={{opacity: 0.2, scale: .3}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: .5}}
            >
                <AiOutlineHome style={{color: 'black'}}/>
            </motion.div>
    )
}