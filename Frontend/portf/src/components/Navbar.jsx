import { useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { path: '/', label: 'Home' },
    // "About" is unlinked but file still remains
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/experience', label: 'Work Experience' },
    { path: '/contact', label: 'Contact Me' },
  ];

  return (
    <nav className="navbar">
      {/* Shift logo to extreme left while keeping within layout rules */}
      <div className="navbar-container" style={{ maxWidth: '100%', paddingLeft: '2%' }}>
        <div 
          onClick={() => navigate('/')} 
          className="navbar-logo"
          style={{ cursor: 'pointer', marginRight: 'auto' }}
        >
        Tushar's Workspace :.
        </div>
        <ul className="nav-menu">
          {navLinks.map((link) => (
            <li key={link.path} className="nav-item">
              <span
                onClick={() => navigate(link.path)}
                className={location.pathname === link.path ? 'nav-link active' : 'nav-link'}
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
