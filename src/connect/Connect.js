import React from "react";
import { useNavigate } from "react-router-dom";
import linkedin from "../images/linkedin-logo.png";
import github from "../images/github-logo.png";
import instagram from "../images/instagram-logo.png";

import "./connect.css"
import HomeButtom from "../common/HomeButton";

export default function Connect(){
    const navigate = useNavigate();

    return(
        <div id="Connect">
            <HomeButtom/>
            <h1>Connect With Me!</h1>
            <div id="link-container">
               <a 
                href="https://www.linkedin.com/in/denasia-furniss/" 
                target="blank">
                    <img 
                        src={linkedin} 
                        style={{width: 20}}>
                    </img> LinkedIn
                </a> 

               <a 
                href="https://github.com/djfurniss" 
                target="blank">
                    <img 
                        src={github} 
                        style={{width: 20}}>
                    </img> GitHub
                </a> 

               <a 
                href="https://instagram.com/djaliece?igshid=ODBkMDk1MTU=" 
                target="blank">
                    <img 
                        src={instagram} 
                        style={{width: 20}}>
                    </img> Instagram
                </a>
            </div>
        </div>
    )
};