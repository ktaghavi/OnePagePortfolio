import React from 'react'
import ProjectItem from './ProjectItem.jsx'
import ToonRater from '../assets/ToonRater.png'
import cyberCasino from '../assets/Cyber_Casino.png'
import MMA_Mystic from '../assets/MMA_Mystic.jpg'

const projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] mx-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className="text-center py-8"></p>
        <div className='grid sm:grid-cols-2 gap-16'>
            <ProjectItem img={ToonRater} title='Toon Rater'/>
            <ProjectItem img={cyberCasino} title='Cyber Casino'/>
            <ProjectItem img={MMA_Mystic} title='MMA Mystic'/>
        </div>
    </div>
  )
}

export default projects