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
            <div>
              <ProjectItem img={ToonRater} title='Toon Rater' demoLink='https://www.loom.com/share/7d5d7530ef3d4148b8c9d157f19b0d69?sid=718e6e00-c429-4eac-8366-028b562e2208' githubLink='https://github.com/ktaghavi/Toon-Rater'/>
            </div>
            <div>
              <ProjectItem img={cyberCasino} title='Cyber Casino' demoLink='https://www.loom.com/share/dabcd44c70484bd18fb1af7d0b12b088?sid=668dc5aa-3c16-46a1-ba1b-1df785ea8964' githubLink='https://github.com/ktaghavi/CyberCasino'/>
            </div>
            <div className='col-span-2 text-center' style={{ transform: 'scale(.8)' }}>
            <ProjectItem img={MMA_Mystic} title='MMA Mystic' demoLink='https://www.loom.com/share/d32565baabca40ed85a8611aa2a7a058?sid=2c81f9ed-c7cd-4252-aa6f-291376af91b7' githubLink='https://github.com/ktaghavi/MMA-Mystic'/>
            </div>
        </div>
    </div>
  )
}

export default projects;