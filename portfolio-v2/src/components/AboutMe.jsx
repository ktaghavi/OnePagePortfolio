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
          Hello, I'm Kamyar Taghavi a driven software engineer with a solid foundation from Flatiron's coding bootcamp, now deep-diving into advanced development techniques through projects and specialized courses. Each day is dedicated to coding and seeking opportunities where I can contribute significantly, leveraging my technical proficiency and diverse life experiences.
        </p>
  
        <p className="text-gray-600 text-lg my-4">
          {/* I enjoy building applications that solve real-world problems and exploring new technologies. My experience as a chef in the hospitality industry has taught me valuable leadership skills and how to effectively communicate with team members. I also enjoy nature, spending time with family, and music. You can reach me via email, connect with me on LinkedIn, view my GitHub page, and checkout my resume using the links below. */}
        </p>
          <div className='flex justify-around pt-6 max-w-[200px] mx-auto'>
            <a href="mailto:taghavi.kamyar@live.com" target="_blank" rel="noopener noreferrer">
                <MdOutlineEmail className='cursor-pointer' size={20}/>
            </a>
            <a href="https://calendly.com/kamyart" target="_blank" rel="noopener noreferrer">
                <SiCalendly className='cursor-pointer' size={20}/>
            </a>
            <a href="www.linkedin.com/in/kamyar-taghavi" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className='cursor-pointer' size={20}/>
            </a>
            <a href="https://github.com/ktaghavi" target="_blank" rel="noopener noreferrer">
                <IoLogoGithub className='cursor-pointer' size={20}/>
            </a>
            <a href="https://medium.com/@kaspr.kt" target="_blank" rel="noopener noreferrer">
                <FaMedium className='cursor-pointer' size={20}/>
            </a>
            <a href="https://twitter.com/Crypt0Kam" target="_blank" rel="noopener noreferrer">
                <FaSquareXTwitter className='cursor-pointer' size={20}/>
            </a>
            </div>
        <div className="mt-8">
          <a href={Resume} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300">
            View Resume/CV
          </a>
        </div>
      </div>
    );
  };
  
  export default AboutMe;