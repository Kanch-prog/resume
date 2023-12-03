import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <p>Follow us</p>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <img src="/images/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <img src="/images/twitter.png" alt="Twitter" />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
          <img src="/images/youtube.png" alt="YouTube" />
        </a>
      </div>
      <hr className="separator" />
      <div className="footer-bottom">
        <div className="left">
          <p>
            <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms">Terms</a>
          </p>
        </div>
        <div className="right">
          <p>© Copyright 2023, Resume Builder</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
