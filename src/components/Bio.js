import React from 'react';
import styled from 'styled-components';
import katypic from '../assets/katypic.png';

const BioDiv = styled.div`
background-color: #828572;
background-attachment: fixed;
width: 96%;
margin: 0 auto;
color: #fffbf0;
font-family: futura-pt,sans-serif;
font-weight: 400;
font-style: normal;
font-size: 18px;
padding: 20px;
border-bottom-left-radius: 25px;
border-bottom-right-radius: 25px;
`;

const InnerDiv = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`;

const TextDiv = styled.div`
  margin: 10px;
  text-align: center;
  width: 30rem;
`;

const EmStyled = styled.em`
  font-family: bookmania serif;
  font-weight: 700;
  fontstyle: italic;
`;

const ImgStyle = styled.img`
  width: 35rem;
  height: 35rem;
  margin: 20px;
  border-radius: 25px;
  @media only screen and (max-width: 600px) {
    width: 20rem;
    height: 20rem;
    margin: 20px;
    border-radius: 25px;
  }
`;

const H1Styled = styled.h1`
  text-align: center;
`;

export default function Bio() {
  return (
    <BioDiv>
      <H1Styled>about me</H1Styled>
      <InnerDiv>
        <ImgStyle src={katypic} />
        <TextDiv>
          <p>Hi there! My name is <EmStyled>Katy Fry</EmStyled>. I am a <EmStyled>designer</EmStyled> and <EmStyled>software engineer</EmStyled> who calls Nashville, TN home. </p>

          <p>I have always been fascinated by computers--I taught myself Photoshop and how to make Myspace templates back in the social media&apos;s heyday.</p>

          <p>I moved to Nashville from the Missouri Ozarks in 2010 to pursue a degree in Theology and English and began working as an Editor for a nonprofit publisher. After 8 years, I transitioned into the roll of Communications Director at a large church. This reignited my passion for graphic design, but I knew I wanted something more.</p>

          <p>Enter: Nashville Software School. I began the Part-Time Web Development program in January 2021. I quickly fell in love with code and how it allowed me to be both analytical and creative--uniting both my love of science and of art. I am now a contract software engineer who has worked on applications used by millions of people per month. I am so honored to get to do what I do. </p>

          <p>As a developer, I try to make everything I do both <EmStyled>functional</EmStyled> and <EmStyled>beautiful</EmStyled>. And foster that love in others as well!</p>
        </TextDiv>
      </InnerDiv>
    </BioDiv>
  );
}
