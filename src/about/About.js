import React from "react";
import HomeButtom from "../common/HomeButton";
import "./about.css";

export default function About(){

    return(
        <div id="About">
            <HomeButtom/>
            <div className="scroll" id="main">
                <h2>a little about me</h2>
                <div>
                    <p>Hello there! I am 22 year old Denasia. I was born and mostly raised in Mississippi but now reside in Charlotte, NC. I adore everything Star Wars and Japan. I love to rollerskate and spend time with family and friends. I absolutely love music. I was a band kid in high school, I played the clarinet, taught myself to play the flute and dabbled in other instruments. I ended up getting into color guard and did that during marching season and went back to my clarinet roots for concert season. Needless to say, I love learning new things, developing skills, and putting my brain to work!
                    </p>
                </div>
                <h2>my journey into tech</h2>
                <div>
                    <p>Making the career switch from ASL interpreter to software engineer has been the best decision I've made in a long time! I've always had a knack for tech but since I already known sign language since my sophmore year of high school, I made the simple decision to make it my career. I loved it and I still use sign language to this day. What I quickly learned, though, is that from a career standpoint, I wanted to be involved in a profession that challenged me on a regular basis, where I can wear many hats and participate in something bigger than myself. I learned a few things about myself too along the way. As a math lover, it's not a surprise that I'm always up for a challenge. My brain loves to be picked at. And so, here I am. - Now a software engineer. I am super excited to build, connect, and grow in this field.
                    </p>
                </div>
                <h2>education</h2>
                <div>
                    <p>I obtained my associates degree from Mississippi Gulf Coast Community College majoring in interpreting training technology, of course. I've just finished up Thinkful's Software Engineering immersion course. Woohoo! I'm determined to gain more certifications in the near future and maybe my bachelor's degree in computer science. 
                    </p>
                </div>
            </div>
        </div>
    )
};