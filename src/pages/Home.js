import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import '../styles/Home.css'
import {SkillList} from '../seed/Skills'
import SkillItem from '../components/SkillItem';
import BuildIcon from '@material-ui/icons/Build';


export default function Home() {
    return (
      <div className="home">
        <div className='about'>
          <h1> Hello, my name is Alex </h1>
          <div className='prompt'>
              <span>I </span>
              <span> enjoy </span>
              <span>to </span>
              <span>code </span>
              <span style={{color:'#03DAC5'}}> :) </span>  
            
          </div>
        </div>
        <div className='skills'>
          <h1> My Skills  &nbsp;  <BuildIcon style={{transform: 'scale(1.8)', color: '#03DAC5'}}/>  </h1>
          <div className="skillList"> 
            {SkillList.map((skill) => {
              return <SkillItem level={skill.level} name={skill.name} image={skill.image} />
            })}
          </div>
        </div>
      </div>
    );
  }
  

        // <ol className='list'>
        //     <li className='item'>
        //         <h2> Frontend Banger </h2>
        //         <span> ReactJs, HTML, CSS, NPM </span>
        //     </li>
        //     <li className='item'>
        //       <h2>Languages </h2>
        //       <span> Javascript, Java, C++, Python, CSS </span>
        //     </li>
        //   </ol>