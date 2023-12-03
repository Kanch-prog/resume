import React from 'react';
import { Link } from 'react-router-dom';
import './Message.css';

const Message = () => {
  return (
    <div className="message-section">
      <img
        className="background-image"
        src="/images/background.jpg"
        alt="Background"
      />
      <div className="background-overlay"></div>
      <div className="content">
        <h1>Use Resume Builder and Land Your Dream Job</h1>
        <p>No registration required</p>
        <Link to="/edit"><button className="create-resume-button">Create Resume</button></Link>
        
      </div>
    </div>
  );
};

export default Message;
