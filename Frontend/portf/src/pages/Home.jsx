import React from 'react';
import './About.css';
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
              <li className="list-indent-1"><span className="list-tag">&lt;college&gt;</span><span>ABC Engineering College</span><span className="list-tag">&lt;/college&gt;</span></li>
              <li className="list-indent-1"><span className="list-tag">&lt;department&gt;</span><span>Computer Science</span><span className="list-tag">&lt;/department&gt;</span></li>
              <li className="list-indent-1"><span className="list-tag">&lt;graduation&gt;</span><span>2025</span><span className="list-tag">&lt;/graduation&gt;</span></li>
              <li><span className="list-tag">&lt;/education&gt;</span></li>
              
              <li className="mt-3"><span className="list-tag">&lt;skills&gt;</span></li>
              <li className="list-indent-1"><span className="list-value">"React", "Three.js", "Vanilla CSS", "UI/UX"</span></li>
              <li><span className="list-tag">&lt;/skills&gt;</span></li>
            </ul>
          </div>
        </div>

        <div className="about-paragraph-section">
          <p className="about-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <p className="about-description">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. 
          </p>
           <p className="about-description">
            Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;