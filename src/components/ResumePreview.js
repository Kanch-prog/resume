// src/components/ResumePreview.js
import React from 'react';

const ResumePreview = ({ selectedStyle, resumeDetails }) => {
  
  return (
    <div>
      <h2>Resume Preview</h2>
      <div className={`resume-preview ${selectedStyle && selectedStyle.name.toLowerCase()}`}>
        <div>
          <h3>{resumeDetails.name}</h3>
          <p>Position: {resumeDetails.position}</p>
          <p>Address: {resumeDetails.address}</p>
          <p>Phone: {resumeDetails.phone}</p>
          <p>Email: {resumeDetails.email}</p>
          <p>Career Overview: {resumeDetails.careerOverview}</p>
          <p>Education: {resumeDetails.education}</p>
          <p>Skills: {resumeDetails.skills}</p>
          <p>Experience: {resumeDetails.experience}</p>
          <p>Reference: {resumeDetails.reference}</p>
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;
