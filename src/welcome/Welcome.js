import React, { useState } from "react";
import PageButton from "../common/PageButton";
import { motion } from "framer-motion";
import standing from "../images/standing.png";
import "./welcome.css";
// import { hover } from "@testing-library/user-event/dist/hover";

export default function Welcome(){
    const role = "Software Engineer"
    const location = "Moss Point, MS"

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

                <h2>{role}</h2>
                <p>{location}</p>
            </div>

            <div id="link-container">
                <PageButton buttonText={"about me"} pagePath={"/about"}/>
                <PageButton buttonText={"my projects"} pagePath={"/projects"}/>
                <PageButton buttonText={"connect with me"} pagePath={"/connect"}/>
            </div>
        </div>
    )
};