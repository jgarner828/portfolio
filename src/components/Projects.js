import React from 'react';
import { projects } from '../data';

class Projects extends React.Component {
  render() {
    
     return (
        <section id="projects">
          <div className='text-center'>
            <div>
              <h1 className='m-0'>Projects</h1>
            </div>

            <div>
              {projects.map((project) => (
                <a href={project.link} key={project} className='m-2 p-2 text-decoration-none link-secondary'>
                    <div className='project m-2 p-2 border border-solid'>
                      <h1 className='project'>{project.title}</h1>
                      <p className='project'>{project.subtitle}</p>
                      <p className='project'>{project.description}</p>
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