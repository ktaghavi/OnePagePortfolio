import React from 'react'

const WorkItem = ({year, name, title, duration, details}) => {
  return (
    <ol className='flex flex-col md:flex-row relative border-l border-stone-200 ml-4'>
        <li className='mb-10 ml-4'>
            <div className="absolute w-4 h-4 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white"/>
                <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
                    <span className='inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] '>{year}</span>
                    <span className='text-lg font-semibold text-[#001b5e]'>{name}</span>
                    <span className='my-1 text-sm font-semibold leading-none text-black'>{title}</span>
                    <span className='my-1 text-sm font-normal leading-none text-black'>{duration}</span>
                </p>
                <p className='my-2 text-base font-normal text-black'>{details}</p>
        </li>
    </ol>
  )
}

export default WorkItem