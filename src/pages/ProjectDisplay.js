import React from 'react';
import { useParams } from 'react-router'; 
import { ProjectList } from '../seed/Projects';
import '../styles/Project.css'
import Git from '@material-ui/icons/GitHub'

export default function ProjectDisplay() {
    const { id } = useParams();
    const proj = ProjectList[id];
    return (
      <div className="project">
        <h1> {proj.name} </h1>
        <img src={proj.image} />
        <h3> 
        <b>Skills:</b> {proj.skills}
        </h3>
        <p> {proj.des} </p>
        <a href={proj.url} style={{textDecoration: 'none', color: '#03DAC5'}}> <Git style={{fontSize: '40px'}} /> </a>
      </div>
    );
  }
  

