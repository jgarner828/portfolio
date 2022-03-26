import React from 'react';
import { projects } from '../data';



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
                <div className='project m-2 p-2 border border-solid rounded'>
                  <h1 className='project'>{project.title}</h1>
                  <p className='project'>{project.subtitle}</p>
                  <p className='project'>{project.description}</p>
                </div>
            </a>


          ))}
        </div>
        
      </div>
      <br></br>
    </section>
  );
}