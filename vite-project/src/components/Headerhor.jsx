import React from 'react';
import { Link } from 'react-router-dom'; 
import './Headerhor.css';

const Headerhor = () => {
  return (
    <header className="header-container">
      <input type="text" className="search-bar" placeholder="Search" />
      <div className="buttons-container">
        <button className="button">Sign In</button>
        <button className="button">Register</button>
      </div>
    </header>
  );
};

export default Headerhor;
