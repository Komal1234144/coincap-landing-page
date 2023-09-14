// Header.js
import React from 'react';
import './Header.scss'; // Import your CSS stylesheet
import logo from '../../../assets/logo.png'; // Replace with your logo image

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand" href="/">
            <img src={logo} alt="CoinCap" />
            CoinCap
          </a>

          {/* Navigation Links */}
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/markets">
                Markets
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/news">
                News
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/tools">
                Tools
              </a>
            </li>
          </ul>

          {/* Crypto Info */}
          <div className="crypto-info">
            <div className="d-flex align-items-center">
              <span className="mr-2">Bitcoin Price:</span>
              <span className="crypto-price">$45,000</span>
            </div>
            <div className="d-flex align-items-center">
              <span className="mr-2">Market Cap:</span>
              <span className="crypto-market-cap">$1.2T</span>
            </div>
            <div className="d-flex align-items-center">
              <span className="mr-2">24h Volume:</span>
              <span className="crypto-volume">$100B</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
