import React from 'react';
import Header from './Header';
import '../Styles/HeroStyles.css'

const Hero = () => (
  <div className='HeroContainer'>
     <Header />
    <div className='HeroText'>
      <h4 className='Title'>Hi, <br /> I'm Sk Abdus Shahid</h4> <br />
      <h6 className='Subtitle'>MERN Stack Developer</h6>
    </div>
  </div>
);

export default Hero;
