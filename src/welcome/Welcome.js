import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import standing from "../images/standing.png";
import "./welcome.css";
import { hover } from "@testing-library/user-event/dist/hover";

export default function Welcome(){
    const navigate = useNavigate();
    const [transToAbt, setTransToAbt] = useState(false)
    const [transToProj, setTransToProj] = useState(false)
    const [transToConn, setTransToConn] = useState(false)

    return(
        <div id="Welcome">
            <div id="info">
                <div id="name-image-container">
                    <div id="name-container">
                        <motion.h1
                            initial={{y: -300, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            transition={{delay: .1}}>
                                DENASIA
                        </motion.h1>
                        <motion.h1
                            initial={{y: -300, opacity: 0}}
                            animate={{y: 0, opacity: 1}}>
                                FURNISS
                        </motion.h1>
                    </div>

                    <motion.img
                        // drag
                        src={standing}
                        alt="icon of brown toned girl standing with black mid lengths locs of hair pulled pack into a ponytail wearing a brown sweater vest on top of a white button down, a green bowtie, rolled up two-toned jeans, and green flat shoes">
                    </motion.img>
                </div>

                <h2>Software Engineer</h2>
                <p>Moss Point, MS</p>
            </div>

            <div id="link-container">
                <motion.a 
                    whileHover={{rotate: [0, 1, 0, -1, 0], transition:{duration: .25, repeat: Infinity}}}
                    animate={transToAbt ? 
                        {scale: 40, 
                        backgroundColor:  ["#DDBEA9", "#FFE8D6", "#FFE8D6" ],
                        color: ["white", "#FFE8D6", "#FFE8D6"]} 
                        : {}
                    }
                    transition={{duration: .75}}
                    onClick={()=>{
                        setTransToAbt(!transToAbt)
                        setTimeout(() => {
                            navigate("/about")
                        },500);
                    }} 
                    href>
                        about me
                </motion.a>
                <motion.a 
                    // whileHover={{scale: 1.1}}
                    whileHover={{rotate: [0, 1, 0, -1, 0], transition:{duration: .25, repeat: Infinity}}}
                    animate={transToProj ? 
                        {scale: 40, 
                        backgroundColor:  ["#DDBEA9", "#FFE8D6", "#FFE8D6" ],
                        color: ["white", "#FFE8D6", "#FFE8D6"]} 
                        : {}
                    }
                    transition={{duration: .75}}
                    onClick={()=>{
                        setTransToProj(!transToProj)
                        setTimeout(() => {
                            navigate("/projects")
                        },500);
                    }} 
                    href>
                        my projects
                </motion.a>

                <motion.a 
                    // whileHover={{scale: 1.1}}
                    whileHover={{rotate: [0, 1, 0, -1, 0], transition:{duration: .25, repeat: Infinity}}}
                    animate={transToConn ? 
                        {scale: 40, 
                        backgroundColor:  ["#DDBEA9", "#FFE8D6", "#FFE8D6" ],
                        color: ["white", "#FFE8D6", "#FFE8D6"]} 
                        : {}
                    }
                    transition={{duration: .75}}
                    onClick={()=>{
                        setTransToConn(!transToConn)
                        setTimeout(() => {
                            navigate("/connect")
                        },500);
                    }} 
                    href>
                        connect with me
                </motion.a>

            </div>
        </div>
    )
};