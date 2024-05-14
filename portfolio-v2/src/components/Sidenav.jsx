import React, {useState} from 'react';
import {AiOutlineMenu, AiOutlineHome} from 'react-icons/ai';
import { TbStack2 } from "react-icons/tb";
import { FaLaptopCode } from "react-icons/fa";
import { PiListMagnifyingGlass } from "react-icons/pi";
import { BsSuitcaseLg } from "react-icons/bs";
import { IoSchoolOutline } from "react-icons/io5";
import { BsSend } from "react-icons/bs";


const Sidenav = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

  return (
    <div>
        <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] lg:hidden'/>
        {
            nav ? (
                <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20 overflow-y-auto'>
                    <a onClick={handleNav} href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                      <AiOutlineHome size={21} />
                      <span className='pl-4'>Home</span>
                    </a>
                    <a onClick={handleNav} href="#about" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                      <PiListMagnifyingGlass size={21} />
                      <span className='pl-4'>About Me</span>
                    </a>
                    <a onClick={handleNav} href="#stack" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <TbStack2 size={24} />
                        <span className='pl-4'>Tech Stack</span>
                    </a>
                    <a onClick={handleNav} href="#projects" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <FaLaptopCode size={24} />
                        <span className='pl-4'>Projects</span>
                    </a>
                    <a onClick={handleNav} href="#experience" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <BsSuitcaseLg size={20} />
                        <span className='pl-4'>Experience</span>
                    </a>
                    <a onClick={handleNav} href="#education" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <IoSchoolOutline size={24} />
                        <span className='pl-4'>Education</span>
                    </a>
                    <a onClick={handleNav} href="#contact" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <BsSend size={20} />
                        <span className='pl-4'>Contact Me</span>
                    </a>
                </div>
            )
            : (
            ''
            )}
            <div className='lg:block hidden fixed top-[25%] z-10 overflow-y-auto'>
                <div className='flex flex-col'>
                    <a href="#main" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <AiOutlineHome size={20}/>
                    </a>
                    <a href="#about" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <PiListMagnifyingGlass size={20}/>
                    </a>
                    <a href="#stack" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <TbStack2 size={20}/>
                    </a>
                    <a href="#projects" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <FaLaptopCode size={20}/>
                    </a>
                    <a href="#experience" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <BsSuitcaseLg size={20}/>
                    </a>
                    <a href="#education" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <IoSchoolOutline size={20}/>
                    </a>
                    <a href="#contact" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <BsSend size={20}/>
                    </a>
                </div>
            </div>
    </div>
  );
};

export default Sidenav;