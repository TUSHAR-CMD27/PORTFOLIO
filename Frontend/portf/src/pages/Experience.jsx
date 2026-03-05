import React from 'react';
import './Experience.css';
import AnimatedCollage from '../components/AnimatedCollage';

const Experience = () => {
  return (
    <div id="experience" className="experience-container page-container fade-in">
      
      {/* Left Column - Text Content */}
      <div className="exp-left-column">
        <h1 className="exp-heading">Work Experience</h1>
        <p className="exp-body">
          Led a team to develop Agrove,<br/>
          a MERN-stack precision farming<br/>
          terminal with an industrial "Bento" UI.
        </p>
        <ul className="exp-bullets">
          <li><strong>Leadership:</strong> Spearheaded system design, Git workflows, and the full SDLC.</li>
          <li><strong>Engineering:</strong> Built a high-performance dashboard for financial and crop tracking.</li>
          <li><strong>Impact:</strong> Delivered a data-driven "command center" for modern agriculture.</li>
          <li><strong>Result:</strong> Performance rated as "Exemplary" by the technical board.</li>
        </ul>
      </div>
      
      {/* Center Column - Motifs / Subject */}
      <div className="exp-center-column">
        <img src="/motifs/tushar.png" alt="Tushar Standing" className="exp-center-image" />
      </div>

      {/* Right Column - Animated Background & Text */}
      <div className="exp-right-column">
        <div className="exp-right-bg">
          <AnimatedCollage />
        </div>
        <div className="exp-right-content">
          <h2 className="exp-role-text">
            Intern Leader at<br/>Sapphire infocom<br/><span className="exp-date">(aug - sept 2025)</span>
          </h2>
        </div>
      </div>

    </div>
  );
};

export default Experience;
