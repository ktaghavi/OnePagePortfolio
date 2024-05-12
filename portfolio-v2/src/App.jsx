import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import AboutMe from './components/AboutMe'
import TechStack from './components/TechStack'
import Work from './components/Work'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'


function App() {

  return (
      <div>
        <Sidenav />
        <Main />
        <AboutMe />
        <TechStack />
        <Work />
        <Projects />
        <Education />
        <Contact />
      </div>

  )
}

export default App
