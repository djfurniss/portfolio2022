import React from "react";
import { motion } from "framer-motion";
import HomeButton from "../common/HomeButton";
import "./about.css";

export default function About(){

    return(
        <div>
        <HomeButton/>
        <motion.div 
            id="About"
            // initial={{opacity: 0.2, scale: 0.3}}
            // animate={{opacity: 1, scale: 1}}
            // transition={{duration: .75}}
        >
            <div className="scroll" id="main">
                <motion.div
                    initial={{opacity: 0.2, scale: 0.3}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: .5}}
                >
                    <h2>a little about me</h2>
                    <div>
                        <p>Hello there! I am 23 year old Denasia. I was born and mostly raised in Mississippi. I've moved around a lot but now I am back in my home town. I adore everything Star Wars and Japan related. I love to rollerskate and spend time with family and friends. I absolutely love music. I was a band kid in high school, I played the clarinet, taught myself to play the flute and dabbled in other instruments. I ended up getting into color guard and did that during marching season and went back to my clarinet roots for concert season. I love languages. At the moment I'm learning Japanese and Spanish. Needless to say, I love learning new things, developing skills, and putting my brain to work!
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{opacity: 0, scale: 0.3, y: -200}}
                    animate={{opacity: 1, scale: 1, y: 0}}
                    transition={{duration: .5, delay: .1}}
                >
                <h2>my journey into tech</h2>
                <div>
                    <p>Making the career switch from ASL interpreter to software engineer has been the best decision I've made in a long time! I've always had a knack for tech but since I already known sign language since my sophmore year of high school, I made the simple decision to make it my career. I loved it and I still use sign language to this day. What I quickly learned, though, is that from a career standpoint, I wanted to be involved in a profession that challenged me on a regular basis, where I can wear many hats and participate in something bigger than myself. I learned a few things about myself too along the way. As a math lover, it's not a surprise that I'm always up for a challenge. My brain loves to be picked at. And so, here I am. - Now a software engineer. I am super excited to build, connect, and grow in this field.
                    </p>
                </div>
                </motion.div>

                <motion.div
                    initial={{opacity: 0, scale: 0.3, y: -300}}
                    animate={{opacity: 1, scale: 1, y: 0}}
                    transition={{duration: .5, delay: .2}}
                >
                <h2>education</h2>
                <div>
                    <p>I obtained my associates degree from Mississippi Gulf Coast Community College majoring in interpreting training technology, of course. I've also completed Thinkful's Software Engineering immersion course. I plan on getting my Bachelor's in computer science from WGU. I'm determined to also gain more certifications in the near future.
                    </p>
                </div> 
                </motion.div>
            </div>
        </motion.div>
        </div>
    )
};