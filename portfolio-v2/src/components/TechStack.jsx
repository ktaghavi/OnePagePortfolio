import React from 'react';
import JS_logo from '../assets/JS_logo.svg';
import Python_logo from '../assets/Python_logo.png';
import HTML_logo from '../assets/HTML_logo.svg';
import CSS_logo from '../assets/CSS_logo.svg';
import SQL_logo from '../assets/SQL_logo.png';
import React_logo from '../assets/React_logo.png';
import Flask_logo from '../assets/Flask_logo.png';
import Tailwind_logo from '../assets/Tailwind_logo.png';
import Figma_logo from '../assets/Figma_logo.png';
import VSC_logo from '../assets/VSC_logo.png';

const skills = [
  {
    category: "Languages",
    items: [
        { name: "Python", url: "https://docs.python.org/3//", logo: Python_logo },
        { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", logo: JS_logo },
        { name: "HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML", logo: HTML_logo },
        { name: "CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS", logo: CSS_logo },
        { name: "SQL", url: "https://developer.mozilla.org/en-US/docs/Glossary/SQL", logo: SQL_logo }
    ],
  },
  {
    category: "Frameworks & Tools",
    items: [
        { name: "React", url: "https://react.dev/", logo: React_logo },
        { name: "Flask", url: "https://flask.palletsprojects.com/en/3.0.x/", logo: Flask_logo },
        { name: "TailwindCSS", url: "https://tailwindcss.com/", logo: Tailwind_logo },
        { name: "Figma", url: "https://www.figma.com/", logo: Figma_logo },
        { name: "VSCode", url: "https://code.visualstudio.com/", logo: VSC_logo }
    ],
  }
];

const TechStack = () => {
    return (
      <div id="stack" className="max-w-[1040px] mx-auto md:pl-20 p-4 py-16 text-center">
        <h2 className="text-4xl font-bold text-[#001b5e] mb-4">Tech Stack</h2>
        <div className="flex flex-wrap justify-center items-start">
          {skills.map((skillCategory, index) => (
            <div key={index} className="bg-white shadow-md rounded p-4 m-2 flex-auto min-w-[300px] max-w-[calc(50%-1rem)] md:max-w-[calc(33.333%-1rem)]">
              <h3 className="text-xl text-center font-semibold">{skillCategory.category}</h3>
              {skillCategory.items.map((item, itemIndex) => (
                <a key={itemIndex} href={item.url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center m-4">
                  <img src={item.logo} alt={`${item.name} logo`} className="h-16 w-16 object-contain mb-2 cursor-pointer hover:scale-110 ease-in duration-150" />
                  <span className="text-sm text-center font-semibold">{item.name}</span>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
export default TechStack;