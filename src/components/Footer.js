import React from 'react';
import styled from 'styled-components';
import footerbg from '../assets/footerbg.jpg';

const FooterDiv = styled.div`
background-image: url(${footerbg});
background-size: cover;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
width: 96%;
margin-left: 20px;
margin-right: 20px;
margin-top: 65px;
margin-bottom: 20px;
border-radius: 25px;
`;

const ContactDiv = styled.div`
width: 300px;
height: 300px;
`;

const SocialDiv = styled.div`
width: 300px;
height: 300px;
`;

export default function Footer() {
  return (
    <div>
      <FooterDiv>
        <h1>Contact Me</h1>
        <ContactDiv>
          <ul>
            <li>phone</li>
            <li>email</li>
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
