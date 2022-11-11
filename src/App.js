import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Welcome from "./welcome/Welcome";
import About from "./about/About";
import Projects from "./projects/Projects";
import Connect from "./connect/Connect";
import "./app.css"

export default function App() {
  return (
    <BrowserRouter>
      <main>
          <Routes>
            <Route exact path="/" element={<Welcome/>}/>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/projects" element={<Projects/>}/>
            <Route exact path="/connect" element={<Connect/>}/>
          </Routes>
      </main>
      </BrowserRouter>
  )
};