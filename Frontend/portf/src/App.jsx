import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main style={{ overflowX: 'hidden' }}>
          <div id="home"><Home /></div>
          <div id="skills"><Skills /></div>
          <div id="projects"><Projects /></div>
          <div id="experience"><Experience /></div>
          <div id="contact"><Contact /></div>
        </main>
      </div>
    </Router>
  );
}

export default App;
