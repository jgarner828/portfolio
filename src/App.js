import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Main from './components/Main'

function App() {

  
  return (
    
      <main className="main">
        <Navbar className='navbarContainer'/>
        <Main className="mainContainer" />
        <About className='aboutContainer'/>
        <Projects className='projectsContainer'/>
        <Skills className='skillsContainer'/>
        <Contact className='contactContainer'/>
      </main> 
  );
}

export default App;
