import { Routes, Route } from 'react-router-dom';
import React from "react";
import Home from "./pages/home";
import About from './pages/About.';
import Services from './pages/Services';
import Navbar from './pages/navbar';
import './App.css';


function App() {
    return(
        <>
        <Navbar/>
        <Routes>
            <Route path="/home" element={<Home/>} />;
            <Route path="/about" element={<About/>} />;
            <Route path="/services" element={<Services/>} />;
        </Routes>
        </>
    );
}
export default App