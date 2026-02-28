import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

const routesOrder = ['/', '/skills', '/projects', '/experience', '/contact'];

const ScrollHandlerManager = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [slideDir, setSlideDir] = useState('fade-in');

  useEffect(() => {
    let isNavigating = false;
    let scrollingTimeout;
    
    const handleWheel = (e) => {
      if (isNavigating) return;

      const scrollableElement = e.target.closest('.about-content-scroll') || e.target.closest('.page-container');
      
      if (scrollableElement) {
         if (e.deltaY < 0 && scrollableElement.scrollTop > 0) return;
         if (e.deltaY > 0 && scrollableElement.scrollTop + scrollableElement.clientHeight < scrollableElement.scrollHeight - 1) return;
      }

      if (e.deltaY > 50) { // scroll down
        const currentIndex = routesOrder.indexOf(location.pathname);
        if (currentIndex >= 0 && currentIndex < routesOrder.length - 1) {
           isNavigating = true;
           setSlideDir('slide-left');
           navigate(routesOrder[currentIndex + 1]);
           scrollingTimeout = setTimeout(() => { isNavigating = false; }, 800);
        }
      } else if (e.deltaY < -50) { // scroll up
        const currentIndex = routesOrder.indexOf(location.pathname);
        if (currentIndex > 0) {
           isNavigating = true;
           setSlideDir('slide-right');
           navigate(routesOrder[currentIndex - 1]);
           scrollingTimeout = setTimeout(() => { isNavigating = false; }, 800);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
      clearTimeout(scrollingTimeout);
    };
  }, [location.pathname, navigate]);

  return (
    <div key={location.pathname} className={slideDir} style={{ width: '100%', height: '100%' }}>
      {children}
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main style={{ overflowX: 'hidden' }}>
          <ScrollHandlerManager>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </ScrollHandlerManager>
        </main>
      </div>
    </Router>
  );
}

export default App;
