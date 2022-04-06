import React from 'react';
import { projects } from '../data';

const styles = { 
  "background-color": "white",
  "margin": "0, 1rem, 0, 1rem"
}

export default function Projects(props) {

  
  return (
    <section id="projects">
      <div className='text-center rounded-pill'>
        <div>
          <h1 className='m-0'>Projects</h1>
        </div>

        <div>
          {projects.map((project) => (


              <a href={project.heroku || project.link} key={project} className='m-2 p-2 text-decoration-none link-secondary rounded' target="_blank" rel="noopener noreferrer">
                <div style={styles} className='project card m-2 p-2 border border-solid rounded'>
                  <h1 style={styles} className='project card-title'>{project.title}</h1>
                  <p style={styles} className='project card-text'>{project.subtitle}</p>
                  <p style={styles} className='project card-text'>{project.description}</p>
                </div>
              </a>

          ))}
        </div>
        
      </div>
      <br></br>
    </section>
  );
}