import React, { useEffect, useRef, useState } from 'react';
import './AnimatedCollage.css';

const AnimatedCollage = () => {
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false); // Reset animation when scrolled away
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={`collage-container ${inView ? 'run-anim' : ''}`}>
      {/* 1. Static Background Layers */}
      <div className="box bg-orange-base ">
         <img 
          src="/motifs/mandala5.jpg" 
          alt="Decorative Indian Mandala" 
          className="motif-img"
          style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '10px' }}
        />
      </div>
      <div className="box bg-pattern-left  "></div>
      <div className="box bg-black-large ">
         <img 
          src="/motifs/mandala5.jpg" 
          alt="Decorative Indian Mandala" 
          className="motif-img"
          style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '10px' }}
        />
      </div>
      <div className="box bg-red-top ">
         <img 
          src="/motifs/mandala1.svg" 
          alt="Decorative Indian Mandala" 
          className="motif-img"
          style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '10px' }}
        />
      </div>

      {/* 2. Animated Layers */}
      
      {/* Red Mandala Element */}
      <div className="box anim-red-mandala float-1      ">
        <img 
          src="/motifs/mandala1.svg" 
          alt="Decorative Indian Mandala" 
          className="motif-img"
          style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '10px' }}
        />
      </div>
      
      {/* Black Square Center */}
      <div className="box anim-black-center pulse-slow  ">
         <img 
          src="/motifs/mandala4.jpg" 
          alt="Decorative Indian Mandala" 
          className="motif-img"
          style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '10px' }}
        />
        <div className="geometric-lines"></div>
      </div>
      
      {/* Orange Tile */}
      <div className="box anim-orange-tilt float-2  ">
         <img 
            src="/motifs/mandala3.jpg" 
            alt="Paper Texture" 
            className="texture-overlay"
            style={{ width: '100%', height: '100%', opacity: 0.5 }}
         />
      </div>
      
      {/* Paisley/Beige Element */}
      <div className="box anim-paisley float-3  glow-hover">
        <img 
          src="/motifs/mandala2.jpg" 
          alt="Paisley Motif" 
          className="motif-img"
          style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '15px' }}
        />
      </div>
      
      {/* Additional Decorative Elements */}
      <div className="box anim-accent-line">
      </div>
      <div className="box anim-accent-dot"></div>
      <div className="box anim-accent-dot-2"></div>
      
      {/* Glassmorphism overlays to add depth */}
      {/* <div className="box glass-overlay"></div> */}
    </div>
  );
};

export default AnimatedCollage;