import React from 'react'
import ProjectItem from './ProjectItem.jsx'
import toonRater from '../assets/Toon_Rater.png'
import cyberCasino from '../assets/Cyber_Casino.png'
import mmaMystic from '../assets/MMA_Mystic.png'

const projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={toonRater} title='Toon Rater'/>
            <ProjectItem img={cyberCasino} title='Cyber Casino'/>
            <ProjectItem img={mmaMystic} title='MMA Mystic'/>
        </div>
    </div>
  )
}

export default projects