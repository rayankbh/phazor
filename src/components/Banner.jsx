import React from 'react';
import '../styles/Banner.css'; 
import logo from '../images/logo.svg'; 

function Banner() {
    return (
        <div className="banner">
           <div className="logo-and-title">
        <img src={logo} alt="Logo" />
        <h2>Phazor</h2>
    </div>
            
            <div className="links">
                <a href="https://github.com/rayankbh" target="_blank" rel="noreferrer">github</a>
                <a href="/about">about</a>
            </div>
           
        </div>
    );
}

export default Banner;
