import React, { useState } from 'react';
import './ResumeEditor.css';
import ProfessionalResumePreview1 from './ProfessionalResumePreview1'; 
import ProfessionalResumePreview2 from './ProfessionalResumePreview2'; 
import ProfessionalResumePreview3 from './ProfessionalResumePreview3'; 

const styles = [
  {
    id: 1,
    name: 'Classic',
  },
  {
    id: 2,
    name: 'Creative',
  },
  {
    id: 3,
    name: 'Modern',
  },
];

const ResumeEditor = () => {
  // State to manage resume details
  const [resumeDetails, setResumeDetails] = useState({
    name: '',
    position: '',
    address: '',
    phone: '',
    email: '',
    careerOverview: '',
    education: '',
    skills: '',
    experience: '',
    reference: '',
  });

  const [selectedStyle, setSelectedStyle] = useState(null);

  // Function to handle changes in resume details
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setResumeDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Resume Details:', resumeDetails);
  };

  const handleChooseStyle = (style) => {
    setSelectedStyle(style);
  };

  return (
    <div className="resume-editor-container">
      <h2>Edit Resume Details</h2>
      <form className="resume-form" onSubmit={handleSubmit}>
        {/* form inputs for each resume detail */}
        <ol>
          <li>
            <label>
              Name:
              <input type="text" name="name" value={resumeDetails.name} onChange={handleInputChange} />
            </label>
          </li>

          <li>
            <label>
              Position:
              <input type="text" name="position" value={resumeDetails.position} onChange={handleInputChange} />
            </label>
          </li>

          <li>
            <label>
              Address:
              <input type="text" name="address" value={resumeDetails.address} onChange={handleInputChange} />
            </label>
          </li>

          <li>
            <label>
              Phone:
              <input type="text" name="phone" value={resumeDetails.phone} onChange={handleInputChange} />
            </label>
          </li>

          <li>
            <label>
              Email:
              <input type="text" name="email" value={resumeDetails.email} onChange={handleInputChange} />
            </label>
          </li>

          <li>
            <label>
              Career Overview:
              <input
                type="text"
                name="careerOverview"
                value={resumeDetails.careerOverview}
                onChange={handleInputChange}
              />
            </label>
          </li>

          <li>
            <label>
              Education:
              <input type="text" name="education" value={resumeDetails.education} onChange={handleInputChange} />
              <input type="text" name="education" value={resumeDetails.education} onChange={handleInputChange} />
            </label>
          </li>

          <li>
            <label>
              Skills:
              <input type="text" name="skills" value={resumeDetails.skills} onChange={handleInputChange} />
            </label>
          </li>

          <li>
            <label>
              Experience:
              <input type="text" name="experience" value={resumeDetails.experience} onChange={handleInputChange} />
              <input type="text" name="experience" value={resumeDetails.experience} onChange={handleInputChange} />
            </label>
          </li>

          <li>
            <label>
              Reference:
              <input type="text" name="reference" value={resumeDetails.reference} onChange={handleInputChange} />
            </label>
          </li>
        </ol>
        
        <button type="submit" className='saveDetails'>Save</button>
      </form>

        {/* Buttons to choose resume style */}
        <div>
          {styles.map((style) => (
            <button
              key={style.id}
              className="buildResumeButton"
              onClick={() => handleChooseStyle(style)}
            >
              Choose {style.name} Style
            </button>
          ))}
        </div>

        {/* Display the selected style */}
        {selectedStyle && (
        <div className="selected-style-container">
          <h3>Selected Style: {selectedStyle.name}</h3>

          {/* Conditionally render the appropriate ResumePreview component */}
          {selectedStyle.name === 'Classic' && (
            <ProfessionalResumePreview1 resumeDetails={resumeDetails} />
         )}
          {selectedStyle.name === 'Modern' && (
            <ProfessionalResumePreview2 resumeDetails={resumeDetails} />
         )}

         {selectedStyle.name === 'Creative' && (
            <ProfessionalResumePreview3 resumeDetails={resumeDetails} />
         )}

        </div>
      )}
      </div>
  );
};

export default ResumeEditor;
