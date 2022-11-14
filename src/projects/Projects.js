import React from "react";
import HomeButtom from "../common/HomeButton";
import Project from "./Project";
import desc from "./descriptions";
import "./projects.css";


export default function Projects(){
    return(
        <div id="Projects">
            <HomeButtom/>
            <div className="scroll" id="main-container">
                <Project 
                    name="Restaurant Reservation" 
                    stack="React, Express, Node.js, PostgreSQL"
                    description={desc.restaurantReservation}
                    repo="https://github.com/djfurniss/decoder-ring"
                    link="https://restaurant-res-client.onrender.com/dashboard"/>
                <Project 
                    name="Library Records Application" 
                    description={desc.library}
                    repo="https://github.com/djfurniss/local-library-project"
                    link="https://local-library-seven.vercel.app/"/>
                <Project 
                    name="grouPlay" 
                    stack="React Native, Node.js, Express, PostgreSQL"
                    description={desc.grouPlay}
                    repo="https://github.com/djfurniss/grouPlayApp"/>
                <Project 
                    name="Secret Message Encryption and Decryption" 
                    description={desc.decoderRing}
                    repo="https://github.com/djfurniss/decoder-ring"
                    link="https://decoder-ring-nine.vercel.app/"/>
                <Project 
                    name="GrubDash" 
                    description={desc.grubDash}
                    repo="https://github.com/djfurniss/grub-dash"/>
                <Project 
                    name="Flashcard-o-matic"
                    stack="React, Bootstrap" 
                    description={desc.flashcardOMatic}
                    repo="https://github.com/djfurniss/flashcard-o-matic"/>
            </div>
        </div>
    )
};