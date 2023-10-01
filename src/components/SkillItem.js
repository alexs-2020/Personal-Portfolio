import React from "react";
import ProgressBar from "./Progbar";


export default function SkillItem({ image, name, level}) {
  const bgColor = level < 50 ? 'orange' : 'green';
    return (
      <div className="skillItem">
        <div style={{backgroundImage: `url(${image})`}} className="skillImage" > </div>
        <h1> {name} </h1>
        <ProgressBar bgcolor= {bgColor}  progress={level} height={30} />
      </div>
    );
}


