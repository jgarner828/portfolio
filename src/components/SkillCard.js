import React, { useState } from "react";
import { skills } from "../data";

export default function SkillCard(params) {


    const [isShown, setIsShown] = useState(false);
    const [isSkillArray, setSkillArray] = useState([])

    function setSkillsDisplay(skill) {
        console.log(isSkillArray);
        setIsShown(true)
        setSkillArray(skill.skill.skills)

    }

  return (
    <div className='d-flex flex-column'> 
        <div>
        {skills.map((skill) => {
            return (
            <span onMouseEnter={(e) => setSkillsDisplay({skill}) } onMouseLeave={() => setIsShown(false)} key={skill.title} className="text-decoration-none m-1 p-1"> {skill.title} </span>
            );
        })}

        </div>

        {isShown && (
        <div className='d-flex flex-column m-1 p-1 align-text-center'>
          {isSkillArray.map((each) => {
              return (
                  <h5>{each}</h5>
              )
          })}
        </div>
      )}

    </div>  
  );
}
