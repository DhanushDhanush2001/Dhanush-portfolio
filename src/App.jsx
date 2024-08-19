import React from "react"
import './App.css';
import { ThemeProvider } from "styled-components";
import Navbar from './components/Navbar/Navbar.jsx';
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from "styled-components";
import { darkTheme, lightTheme } from './utils/Themes.js';
import Hero from './components/HeroSection/Hero.jsx';
import Skills from './components/Skills/Skills.jsx';
import Projects from "./components/Project/Project.jsx";
import Footer from './components/Footer/Footer.jsx';
import Contact from './components/Contact/Contact.jsx';
import Education from './components/Education/Education.jsx';
import ProjectDetails from "./components/ProjectDetails/ProjectDetails.jsx";
import Experience from './components/Experiences/Experience.jsx';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%)`;

function App() {
  const [darkMode] = useState(true);
  const[openModal,setOpenModel] = useState({ state: false, project: null });
  console.log(openModal)

  return (
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Router>
        <Navbar/>
        <Body>
          <Hero/>
          <Wrapper>
           <Skills/>
           <Experience/>
          </Wrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModel} />
          <Wrapper>
            <Education/>
             <Contact/>
          </Wrapper>
          <Footer/>
          {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModel} />
          }
        </Body>
        </Router>
        </ThemeProvider>
      );
}

export default App;

