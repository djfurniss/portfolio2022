import React from "react";
import HomeButtom from "../common/HomeButton";
import head from "../images/head.png"
import "./about.css"

export default function About(){

    return(
        <div id="About">
            <HomeButtom/>
            <h2>a little about me</h2>
            <div className="scroll">
                <p>Hi! I'm Denasia. Welcome to my portfolio. I am 22 years old. I love everything Star Wars and Japan. I love to rollerskate and spend time with family and friends.
                </p>
            </div>
            <h2>my journey into tech</h2>
            <div className="scroll">
                <p>Making the career switch from ASL interpreter to software engineer has been the best decision I've made in a long time! I've always had a thing for tech but since I already knew sign language, I made the easy decision of making it my career. I loved it and I still use sign language to this day. What I quickly learned, though, is that from a career standpoint, I wanted something that challenged me on a regular basis, where I can wear many hats and participate in something bigger than myself. I learned a few things about myself too. As a math lover, it's not a surprise that I'm always up for a challenge. My brain loves to be picked at. And so, here I am. - Now a software engineer. I am super excited to build, connect, and grow in this field.
                </p>
            </div>
            <h2>education</h2>
            <div className="scroll">
                <p>I obtained my associates degree from Mississippi Gulf Coast Community College majoring in interpreting training technology, of course. I've just finished up Thinkful's Software Engineering immersion course. Woohoo! I'm determined to gain more certifications in the near future and maybe my bachelor's degree in computer science. 
                </p>
            </div>
        </div>
    )
};