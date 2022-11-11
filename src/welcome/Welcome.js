import React from "react";
import { useNavigate } from "react-router-dom";
import standing from "../images/standing.png";
import "./welcome.css";

export default function Welcome(){
    const navigate = useNavigate();

    return(
        <div id="Welcome">
            <div id="info">
                <div id="name-image-container">
                    <div id="name-container">
                        <h1>DENASIA</h1>
                        <h1>FURNISS</h1>
                    </div>
                    <img
                        src={standing}
                        alt="icon of black girl with dreads standing wearing yellow pants and blue jacket">
                    </img>
                </div>
                <h2>Full Stack Software Engineer</h2>
                <p>Charlotte, NC</p>
            </div>

            <div id="link-container">
                <a onClick={()=>navigate("/about")} href>about me</a>
                <a onClick={()=>navigate("/projects")} href>my projects</a>
                <a onClick={()=>navigate("/connect")} href>connect with me</a>
            </div>
        </div>
    )
};