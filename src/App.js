import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {

  
  return (
    
      <main className="main">
        <Navbar className='navbarContainer'/>
        <About className='aboutContainer'/>
        <Projects className='projectsContainer'/>
        <Skills className='skillsContainer'/>
        <Contact className='contactContainer'/>
      </main> 
  );
}

export default App;
