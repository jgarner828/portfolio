import React from 'react';

class Navbar extends React.Component {
  render() {
    
    return (
        <header className='container-fluid d-flex flex-row align-items-center justify-content-between border-bottom'>
          <h2 className='m-2 p-2'>Justin Garner</h2>
          <ul className='d-flex'>
              <a href="#about" className='m-2 p-2 text-decoration-none link-secondary'>About Me</a>
              <a href="#projects" className='m-2 p-2 text-decoration-none link-secondary'>Projects</a>
              <a href="#skills" className='m-2 p-2 text-decoration-none link-secondary'>Skills</a>
              <a href="#contact" className='m-2 p-2 text-decoration-none link-secondary'>Contact</a>
          </ul>
        </header>
      );
    }
}



export default Navbar;