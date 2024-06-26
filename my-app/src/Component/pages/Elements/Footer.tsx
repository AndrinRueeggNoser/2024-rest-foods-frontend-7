import React from "react";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>Foods Around The World</h3>
          <p>
            Besuchen Sie uns und geniessen Sie verschiedene Gerichte um den
            ganzen Globus!
          </p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/reservation">Reservation</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Number: 052 202 75 22</p>
          <p>E-Mail: contact@restfoods.com</p>
          <p>Standort: Herostrasse 12</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Foods Around The World.</p>
      </div>
    </footer>
  );
};

export default Footer;
