import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 20px;
  background: rgba(199, 166, 120, 0.5);
  color: black;
  text-align: center;
`;

const Footer = () => (
  <FooterContainer>
    <p>&copy; 2024 Sk Abdus Shahid. All rights reserved.</p>
  </FooterContainer>
);

export default Footer;
