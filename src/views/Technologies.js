import React from 'react';
import Marquee from 'react-fast-marquee';
import styled from 'styled-components';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';
import img7 from '../assets/7.png';
import img8 from '../assets/8.png';
import img9 from '../assets/9.png';
import img10 from '../assets/10.png';
import img11 from '../assets/11.png';
import img12 from '../assets/12.png';
import img13 from '../assets/13.png';
import img14 from '../assets/14.png';

const TechStyle = styled.div`
  text-align: center;
  background-color: #f5d5cf;
  width: 96%;
  margin: 0 auto;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;

const Icon = styled.img`
  margin: 30px;
`;

const Header = styled.h1`
  color: #333811;
`;

export default function Technologies() {
  return (
    <TechStyle id='technologies'>
      <Header>technologies</Header>
      <Marquee pauseOnHover='true' gradientColor={[245, 213, 207]} speed={20}>
        <Icon src={img1} alt=''/>
        <Icon src={img2} alt=''/>
        <Icon src={img3} alt=''/>
        <Icon src={img4} alt=''/>
        <Icon src={img5} alt=''/>
        <Icon src={img6} alt=''/>
        <Icon src={img7} alt=''/>
        <Icon src={img8} alt=''/>
        <Icon src={img9} alt=''/>
        <Icon src={img10} alt=''/>
        <Icon src={img11} alt=''/>
        <Icon src={img12} alt=''/>
        <Icon src={img13} alt=''/>
        <Icon src={img14} alt=''/>
      </Marquee>
    </TechStyle>
  );
}
