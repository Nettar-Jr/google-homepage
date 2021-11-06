import React, { useState } from 'react';
import './Main.css';
import shLogo from './img/logo.png';
import Search from './img/search.png';
import Mic from './img/mic.png';

function Main(){

  const [searchTerm, setSearchTerm] = useState("");

  const showText = (props) => {
    setSearchTerm(props.target.value);
  }

  return (
    <div className="form">
      <div className="logoContainer">
        <p>
          {searchTerm ? searchTerm : <img src={shLogo} alt="main logo"/>}
        </p>
      </div>
      <div className="inputContainer">
        <img src={Search} alt="search Icon" />
        <input type="text" onChange={showText} className="searchBtn micBtn" /> 
        <img src={Mic} alt="Mic Icon" />
      </div>
      <div className="btn">
          <button>Google Search</button>
          <button> Im Feeling Lucky </button>
      </div>
          
      <div className="lang"> 
        Google offered in:
        <span> Hausa </span>
        <span> Igbo </span>
        <span> Èdè </span>
        <span> Yorùbá </span>
        <span> Pidgin </span>
      </div>
    </div>
  );
}

export default Main;