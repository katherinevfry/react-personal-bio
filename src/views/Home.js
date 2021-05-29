import React from 'react';
import styled from 'styled-components';
import floral from '../assets/floralflipped.jpg';
import katyvfry from '../assets/katyvfry.png';
import Bio from '../components/Bio';
import Projects from './Projects';
import Technologies from './Technologies';
import Footer from '../components/Footer';

const HeroDiv = styled.div`
background-image: url(${floral});
background-size: cover;
background-attachment: fixed;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
width: 96%;
margin: 0 auto;
margin-top: 65px;
border-top-right-radius: 25px;
border-top-left-radius: 25px;
@media only screen and (max-width: 600px) {
  height: 90vh;
  backgound-size: contain;
}
`;

export default function Home() {
  return (
    <div>
      <HeroDiv>
        <img id='logoImg' src={katyvfry}></img>
      </HeroDiv>
      <Bio />
      <Projects />
      <Technologies />
      <Footer />
    </div>
  );
}
