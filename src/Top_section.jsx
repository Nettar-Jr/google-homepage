import React from 'react';
import './Top_section.css';
import Menu from './img/baseline_apps_black_24dp.png';

const Top =()=>{
    return (
        <header className="Top-header">

            <div className="Top-menu-container">

            <a
                className="Top-menu-link"
                href="https://mail.google.com/"
                target="_top"
            >
                Gmail
            </a>

            <a
                className="Top-menu-link"
                href="https://www.google.com.ng/"
                target="_top"
            >
                Images
            </a>

            <img src={Menu} alt="menu icon" className="Menu-icon"/>

            <button className="Sign-In-btn"><span className="Btn-text">Sign In</span></button>

            </div>
        
        </header>
    )
}

export default Top;