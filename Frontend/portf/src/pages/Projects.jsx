import React, { useState, useEffect, useRef } from 'react';
import './Projects.css';
import AnimatedGreenCollage from '../components/AnimatedGreenCollage';

const initialProjects = [
  {
    title: 'Agrove',
    description: 'A next-generation precision farming management system designed for the modern agriculturist. Optimizing crop yield through real-time data and AI-driven insights.',
    video: '/project_imgs/agrove.mp4',
    link: 'https://agrove.onrender.com/',
  },
  {
    title: 'AmayaSoul',
    description: 'A digital sanctuary for wellness and mindfulness. This platform integrates calming aesthetics with personalized habit tracking to foster mental clarity and peace.',
    video: '/project_imgs/amayasoul.mp4',
    link: 'https://amayasoul-ar-powered-handcrafted-store.onrender.com/',
  },
  {
    title: 'Paint.io',
    description: 'A high-performance, web-based collaborative canvas. Real-time stroke synchronization and advanced brush physics allow artists to create together seamlessly.',
    video: '/project_imgs/paint.io.mp4',
    link: 'https://paint-io-frontend.onrender.com/',
  },
  {
    title: 'Handwritten Detection',
    description: 'A deep learning project utilizing CNNs to recognize and digitize handwritten characters with high accuracy. Bridging the gap between analog notes and digital data.',
    video: '/project_imgs/agrove.mp4', // fallback as requested
    link: 'https://github.com/TUSHAR-CMD27/Handwritten-Character-Detection-using-CNN',
  }
];

const Projects = () => {
  const [projects, setProjects] = useState(initialProjects);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const carouselRef = useRef(null);
  
  // New Project Form State
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newVideoUrl, setNewVideoUrl] = useState('');

  useEffect(() => {
    // Check if the route is exactly '/admin'
    // Since we use hash router or regular router, checking pathname is robust
    if (window.location.pathname === '/admin') {
      setIsAdmin(true);
    }
  }, []);

  const handleAddProject = (e) => {
    e.preventDefault();
    if (!newTitle || !newDescription || !newVideoUrl) return;

    setProjects([...projects, {
      title: newTitle,
      description: newDescription,
      video: newVideoUrl
    }]);

    // Reset Form
    setNewTitle('');
    setNewDescription('');
    setNewVideoUrl('');
    setIsModalOpen(false);
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
       carouselRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
       carouselRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const handleMouseEnter = (e) => {
    const video = e.currentTarget.querySelector('video');
    if (video) video.play();
  };

  const handleMouseLeave = (e) => {
    const video = e.currentTarget.querySelector('video');
    if (video) {
      video.pause();
      // Optional: reset video to beginning
      // video.currentTime = 0;
    }
  };

  return (
    <div id="projects" className="projects-container page-container fade-in">
      
      {/* Blurred Animated Background Wrapper */}
      <div className="projects-bg-wrapper">
         <AnimatedGreenCollage />
      </div>

      <div className="projects-content-layer">
        <div className="projects-header-wrapper">
          <h2 className="projects-super-title">Selected Works</h2>
          <div className="carousel-controls">
            <button className="carousel-arrow" onClick={scrollLeft} aria-label="Scroll Left">&lt;</button>
            <button className="carousel-arrow" onClick={scrollRight} aria-label="Scroll Right">&gt;</button>
          </div>
        </div>
        
        <div className="projects-carousel" ref={carouselRef}>
          {projects.map((proj, idx) => {
            const CardContent = (
              <div 
                className="project-card-wrapper"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="project-card">
                   <video 
                     src={proj.video}
                     className="project-video"
                     loop
                     muted
                     playsInline
                   />
                   <div className="project-overlay">
                      <h3 className="project-title">{proj.title}</h3>
                      <p className="project-description">{proj.description}</p>
                   </div>
                </div>
              </div>
            );

            return proj.link ? (
              <a 
                key={idx} 
                href={proj.link} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                {CardContent}
              </a>
            ) : (
              <React.Fragment key={idx}>
                {CardContent}
              </React.Fragment>
            );
          })}

          {isAdmin && (
            <div className="project-card-wrapper admin-add-wrapper" onClick={() => setIsModalOpen(true)}>
               <div className="project-card admin-add-card">
                  <div className="admin-plus-icon">+</div>
                  <p className="admin-add-text">Add New Project</p>
               </div>
            </div>
          )}
        </div>
      </div>

      {/* Admin Modal */}
      {isModalOpen && (
        <div className="admin-modal-overlay">
           <div className="admin-modal-content">
              <h3>Add New Project</h3>
              <form onSubmit={handleAddProject} className="admin-form">
                <input 
                  type="text" 
                  placeholder="Title" 
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="admin-input"
                  required
                />
                <textarea 
                  placeholder="2-3 Line Description" 
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  className="admin-textarea"
                  rows="4"
                  required
                />
                <input 
                  type="text" 
                  placeholder="Video URL (e.g. /project_imgs/myvideo.mp4)" 
                  value={newVideoUrl}
                  onChange={(e) => setNewVideoUrl(e.target.value)}
                  className="admin-input"
                  required
                />
                <div className="admin-modal-actions">
                  <button type="button" onClick={() => setIsModalOpen(false)} className="btn-cancel">Cancel</button>
                  <button type="submit" className="btn-submit">Add Project</button>
                </div>
              </form>
           </div>
        </div>
      )}
    </div>
  );
};

export default Projects;