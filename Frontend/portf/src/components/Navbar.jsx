import { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [activeId, setActiveId] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Work Experience' },
    { id: 'contact', label: 'Contact Me' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      let current = 'home';
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Check if section is visible in top portion of viewport
          if (rect.top <= window.innerHeight * 0.3 && rect.bottom >= window.innerHeight * 0.3) {
            current = link.id;
          }
        }
      }
      setActiveId(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // Close menu after clicking on mobile
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container" style={{ maxWidth: '100%', paddingLeft: '2%' }}>
        <div 
          onClick={() => scrollToId('home')} 
          className="navbar-logo"
          style={{ cursor: 'pointer', marginRight: 'auto' }}
        >
        Tushar's Workspace :.
        </div>
        
        {/* Hamburger Menu Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={menuOpen ? "bar open" : "bar"}></div>
          <div className={menuOpen ? "bar open" : "bar"}></div>
          <div className={menuOpen ? "bar open" : "bar"}></div>
        </div>

        <ul className={menuOpen ? "nav-menu active-mobile" : "nav-menu"}>
          {navLinks.map((link) => (
            <li key={link.id} className="nav-item">
              <span
                onClick={() => scrollToId(link.id)}
                className={activeId === link.id ? 'nav-link active' : 'nav-link'}
                style={{ cursor: 'pointer' }}
              >
                {link.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
