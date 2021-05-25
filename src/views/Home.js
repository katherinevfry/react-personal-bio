import React from 'react';
import styled from 'styled-components';
import gradientbg from '../assets/gradientbg.jpg';
import katyvfry from '../assets/katyvfry.png';
import katypic from '../assets/katypic.png';
import Bio from '../components/Bio';
import Projects from './Projects';
import Technologies from './Technologies';

const HeroDiv = styled.div`
background-image: url(${gradientbg});
background-size: cover;
background-attachment: fixed;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
width: 96%;
margin-left: 20px;
margin-right: 20px;
margin-top: 65px;
border-radius: 25px;
`;

const imgStyle = {
  width: '40%',
  height: '40%',
  margin: '20px',
  borderRadius: '25px'
};

export default function Home() {
  return (
    <div>
      <HeroDiv>
        <img src={katyvfry} width='40%' margin='20px'></img>
        <img src={katypic} style={imgStyle}></img>
      </HeroDiv>
      <Bio />
      <Projects />
      <Technologies />
    </div>
  );
}
