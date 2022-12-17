import Home  from "../pages/Home";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Navbar from "../components/Navbar";
import Projects from "../pages/Projects";
import Footer from "../components/Footer";

const Router = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default Router;
