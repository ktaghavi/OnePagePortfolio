import React from 'react'
import profile_pic from '../assets/profile_pic.png'
import { FaSquareXTwitter, FaMedium  } from "react-icons/fa6";
import {FaLinkedinIn} from 'react-icons/fa'
import { MdOutlineEmail } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { SiCalendly } from "react-icons/si";
import Resume from '../assets/Resume.pdf'

const AboutMe = () => {
    return (
      <div id="about" className="max-w-[1040px] mx-auto md:pl-20 p-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-[#001b5e]">About Me</h1>
        <p className="text-center py-6"></p>
        <img
          src={profile_pic}
          alt="Profile Picture"
          className="w-64 h-64 rounded-full mx-auto mb-4 hover:scale-110 ease-in duration-200"
        />
        <p className="text-gray-700 text-xl my-4 py-4">
        Hello, I'm Kamyar Taghavi, a dynamic software engineer with a solid foundation from Flatiron's coding bootcamp, continuously advancing my skills through specialized projects and courses. I am dedicated to leveraging my coding expertise and business management background to create meaningful impact. Passionate about developing applications that tackle real-world problems using innovative technologies, I also bring leadership and communication skills honed during my tenure as a property manager in real estate. Outside of professional pursuits, I enjoy exploring nature, cherishing time with family, and delving into strategy games.        </p>
        <p className="text-gray-600 text-lg my-4">
        Please feel free to contact me via email, connect on LinkedIn, explore my GitHub projects, and read my insights on Medium. All relevant links to my professional profiles and Resume/CV are provided below:
        </p>
          <div className='flex justify-center pt-6 max-w-[200px] mx-auto gap-14 md:gap-8 sm:gap-4'>
            <a href="mailto:taghavi.kamyar@live.com" target="_blank" rel="noopener noreferrer">
                <MdOutlineEmail className='cursor-pointer hover:scale-110 ease-in duration-150' size={35}/>
            </a>
            {/* <a href="https://calendly.com/kamyart" target="_blank" rel="noopener noreferrer">
                <SiCalendly className='cursor-pointer hover:scale-110 ease-in duration-150' size={35}/>
            </a> */}
            <a href="www.linkedin.com/in/kamyar-taghavi" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className='cursor-pointer hover:scale-110 ease-in duration-150' size={35}/>
            </a>
            <a href="https://github.com/ktaghavi" target="_blank" rel="noopener noreferrer">
                <IoLogoGithub className='cursor-pointer hover:scale-110 ease-in duration-150' size={35}/>
            </a>
            <a href="https://medium.com/@kaspr.kt" target="_blank" rel="noopener noreferrer">
                <FaMedium className='cursor-pointer hover:scale-110 ease-in duration-150' size={35}/>
            </a>
            {/* <a href="https://twitter.com/Crypt0Kam" target="_blank" rel="noopener noreferrer">
                <FaSquareXTwitter className='cursor-pointer hover:scale-110 ease-in duration-150' size={35}/>
            </a> */}
            </div>
        <div className="mt-12">
          <a href={Resume} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline">
            View Resume/CV
          </a>
        </div>
      </div>
    );
  };
  
  export default AboutMe;