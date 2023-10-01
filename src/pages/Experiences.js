import React from 'react';
import {VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css' 
import SchoolIcon from '@material-ui/icons/School'
import '../styles/Experiences.css'
import Location from '@material-ui/icons/LocationOn'
import WorkIcon from '@material-ui/icons/Cloud'


export default function experiences() {
    return (
      <div className="experiences">
        <VerticalTimeline lineColor='#626161'>
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
                date='2020 - 2022'
                contentStyle={{ background: '#2f2f2f', color: '#fff' }}
                contentArrowStyle={{ borderRight: '10px solid  #2f2f2f' }}
                iconStyle={{ background: '#2f2f2f', color: '#03DAC5' }}
                icon={<Location />} 
                >
                <h3 className='vertical-timeline-element-title'>
                University Of Miami 
                </h3>
                <h4 className='vertical-timeline-element-subtitle'>  Miami, Florida  </h4>
                <p>International Baccalaureate Diploma </p>
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
            <VerticalTimelineElement 
                className='vertical-timeline-element--education' 
                date='2016-2020'
                contentStyle={{ background: '#2f2f2f', color: '#fff' }}
                contentArrowStyle={{ borderRight: '10px solid  #2f2f2f' }}
                iconStyle={{ background: '#2f2f2f', color: '#03DAC5' }}
                icon={<SchoolIcon />} 
                >
                <h3 className='vertical-timeline-element-title'>
                BFIS Barcelona, Spain
                </h3>
                <p> International Baccealaeruate Diploma </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement 
                className='vertical-timeline-element--education' 
                date='2016-2020'
                iconStyle={{background:'red', color:'black'}}
                icon={<SchoolIcon />} 
                >
                <h3 className='vertical-timeline-element-title'>
                BFIS Barcelona, Spain
                </h3>
                <p> International Baccealaeruate Diploma </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    );
  }
  


