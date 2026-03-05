import React from 'react';
import './ABout.css';
import AnimatedGreenCollage from '../components/AnimatedGreenCollage';

const Home = () => {
  return (
    <div className="about-container page-container">
      {/* Animated Background Collage (Green Theme) */}
      <AnimatedGreenCollage />
      
      {/* Scrollable Main Content */}
      <div className="about-content-scroll">
        <div className="about-header-section">
          {/* Big header on the left */}
          <h1 className="about-big-title">
            Meet<br />
            Tusharrrr,
          </h1>
          
          <div className="about-list-section">
            <ul className="about-list">
              <li><span className="list-tag">&lt;education&gt;</span></li>
              <li className="list-indent-1"><span className="list-tag">&lt;college&gt;</span><span>SMT. Indira Gandhi College of Engineering</span><span className="list-tag">&lt;/college&gt;</span></li>
              <li className="list-indent-1"><span className="list-tag">&lt;department&gt;</span><span>Artificial Intelligence & Machine Learning</span><span className="list-tag">&lt;/department&gt;</span></li>
              <li className="list-indent-1"><span className="list-tag">&lt;graduation&gt;</span><span>2027</span><span className="list-tag">&lt;/graduation&gt;</span></li>
              <li><span className="list-tag">&lt;/education&gt;</span></li>
              
              <li className="mt-3"><span className="list-tag">&lt;skills&gt;</span></li>
              <li className="list-indent-1"><span className="list-value">"React", "Node.js", "Machine Learning", "UI/UX", and more...</span></li>
              <li><span className="list-tag">&lt;/skills&gt;</span></li>
            </ul>
          </div>
        </div>

        <div className="about-paragraph-section">
          <p className="about-description">
           As an engineering student, I’ve moved past just studying theory to getting my hands dirty with real-world applications. Whether it’s troubleshooting a complex design or building a real world project from scratch, I’m at my best when I’m solving puzzles that have a tangible impact.
          </p>
          <p className="about-description">
           Beyond the technical skills like Machine Learning, MERN stack and UI/UX, I’ve learned that good engineering is as much about persistence and adaptability as it is about math. I enjoy the process of trial, error, and refinement that leads to a solid final product. My goal is to bring this mix of technical curiosity and practical problem-solving to a team where I can keep learning and start contributing to meaningful, high-stakes projects.
          </p>
           
        </div>
      </div>
    </div>
  );
};

export default Home;