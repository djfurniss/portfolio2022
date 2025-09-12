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
                        <p>Hello there! I am 25 year old Denasia. I was born and mostly raised in Mississippi. I've moved around a lot but now I am back in my home town. I adore everything Star Wars and Japan related. I love to rollerskate, crochet, and spend time with family and friends. I absolutely love music. I was a band kid in middle and high school, I played the clarinet, taught myself to play the flute and dabbled in other instruments. I ended up getting into color guard and did that during marching season and went back to my clarinet roots for concert season. I love languages. At the moment I'm learning Japanese and Spanish. Needless to say, I love learning new things, developing skills, and putting my brain to work!
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
                    <p>I've always been a pretty tech-savy person so it wasn't surprising that I wanted to learn how to code. I spent my high school career involved in robotics and STEM classes. I only started taking software development seriously when I chose to quit my job as an ASL interpreter. I decided to enroll in a fulltime 6 month bootcamp in 2022 to learn as much as I could as fast as I could so I could start my career switching journey. As it turned out, the job search didn't go as planned, time moved on, and I never did land a job as a software developer. That, however, doesn't mean I'm throwing away the things I have learned along the way! I still have such a strong love for coding and still plan to use the skills I carry. I currently work in the banking industry but my tech roots are sure to drive me right smack in the middle of the beloved FinTech!
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
                    <p>I obtained my associates degree from Mississippi Gulf Coast Community College majoring in interpreting training technology, leading me to just a year long career of being an ASL interpreter. I've also completed Thinkful's Software Engineering immersion course. I'm determined to gain more certifications in the near future.
                    </p>
                </div> 
                </motion.div>
            </div>
        </motion.div>
        </div>
    )
};