import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './Home.css';
import ResumeStyles from './ResumeStyles';
import Testimonials from './Testimonials';
import Message from './Message';
import Footer from './Footer';

const Home = () => {
  
  return (
    <div>
      {/* Navigation Bar */}
      <div className="navBar">
        <div className="logo">Resume Builder</div>
        <div className="navLinks">
          <ScrollLink to="mainFeature" smooth={true} duration={800} offset={-70}>
              Features
          </ScrollLink>
          <ScrollLink to="templates" smooth={true} duration={800} offset={-70}>
              Templates
          </ScrollLink>
          <ScrollLink to="testimonials" smooth={true} duration={800} offset={-70}>
              Testimonials
          </ScrollLink>
        </div>
        <div className="login">
          <Link to="/login">Login</Link>
        </div>
      </div>

      {/* Main Feature Section */}
      <div className="mainFeature">
        <div className="featureText">
          <h1>Stand Out with a Professionally Designed Resume</h1>
          <p>By employing the best practices and innovative tech, Resume Builder boosts your chances of landing a better job – completely for free.</p>
          <Link to="/edit">
            <button className="buildResumeButton">Build Resume</button>
          </Link>
        </div>
        <div className="featureImage">
          <img src={process.env.PUBLIC_URL + '/images/feature-image.jpg'} alt="Feature" />
        </div>
      </div>

      {/* Highlight Section */}
      <div className="highlightSection">
        <div className="highlightText">
          <h2>Resume Builder Users Get Hired by the Top Companies Worldwide</h2>
        </div>
      </div>

      {/* Company Logos Section */}
      <div className="companyLogos">
        <img src={process.env.PUBLIC_URL + '/images/microsoft.png'} alt="Microsoft" />
        <img src={process.env.PUBLIC_URL + '/images/nike-logo.png'} alt="Nike" />
        <img src={process.env.PUBLIC_URL + '/images/google.png'} alt="Google" />
        <img src={process.env.PUBLIC_URL + '/images/bmw.png'} alt="BMW" />
        <img src={process.env.PUBLIC_URL + '/images/barclays.png'} alt="Barclays" />
      </div>
       {/* Resume Styles Section */}
       <div id="ResumeStyles" className="templates">
        <ResumeStyles />
      </div>
      
      {/* Testimonials Section */}
      <div id="testimonials" className="testimonials">
        <Testimonials />
      </div>

      {/* Message Section */}
      <div id="message" className="message">
        <Message />
      </div>

      {/* Footer Section */}
      <div id="footer" className="footer">
        <Footer />
      </div>
    </div>   
  );
};

export default Home;
