import React, { useEffect, useRef, useState } from 'react';
import './AnimatedGreenCollage.css';

const AnimatedGreenCollage = () => {
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
      {/* 1. Static Background Layers - Green Theme */}
      <div className="box bg-olive-base ">
         <img 
          src="/motifs/mandala5.jpg" 
          alt="Decorative Indian Mandala" 
          className="motif-img mix-blend-multiply"
          style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '10px' }}
        />
      </div>
      <div className="box bg-pattern-left-green "></div>
      <div className="box bg-dark-green-large ">
         <img 
          src="/motifs/mandala5.jpg" 
          alt="Decorative Indian Mandala" 
          className="motif-img opacity-80"
          style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '10px' }}
        />
      </div>
      <div className="box bg-sap-green-top ">
         <img 
          src="/motifs/mandala1.svg" 
          alt="Decorative Indian Mandala" 
          className="motif-img filter-light-green"
          style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '10px' }}
        />
      </div>

      {/* 2. Animated Layers */}
      
      {/* Red/Green Mandala Element */}
      <div className="box anim-sap-green-mandala float-1">
        <img 
          src="/motifs/mandala1.svg" 
          alt="Decorative Indian Mandala" 
          className="motif-img filter-dark-green"
          style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '10px' }}
        />
      </div>
      
      {/* Dark Green Square Center */}
      <div className="box anim-dark-green-center pulse-slow">
         <img 
          src="/motifs/mandala4.jpg" 
          alt="Decorative Indian Mandala" 
          className="motif-img mix-blend-screen opacity-70"
          style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '10px' }}
        />
        <div className="geometric-lines-green"></div>
      </div>
      
      {/* Olive Tile */}
      <div className="box anim-olive-tilt float-2">
         <img 
            src="/motifs/mandala3.jpg" 
            alt="Paper Texture" 
            className="texture-overlay"
            style={{ width: '100%', height: '100%', opacity: 0.6, mixBlendMode: 'multiply' }}
         />
      </div>
      
      {/* Light Green / Paisley Element */}
      <div className="box anim-light-green-paisley float-3">
        <img 
          src="/motifs/mandala2.jpg" 
          alt="Paisley Motif" 
          className="motif-img mix-blend-multiply"
          style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '15px' }}
        />
      </div>
      
      {/* Additional Decorative Elements */}
      <div className="box anim-accent-line-green"></div>
      <div className="box anim-accent-dot-green"></div>
      <div className="box anim-accent-dot-2-green"></div>
    </div>
  );
};

export default AnimatedGreenCollage;
