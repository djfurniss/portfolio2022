import React from "react";
import { motion } from "framer-motion";
import HomeButtom from "../common/HomeButton";
import Project from "./Project";
import data  from "./data";
import "./projects.css";


export default function Projects(){
    // console.log(data)
    return(
        <div>
            <HomeButtom/>
            <motion.div 
                id="Projects"
                initial={{opacity: 0, scale: .3}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: .5}}
            >
                <div className="scroll" id="main-container">
                    {data.map((item, idx)=>{
                        return <Project proj={item} key={idx}/>
                    })}
                </div>
            </motion.div>
        </div>
    )
};