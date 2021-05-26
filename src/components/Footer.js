import React from 'react';
import styled from 'styled-components';
import floralflipped from '../assets/floralflipped.jpg';

const FooterDiv = styled.div`
background-image: url(${floralflipped});
background-size: cover;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
width: 96%;
margin: auto;
margin-bottom: 20px;
border-bottom-left-radius: 25px;
border-bottom-right-radius: 25px;
color: #fffbf0;
`;

const ContactDiv = styled.div`
width: 300px;
`;

const SocialDiv = styled.div`
width: 300px;
`;

export default function Footer() {
  return (
    <div>
      <FooterDiv>
        <h1>contact me</h1>
        <ContactDiv>
          <ul>
            <li>(417) 718-7977</li>
            <li>katyvfry@gmail.com</li>
            <li>github</li>
          </ul>
        </ContactDiv>
        <SocialDiv>
          <ul>
            <li>instagram</li>
            <li>linkedin</li>
          </ul>
        </SocialDiv>
      </FooterDiv>
    </div>
  );
}
