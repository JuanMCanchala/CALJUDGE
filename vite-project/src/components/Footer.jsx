import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <h1>CalJudge</h1>
      </div>
      <div className="footer-links">
        <div className="footer-column">
          <h3>Product</h3>
          <ul>
            <li><Link to="/competitions">Competitions</Link></li>
            <li><Link to="/datasets">Datasets</Link></li>
            <li><Link to="/models">Models</Link></li>
            <li><Link to="/notebooks">Notebooks</Link></li>
            <li><Link to="/learn">Learn</Link></li>
            <li><Link to="/discussions">Discussions</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Documentation</h3>
          <ul>
            <li><Link to="/documentation/competitions">Competitions</Link></li>
            <li><Link to="/documentation/datasets">Datasets</Link></li>
            <li><Link to="/documentation/models">Models</Link></li>
            <li><Link to="/documentation/notebooks">Notebooks</Link></li>
            <li><Link to="/documentation/api">Public API</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li><Link to="/User">Profile</Link></li>
            <li><Link to="/Foro">Discusion</Link></li>
            <li><Link to="/host-competition">Host a Competition</Link></li>
            <li><Link to="/terms">Terms</Link> • <Link to="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-social">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
