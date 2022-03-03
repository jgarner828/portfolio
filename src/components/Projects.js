import React from 'react';
import { projects } from '../data';

class Projects extends React.Component {
  render() {
    
     return (
        <section id="projects">
          <div className='text-center text-grey'>
            <div>
              <h1>Projects</h1>
            </div>

            <div>
              {projects.map((project) => (
                <a href={project.link} key={project} className='m-2 p-2 text-decoration-none link-secondary'>
                    <div className='m-2 p-2 border border-solid'>
                      <h1>{project.title}</h1>
                      <p>{project.subtitle}</p>
                      <p>{project.description}</p>
                    </div>
                </a>
              ))}
            </div>
            
          </div>
        </section>
      );
  }
}



export default Projects;