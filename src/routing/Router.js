import Home from "../pages/Home";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Navbar from "../components/Navbar";
import Projects from "../pages/Projects";
import Footer from "../components/Footer";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar style={{ minHeight: "10vh" }}/>
      <div style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
      <Footer style={{ minHeight: "10vh" }} />
    </BrowserRouter>
  );
};

export default Router;
