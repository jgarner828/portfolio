import React from 'react';
import { skills } from '../data';

class Skills extends React.Component {
  render() {
    
    return (
        <section id="skills" className=' border border-solid text-center'>

            <div>
              <h1>Skills &amp; Technologies</h1>
            </div>

            <ul className='list-group'>
              {skills.map((skill) => (
                    <li key={skill} className='text-decoration-none'>{skill.title}</li>
              ))}
            </ul>
            
        </section>
      );
  }
}



export default Skills;