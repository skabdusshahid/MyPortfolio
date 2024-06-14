import React, { useState } from 'react';
import styled from 'styled-components';
import AbImg from '../assets/Ab.png'

const HeaderContainer = styled.header`
  width:100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  background: rgba(199, 166, 120, 0.5);
  
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
     background: rgba(199, 166, 120, 0.1);
     font-size:10px
  }
  
`;

// const Logo = styled.h1`
//   margin: 0;
//   color: ${({ theme }) => theme.colors.text};
//   font-size: 1.5rem;
// `;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 58px;
      right: 0; 
    width: 100%;
    background: rgba(255, 255, 255, 0.8);
    padding: 10px 50px;
    gap: 10px;
      align-items: flex-end; 
        
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  text-decoration: none;
  transition: color 0.3s;
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const ToggleButton = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
    div {
      width: 25px;
      height: 3px;
      background-color: ${({ theme }) => theme.colors.text};
      margin: 5px 0;
    }
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div>
          <img style={{ width: '35px', height: '35px', border: "2px solid black", borderRadius: '25px' }} src={AbImg} alt="" />
        </div>
        <div style={{ paddingLeft: "10px" }}><h2>Sk Abdus Shahid</h2></div>
      </div>
      <ToggleButton onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </ToggleButton>
      <Nav isOpen={isOpen}>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
