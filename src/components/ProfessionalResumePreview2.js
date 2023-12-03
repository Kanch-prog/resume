import React, { useRef } from 'react';
import { jsPDF } from 'jspdf';

const ProfessionalResumePreview2 = ({ resumeDetails }) => {
  const {
    name,
    position,
    address,
    phone,
    email,
    careerOverview,
    education,
    skills,
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
      fontSize: 10,
    });
  };

  return (
    <div ref={resumeRef}  className="professional-resume-preview" style={{ lineHeight: '4.5rem', borderStyle: "dashed", border: '2px solid #89CFF0', borderRadius: '10px', fontSize: '24px', background: 'white', padding: '80px', margin: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{ color: '#0047AB', fontWeight: 'bold', marginBottom: '5px', letterSpacing: '5px', textTransform: 'capitalize' }}>{name}</h2>
          <p style={{ color: '#555', fontWeight: 'normal', marginBottom: '5px' }}>{position}</p>
        </div>

        <div>
          <p style={{ color: '#555', fontWeight: 'normal', marginBottom: '5px' }}>{address}</p>
          <p style={{ color: '#555', fontWeight: 'normal', marginBottom: '5px' }}>{phone}</p>
          <p style={{ color: '#555', fontWeight: 'normal', marginBottom: '5px' }}>{email}</p>
        </div>
      </div>

      <hr style={{ margin: '20px 0', borderColor: '#89CFF0' }} />

      <section className="professional-section">
        <h3 style={{ textTransform: 'uppercase', color: '#0047AB', fontWeight: 'bold' }}>Career Overview</h3>
        <p style={{ color: '#555', fontWeight: 'normal' }}>{careerOverview}</p>
      </section>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '48%',  paddingRight: '10px',  borderRight: '2px solid #89CFF0' }}>
          <section className="professional-section">
            <h3 style={{ textTransform: 'uppercase', color: '#0047AB', fontWeight: 'bold'}}>Education</h3>
            <p style={{ color: '#555', fontWeight: 'normal' }}>{education}</p>
          </section>
        </div>

        <div style={{ width: '48%' }}>
          <section className="professional-section">
            <h3 style={{ textTransform: 'uppercase', color: '#0047AB', fontWeight: 'bold' }}>Skills</h3>
            <p style={{ color: '#555', fontWeight: 'normal' }}>{skills}</p>
          </section>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '48%', paddingRight: '10px',  borderRight: '2px solid #89CFF0' }}>
          <section className="professional-section">
            <h3 style={{ textTransform: 'uppercase', color: '#0047AB', fontWeight: 'bold' }}>Experience</h3>
            <p style={{ color: '#555', fontWeight: 'normal' }}>{experience}</p>
          </section>
        </div>

        <div style={{ width: '48%' }}>
          <section className="professional-section">
            <h3 style={{ textTransform: 'uppercase', color: '#0047AB', fontWeight: 'bold' }}>Reference</h3>
            <p style={{ color: '#555', fontWeight: 'normal' }}>{reference}</p>
          </section>
        </div>
      </div>

      <button onClick={downloadResume} style={{ marginTop: '20px', padding: '10px', backgroundColor: '#4caf50', color: '#fff', border: 'none', cursor: 'pointer' }}>
        Download Resume
      </button>
    </div>
  );
};
export default ProfessionalResumePreview2;
