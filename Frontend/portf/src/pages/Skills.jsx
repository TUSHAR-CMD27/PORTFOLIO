import React from 'react';
import './Skills.css';
import AnimatedGreenCollage from '../components/AnimatedGreenCollage';
import FlowingMenu from '../components/FlowingMenu';

const Skills = () => {
  const skillItems = [
    { link: '#', text: 'JavaScript', image: '' },
    { link: '#', text: 'CSS', image: '' },
    { link: '#', text: 'HTML', image: '' },
    { link: '#', text: 'Python', image: '' },
    { link: '#', text: 'Java', image: '' },
    { link: '#', text: 'MongoDB', image: '' },
    { link: '#', text: 'Node.js', image: '' },
    { link: '#', text: 'Express', image: '' },
    { link: '#', text: 'Machine Learning', image: '' },
  ];

  return (
    <div className="skills-container page-container fade-in">
      {/* Collage positioned left logically in layout, visually manipulated via CSS */}
      <div className="skills-left-bg">
        <AnimatedGreenCollage />
      </div>
      
      {/* Right side for Flowing Menu */}
      <div className="skills-right-content">
         <FlowingMenu items={skillItems} speed={12} />
      </div>
    </div>
  );
};

export default Skills;
