// Myportfolio.jsx
import React from "react";
import Myhome from "./Myhome";
import Myeducation from "./Myeducation";
import Myservice from "./Myservice";
import Mycontact from "./Mycontact";
import Myfooter from "./Myfooter";
import Navbar from "./Navbar";



function Myportfolio() {
  return (
    <>
    {/* <header className="header">
      <a href="#home" className="logo text-4xl md:text-5xl">
        Ananda <span>Krishnan</span>
      </a>

      <i className='bx bx-menu' id="menu-icon"></i>

      <nav className="navbar">
        <a href="#home" className="active">Home</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      
    </header> */}
    <Navbar/>
    <Myhome/>
    <Myeducation/>
    <Myservice/>
    <Mycontact/>
    <Myfooter/>
    
    </>
    
  );
}

export default Myportfolio;
