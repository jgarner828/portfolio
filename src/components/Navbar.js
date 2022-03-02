import React from 'react';

class Navbar extends React.Component {
  render() {
    
    return (
        <header className='container-fluid d-flex flex-row align-items-center justify-content-between border-bottom'>
          <h2 className='m-2 p-2'>Justin Garner</h2>
          <ul className='d-flex'>
              <a href="#about" className='m-2 p-2 text-decoration-none'>About Me</a>
              <a href="#projects" className='m-2 p-2 text-decoration-none'>Projects</a>
              <a href="#skills" className='m-2 p-2 text-decoration-none'>Skills</a>
              <a href="#contact" className='m-2 p-2 text-decoration-none'>Contact</a>
          </ul>
        </header>
      );
    }
}



export default Navbar;