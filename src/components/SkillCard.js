import React, { useState } from "react";
import { skills } from "../data";
import '../App.css'

export default function SkillCard(params) {


    const [isShown, setIsShown] = useState(false);
    const [isSkillArray, setSkillArray] = useState([])

    function setSkillsDisplay(skill) {
        console.log(isSkillArray);
        setIsShown(true)
        setSkillArray(skill.skill.skills)

    }

    
  return (
    <div className='skillContainer d-flex flex-column'> 
        <div>
        {skills.map((skill) => {
            return (
            <span onMouseEnter={(e) => setSkillsDisplay({skill}) } onMouseLeave={() => setIsShown(false)} key={skill.title} className=" border border-white rounded text-decoration-none m-1 p-2"> {skill.title} </span>
            );
        })}

        </div>
        <br></br>
        {isShown && (
        <div className='d-flex flex-column m-1 p-1 align-text-center'>
          {isSkillArray.map((each) => {
              return (
                  <h5 className="m-1">{each}</h5>
              )
          })}
        </div>
      )}

    </div>  
  );
}
