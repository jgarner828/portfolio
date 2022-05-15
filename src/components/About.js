import React from 'react';


const styles = {
  'background-color': 'white',
  'margin': '2rem',
  'padding': '0',
  'color': '#031946'
}


export default function About(props) {
  
  
  return (
    <section id="about" style={styles} className='d-flex flex-column justify-content-center border border-solid'>

      <h1 style={styles} className='display-text text-center text-grey'>About Me</h1>
      <p style={styles} className='align-text-center rounded-pill'>Full Stack Web Developer, passionate about programming. Started learning my first programming language, C++, at the age of 12.  Extended experience working with multiple operating systems and programming languages. Graduate of Georgia Tech Full Stack Web Development program. After enlisting in the United States Marine Corps in 2008, spent 4 years as a Project Manager overseeing high value commercial development projects. Served as Chief Engineer and later promoted to an Assistant Director of Engineering. Responsible as an expert in commercial building development and engineering, working with building management and equipment control systems.  Pursued degree in mechanical engineering before redirecting to full stack web development. Career goal is to continue growing as a developer and become more proficient in writing maintainable and efficient code. Experienced with project management and working in team environments. Strong attention to detail and goal oriented.</p>

    </section>
  );
};