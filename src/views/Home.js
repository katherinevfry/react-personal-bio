import React from 'react';
import styled from 'styled-components';
import western from '../assets/western.jpg';
import newLogo from '../assets/newestBg.png';
import mobileHeader from '../assets/mobileHeader.png';
import Bio from '../components/Bio';
import Projects from './Projects';
import Technologies from './Technologies';
import Footer from '../components/Footer';

const HeroDiv = styled.div`
background-image: url(${western});
background-size: cover;
background-attachment: fixed;
background-position: center
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
width: 96%;
height: 30rem;
margin: 0 auto;
margin-top: 65px;
border-top-right-radius: 25px;
border-top-left-radius: 25px;
@media only screen and (max-width: 600px) {
  background-image: url(${mobileHeader});
  background-position: center;
  height: 80%;
}
`;

export default function Home() {
  return (
    <div>
      <HeroDiv>
        <img id='logoImg' src={newLogo}></img>
      </HeroDiv>
      <Bio />
      <Projects />
      <Technologies />
      <Footer />
    </div>
  );
}
