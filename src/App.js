import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./common/Footer";
import Home from "./home/Home";

export default function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
      </div>
      
    </BrowserRouter>
  )
};