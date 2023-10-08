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
        <div className='aboutMe'>
          <h1 className='aboutSelf'> About Me</h1>
          <hr className='line'></hr>
          <p>  I was born and raised in Philadelphia within a multicultural family,
           where three languages were spoken at home. I pursued my education and 
           lived in Barcelona for three years, gaining valuable international experience. 
           From a young age, I had the privilege of traveling around the world, attending
            the Olympic Games in Beijing, London, and Rio, and extensively exploring regions 
            in Central America and South Asia. Currently, I am furthering my academic pursuits 
            this semester in Australia. My passion lies in engaging with individuals from diverse
             cultural and social backgrounds, fostering a deep appreciation for global perspectives 
             and experiences.
           </p> 
            <h1 className='lookingFor'>What I am Looking For</h1>
            <hr className='line'></hr>
            <p>  As a dedicated student pursuing a bachelor's degree in Computer Engineering at 
          Northeastern University, I am deeply enthusiastic about programming and robotics.
           My approach to learning is inherently hands-on and practical, fueling my eagerness
            to actively participate in projects that involve programming, hands-on activities,
             and assembly work. </p>            
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


        
  //       As a dedicated student pursuing a bachelor's degree in Computer Engineering at 
  //       Northeastern University, I am deeply enthusiastic about programming and robotics.
  //       My approach to learning is inherently hands-on and practical, fueling my eagerness
  //       to actively participate in projects that that involves not only programming but also hands-on 
  //   activities and assembly work.
  //       and I am eager to 
  //   engage in work I am particularly interested in software development roles 
  //   that enable me to leverage my strong attention to detail, problem-solving skills, time-managment
  //    and resilience.
     
  //    My multicultural upbringing sparked my lifelong yearning to travel and live in 
  //  other countries in the world. From living and studying in Barcelona, Spain 
  //  to traveling around Europe including spending a whole summer in Berlin, Germany,
  //   to attending the Olympic Games in Beijing, London, and Rio, to experiencing the 
  //   Mayan and Incan cultures in Central America, to embarking on a month-long trip
  //    around South Asia, to spending this semester in Australia. Through my travels,
  //     I have had the chance to interact with people from various cultures, religions,
  //      and customs which has broadened my understanding of the world and enriched 
  //      my personal growth.