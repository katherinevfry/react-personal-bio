import React from 'react';
import styled from 'styled-components';

const BioDiv = styled.div`
background-color: #333811;
background-attachment: fixed;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
width: 96%;
margin: 0 auto;
color: #fffbf0;
font-family: futura-pt,sans-serif;
font-weight: 400;
font-style: normal;
font-size: 22px;
padding: 30px;
`;

const divTextStyle = {
  margin: '10px',
  textAlign: 'center'
};

const emphasis = {
  fontFamily: ['bookmania', 'serif'],
  fontWeight: '700',
  fontStyle: 'italic',
};

export default function Bio() {
  return (
    <BioDiv>
      <h1>about me</h1>
      <div style={divTextStyle}>
        <p>Hi there! My name is <em style={emphasis}>Katy Fry</em>. I am a <em style={emphasis}>designer</em> and <em style={emphasis}>software developer</em> who calls Nashville, TN home. </p>

        <p>I have always been fascinated by computers--I taught myself Photoshop and how to make Myspace templates back in the social media&apos;s heyday.</p>

        <p>I moved to Nashville from the Missouri Ozarks in 2010 to pursue a degree in Theology and English and began working as an Editor for a nonprofit publisher. After 8 years, I transitioned into the roll of Communications Director at a large church. This reignited my passion for graphic design, but I knew I wanted something more.</p>

        <p>Enter: Nashville Software School. I began the Part-Time Web Development program in January 2021. I quickly fell in love with code and how it allowed me to be both analytical and creative--uniting both my love of science and of art.</p>

        <p>As a developer, I try to make everything I do both <em style={emphasis}>functional</em> and <em style={emphasis}>beautiful</em>.</p>
      </div>
    </BioDiv>
  );
}
