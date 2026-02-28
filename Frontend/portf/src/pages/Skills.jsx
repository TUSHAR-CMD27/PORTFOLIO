import React from 'react';
import './Skills.css';
import AnimatedCollage from '../components/AnimatedCollage';
import FlowingMenu from '../components/FlowingMenu';

const Skills = () => {
  const skillItems = [
    { link: '#', text: 'JavaScript', image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
    { link: '#', text: 'CSS', image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
    { link: '#', text: 'HTML', image: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
    { link: '#', text: 'Python', image: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
    { link: '#', text: 'Java', image: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg' },
    { link: '#', text: 'MongoDB', image: 'https://upload.wikimedia.org/wikipedia/en/4/45/MongoDB-Logo.svg' },
    { link: '#', text: 'Node.js', image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
    { link: '#', text: 'Express', image: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png' },
    { link: '#', text: 'Machine Learning', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/256px-Scikit_learn_logo_small.svg.png' },
  ];

  return (
    <div className="skills-container page-container fade-in">
      {/* Collage positioned left logically in layout, visually manipulated via CSS */}
      <div className="skills-left-bg">
        <AnimatedCollage />
      </div>
      
      {/* Right side for Flowing Menu */}
      <div className="skills-right-content">
         <FlowingMenu items={skillItems} speed={12} />
      </div>
    </div>
  );
};

export default Skills;
