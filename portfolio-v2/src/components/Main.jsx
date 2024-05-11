import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import {FaLinkedinIn} from 'react-icons/fa'
import { FaSquareXTwitter, FaMedium  } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { SiCalendly } from "react-icons/si";

const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover' src='https://images.unsplash.com/photo-1663187180926-e0278b18139a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>    
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50 flex justify-center items-center'>
        <div className='max-w-[700px] w-full text-center'>
            <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>Kamyar Taghavi</h1>
            <h2 className='justify-center flex sm:text-3xl text-2xl pt-4 text-gray-800'>
            <TypeAnimation
      sequence={[
        'Software Engineer 💻',
        1500, 
        'Tech Enthusiast 🦾',
        1500,
        'Wellness Advocate 🏋️',
        1500,
        'Outdoor Adventurer 🏕️',
        1500,
        'Avid Traveler ✈️',
        1500
      ]}
      wrapper='div'
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1em', paddingLeft: '5px' }}
    />
            </h2>
            <div className='flex justify-around pt-6 max-w-[200px] mx-auto'>
                <MdOutlineEmail />
                <SiCalendly />
                <FaLinkedinIn />
                <IoLogoGithub />
                <FaMedium />
                <FaSquareXTwitter />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Main