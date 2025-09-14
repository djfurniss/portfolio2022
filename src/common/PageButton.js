import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function PageButton({buttonText, pagePath}){
    const navigate = useNavigate();
    const [transToPage, setTransToPage] = useState(false)

    return(
        <motion.a
        whileHover={{rotate: [0, 1, 0, -1, 0], transition:{duration: .25, repeat: Infinity}}}
                    animate={transToPage ? 
                        {scale: 40, 
                        backgroundColor:  ["#DDBEA9", "#FFE8D6", "#FFE8D6" ],
                        color: ["white", "#FFE8D6", "#FFE8D6"]} 
                        : {}
                    }
                    transition={{duration: .75}}
                    onClick={()=>{
                        setTransToPage(!transToPage)
                        setTimeout(() => {
                            navigate(`${pagePath}`)
                        },500);
                    }} 
                    href>
                        {buttonText}
            
        </motion.a>
    )

}