import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './Styles/GlobalStyles'
import theme from './Styles/theme';
import Header from './Component/Header';
import Hero from './Component/Hero';
import  About  from './Component/About';
import Projects from './Component/Projects';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import Gallery from './Component/Gallery';


const projectsData = [
  {
    title: 'Project 1',
    description: 'Description for project 1',
    link: '#',
  },
  {
    title: 'Project 2',
    description: 'Description for project 2',
    link: '#',
  },
  // Add more projects as needed
];

const App = () => (
  <ThemeProvider theme={theme} >
    <GlobalStyles />
    <Hero />
    <About />
   
      <Contact />
      <Gallery />
     <Footer />
  </ThemeProvider>
);

export default App;
