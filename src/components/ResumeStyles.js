import React, { useState } from 'react';
import './ResumeStyles.css';

// Sample data for resume styles
const styles = [
  {
    id: 1,
    name: 'Classic',
    description: 'A traditional and professional style.',
    image: '/styles/classic.png',
  },
  {
    id: 2,
    name: 'Modern',
    description: 'A sleek and contemporary style.',
    image: '/styles/modern.png',
  },
  {
    id: 3,
    name: 'Exquisite',
    description: 'A sleek and contemporary style.',
    image: '/styles/exquisite.png',
  },
  {
    id: 4,
    name: 'Classic',
    description: 'A traditional and professional style.',
    image: '/styles/classic.png',
  },
  {
    id: 5,
    name: 'Modern',
    description: 'A sleek and contemporary style.',
    image: '/styles/modern.png',
  },
  {
    id: 6,
    name: 'Exquisite',
    description: 'A sleek and contemporary style.',
    image: '/styles/exquisite.png',
  },
];

const ResumeStyles = ({ onSelectStyle }) => {
  // State to manage the selected style and the starting index for displayed styles
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [startIndex, setStartIndex] = useState(0);

  // Function to handle selecting a style
  const handleStyleSelect = (style) => {
    setSelectedStyle(style);
  };

  // Function to handle mouse enter event, updating the starting index
  const handleMouseEnter = (index) => {
    setStartIndex(index);
  };

  // Function to handle mouse leave event, resetting the starting index
  const handleMouseLeave = () => {
    setStartIndex(0);
  };

  return (
    <div className="resume-styles-container">
      <h2>Start by selecting a resume template design</h2>
      {/* List of styles with sliding behavior */}
      <ul className="styles-list" onMouseLeave={handleMouseLeave}>
        {styles.slice(startIndex, startIndex + 3).map((style, index) => (
          <li key={style.id} className="style-item" onMouseEnter={() => handleMouseEnter(index)}>
            {/* Grey box containing image, with a click event to select the style */}
            <div className="grey-box" onClick={() => handleStyleSelect(style)}>
              <img src={process.env.PUBLIC_URL + style.image} alt={style.name} />
              {/* Zoom icon inside the grey box */}
              <div className="zoom-icon">&#128269;</div>
            </div>
            {/* Details of the style */}
            <div>
              <h3>{style.name}</h3>
              <p>{style.description}</p>
            </div>
          </li>
        ))}
      </ul>
      {/* Display the zoomed image when a style is selected */}
      {selectedStyle && (
        <div className="zoomed-image-container">
          <img src={process.env.PUBLIC_URL + selectedStyle.image} alt={selectedStyle.name} />
          {/* Button to close the zoomed image */}
          <button onClick={() => setSelectedStyle(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default ResumeStyles;
