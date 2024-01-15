import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Conatct from "./components/Careerpage/Conatct";
import Career from "./components/Careerpage/Career";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/career" element={<Career />} />

          <Route path="/Conatct" element={<Conatct />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
