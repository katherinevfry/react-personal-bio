import React from 'react';
import Marquee from 'react-fast-marquee';
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

const techStyle = {
  marginTop: '65px'
};

const iconStyle = {
  margin: '30px'
};

export default function Technologies() {
  return (
    <div style={techStyle}>
      <h1>Technologies</h1>
      <Marquee pauseOnHover='true' gradientColor={[255, 251, 240]} speed={20}>
        <img style={iconStyle} src={img1} alt=''/>
        <img style={iconStyle} src={img2} alt=''/>
        <img style={iconStyle} src={img3} alt=''/>
        <img style={iconStyle} src={img4} alt=''/>
        <img style={iconStyle} src={img5} alt=''/>
        <img style={iconStyle} src={img6} alt=''/>
        <img style={iconStyle} src={img7} alt=''/>
        <img style={iconStyle} src={img8} alt=''/>
        <img style={iconStyle} src={img9} alt=''/>
        <img style={iconStyle} src={img10} alt=''/>
        <img style={iconStyle} src={img11} alt=''/>
        <img style={iconStyle} src={img12} alt=''/>
        <img style={iconStyle} src={img13} alt=''/>
        <img style={iconStyle} src={img14} alt=''/>
      </Marquee>
    </div>
  );
}
