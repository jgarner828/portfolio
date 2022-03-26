import React, { useState } from 'react';
import { skills } from '../data';
import SkillCard from './SkillCard';





export default function Skills() {


      return (
        <section id="skills" className='border border-solid text-center m-1 p-1 h-75'>

            <div>
              <h1 className='m-2 p-1'>Skills &amp; Technologies</h1>
            </div>

              <SkillCard />
        </section>
      );
}
