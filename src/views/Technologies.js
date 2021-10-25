import React from 'react';
// import Marquee from 'react-fast-marquee';
import styled from 'styled-components';
import {
  FaReact,
  FaHtml5
} from 'react-icons/fa';
import {
  SiJavascript,
  SiTailwindcss,
  SiSass,
  SiNextDotJs,
  SiStorybook,
  SiCsharp,
  SiDotnet,
  SiBugsnag,
  SiStyledComponents,
  SiPostman,
  SiFirebase,
  SiFigma,
  SiCanva,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiNetlify,
  SiMysql,
  SiGithub
} from 'react-icons/si';

const TechStyle = styled.div`
  text-align: center;
  background-color: #c5884d;
  width: 96%;
  margin: 0 auto;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;

const Icon = styled.h2`
  font-size: 5rem;
  margin: 20px;
  color: #fffbf0;
`;

const Header = styled.h1`
  color: #fffbf0;
`;

const Container = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: space-around;
width: 96%;
`;

export default function Technologies() {
  return (
    <TechStyle id='technologies'>
      <Header>technologies</Header>
      <Container>
        <Icon> <FaReact /> </Icon>
        <Icon> <SiJavascript /> </Icon>
        <Icon> <SiTailwindcss /> </Icon>
        <Icon> <SiSass /> </Icon>
        <Icon> <SiNextDotJs /> </Icon>
        <Icon> <SiStorybook /> </Icon>
        <Icon> <SiCsharp /> </Icon>
        <Icon> <SiDotnet /> </Icon>
        <Icon> <SiBugsnag /> </Icon>
        <Icon> <SiStyledComponents /> </Icon>
        <Icon> <FaHtml5 /> </Icon>
        <Icon> <SiPostman /> </Icon>
        <Icon> <SiFirebase /> </Icon>
        <Icon> <SiFigma /> </Icon>
        <Icon> <SiCanva /> </Icon>
        <Icon> <SiAdobephotoshop /></Icon>
        <Icon> <SiAdobeillustrator /> </Icon>
        <Icon> <SiNetlify /> </Icon>
        <Icon> <SiMysql /></Icon>
        <Icon> <SiGithub /> </Icon>
      </Container>
    </TechStyle>
  );
}
