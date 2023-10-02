import React from 'react';
import {VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css' 
import SchoolIcon from '@material-ui/icons/School'
import '../styles/Experiences.css'
import WorkIcon from '@material-ui/icons/Work'


export default function experiences() {
    return (
      <div className="experiences">
        <VerticalTimeline lineColor='#626161'>
            <VerticalTimelineElement 
                className='vertical-timeline-element--work' 
                date='2018'
                dateClassName='date'
                contentStyle={{ background: '#2f2f2f', color: '#fff' }}
                contentArrowStyle={{ borderRight: '10px solid  #2f2f2f' }}
                iconStyle={{ background: '#2f2f2f', color: '#03DAC5' }}
                icon={<WorkIcon />} 
                >
                <h3 className='vertical-timeline-element-title'>
                Auto Repair Intern, Armstrong Automotive Repair and Service, 
                </h3>
                <h4 className='vertical-timeline-element-subtitle'> Ardmore, PA  </h4>
                <p> Worked in Auto Repair shop assisting mechanics working on all types of vehicles </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement 
                className='vertical-timeline-element--work' 
                date='2016 - 2020'
                dateClassName='date'
                contentStyle={{ background: '#2f2f2f', color: '#fff' }}
                contentArrowStyle={{ borderRight: '10px solid  #2f2f2f' }}
                iconStyle={{ background: '#2f2f2f', color: '#03DAC5' }}
                icon={<SchoolIcon />} 
                >
                <h3 className='vertical-timeline-element-title'>
                    Benjamin Franklin international School of Barcelona 
                </h3>
                <h4 className='vertical-timeline-element-subtitle'> Barcelona, Spain  </h4>
                <p>International Baccalaureate Diploma </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement 
                className='vertical-timeline-element--education' 
                date='Summer 2019'
                contentStyle={{ background: '#2f2f2f', color: '#fff' }}
                contentArrowStyle={{ borderRight: '10px solid  #2f2f2f' }}
                iconStyle={{ background: '#2f2f2f', color: '#03DAC5' }}
                icon={<SchoolIcon />} 
                >
                <h3 className='vertical-timeline-element-title'>
                Tandon School of Engineering Summer Program for Automation, Robotics and Coding
                </h3>
                <h4 className='vertical-timeline-element-subtitle'>  New York, New York  </h4>
                <p> Summer camp on the NYU Tandon Cammpus learning about the basics of robotics, mechatronics and programming.
                Used Arduinos to program mobile robotics which were later tested in a race, object detection, and object picking up and moving. </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement 
                className='vertical-timeline-element--education' 
                date='Summer 2019'
                contentStyle={{ background: '#2f2f2f', color: '#fff' }}
                contentArrowStyle={{ borderRight: '10px solid  #2f2f2f' }}
                iconStyle={{ background: '#2f2f2f', color: '#03DAC5' }}
                icon={<SchoolIcon />} 
                >
                <h3 className='vertical-timeline-element-title'>
                UPenn iD Tech Summer Program Develop and Code Games with C++
                </h3>
                <h4 className='vertical-timeline-element-subtitle'>  Philadelphia, PA  </h4>
                <p> Participated in a summer camp focused on game programming with C++. 
                Successfully completed a final project involving the creation of a Pong game, featuring a sophisticated
                 game menu, multiple levels, and progressively challenging gameplay. This experience showcased my proficiency
                  in programming and game development. </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement 
                className='vertical-timeline-element--education' 
                date='2020 - 2022'
                contentStyle={{ background: '#2f2f2f', color: '#fff' }}
                contentArrowStyle={{ borderRight: '10px solid  #2f2f2f' }}
                iconStyle={{ background: '#2f2f2f', color: '#03DAC5' }}
                icon={<SchoolIcon />} 
                >
                <h3 className='vertical-timeline-element-title'>
                University Of Miami 
                </h3>
                <h4 className='vertical-timeline-element-subtitle'>  Miami, Florida  </h4>
                <p>International Baccalaureate Diploma </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement 
                className='vertical-timeline-element--work' 
                date='2020 - 2022'
                contentStyle={{ background: '#2f2f2f', color: '#fff' }}
                contentArrowStyle={{ borderRight: '10px solid  #2f2f2f' }}
                iconStyle={{ background: '#2f2f2f', color: '#03DAC5' }}
                icon={<WorkIcon />} 
                >
                <h3 className='vertical-timeline-element-title'>
                Apprentice Installer, Afontcork
                </h3>
                <h4 className='vertical-timeline-element-subtitle'>  Barcelona, Spain  </h4>
                <p> Worked on construction crew assigned to home remodeling project </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement 
                className='vertical-timeline-element--education' 
                date='2022 - 2025'
                contentStyle={{ background: '#2f2f2f', color: '#fff' }}
                contentArrowStyle={{ borderRight: '10px solid  #2f2f2f' }}
                iconStyle={{ background: '#2f2f2f', color: '#03DAC5' }}
                icon={<SchoolIcon />} 
                >
                <h3 className='vertical-timeline-element-title'> Northeastern University </h3>
                <h4 className='vertical-timeline-element-subtitle'>  Boston, Massachusettes  </h4>
                <p> Bachelors of Science in Computer Engineering</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement 
                className='vertical-timeline-element--education' 
                date='Summer 2022'
                contentStyle={{ background: '#2f2f2f', color: '#fff' }}
                contentArrowStyle={{ borderRight: '10px solid  #2f2f2f' }}
                iconStyle={{ background: '#2f2f2f', color: '#03DAC5' }}
                icon={<SchoolIcon />} 
                >
                <h3 className='vertical-timeline-element-title'> Ironhack Web Development Bootcamp </h3>
                <h4 className='vertical-timeline-element-subtitle'> Berlin, Germany  </h4>
                <p>Web Development Full Time Bootcamp Certificate</p>
            </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    );
  }
  