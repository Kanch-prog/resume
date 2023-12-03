import React, { useState } from 'react';
import './Testimonials.css';

const testimonialsData = [
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel neque vel velit ultrices imperdiet.',
    name: 'John Doe',
    post: 'CEO',
    workplace: 'XYZ Corporation',
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel neque vel velit ultrices imperdiet.',
    name: 'John Snow',
    post: 'Accoutant',
    workplace: 'XYZ Corporation',
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel neque vel velit ultrices imperdiet.',
    name: 'Jane Doe',
    post: 'Manager',
    workplace: 'XYZ Corporation',
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel neque vel velit ultrices imperdiet.',
    name: 'Michelle Doe',
    post: 'Teacher',
    workplace: 'XYZ Corporation',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="testimonials-carousel">
      <h2>Our customers say it best</h2>
      <button className="arrowRight" onClick={handlePrev}>&lt;</button>
      <div className="testimonial">
        <p>{testimonialsData[currentIndex].text}</p>
        <div className="author">
          <span className="name">{testimonialsData[currentIndex].name}</span>
          <span className="post">{testimonialsData[currentIndex].post}</span>
          <span className="workplace">{testimonialsData[currentIndex].workplace}</span>
        </div>
      </div>
      <button className="arrowLeft" onClick={handleNext}>&gt;</button>
    </div>
  );
};

export default Testimonials;
