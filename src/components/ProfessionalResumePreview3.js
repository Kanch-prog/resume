import React, { useRef } from 'react';
import { jsPDF } from 'jspdf';

const ProfessionalResumePreview3 = ({ resumeDetails }) => {
  const {
    name,
    position,
    address,
    phone,
    email,
    careerOverview,
    education,
    experience,
    reference,
  } = resumeDetails;

  const resumeRef = useRef();

  const downloadResume = () => {
    const content = resumeRef.current;

    const pdf = new jsPDF();
    pdf.html(content, {
      callback: () => {
        pdf.save('resume.pdf');
      },
      x: 5,
      y: 5,
      html2canvas: { scale: 0.167 },
      margin: [2, 2, 2, 2],
      fontSize: 12,
    });
  };

  return (
    <div ref={resumeRef} className="professional-resume-preview" style={{ lineHeight: '2.5rem', borderStyle: "dashed", border: '2px solid #ddd', borderRadius: '10px', fontSize: '16px', background: 'white', padding: '40px', margin: '20px'}}> 
      <div style={{ textAlign: 'center', textTransform: 'uppercase' }}>
        <h2 style={{ color: '#ff0000', fontWeight: 'bold', marginBottom: '5px', letterSpacing: '2px'}}>{name}</h2>
        <p style={{ color: '#555', fontWeight: 'normal', marginBottom: '5px' }}>{position}</p>
        <p style={{ color: '#555', fontWeight: 'normal', marginBottom: '5px' }}>📧 {email}</p>
        <p style={{ color: '#555', fontWeight: 'normal', marginBottom: '5px' }}>📞 {phone}</p>
        <p style={{ color: '#555', fontWeight: 'normal', marginBottom: '5px' }}>📍 {address}</p>
      </div>

      <hr style={{ margin: '20px 0', borderColor: '#ddd' }} />

      <section className="professional-section">
        <h3 style={{ textTransform: 'uppercase', color: '#ff0000', fontWeight: 'bold' }}>Career Overview</h3>
        <p style={{ color: '#555', fontWeight: 'normal' }}>{careerOverview}</p>
      </section>

      <hr style={{ margin: '20px 0', borderColor: '#ddd' }} />

      <section className="professional-section" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '48%' }}>
          <h3 style={{ textTransform: 'uppercase', color: '#ff0000', fontWeight: 'bold' }}>Education</h3>
          <p style={{ color: '#555', fontWeight: 'normal' }}>{education}</p>
        </div>
        <div style={{ width: '48%' }}>
          <h3 style={{ textTransform: 'uppercase', color: '#ff0000', fontWeight: 'bold' }}>Skills</h3>
          <ul style={{ listStyleType: 'circle', paddingLeft: '20px', color: '#555', fontWeight: 'normal' }}>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>
      </section>

      <hr style={{ margin: '20px 0', borderColor: '#ddd' }} />

      <section className="professional-section">
        <h3 style={{ textTransform: 'uppercase', color: '#ff0000', fontWeight: 'bold' }}>Experience</h3>
        <p style={{ color: '#555', fontWeight: 'normal' }}>{experience}</p>
      </section>

      <hr style={{ margin: '20px 0', borderColor: '#ddd' }} />

      <section className="professional-section">
        <h3 style={{ textTransform: 'uppercase', color: '#ff0000', fontWeight: 'bold' }}>Reference</h3>
        <p style={{ color: '#555', fontWeight: 'normal' }}>{reference}</p>
      </section>

      <button onClick={downloadResume} style={{ marginTop: '20px', padding: '10px', backgroundColor: '#4caf50', color: '#fff', border: 'none', cursor: 'pointer' }}>
        Download Resume
      </button>
    </div>
  );
};

export default ProfessionalResumePreview3;
