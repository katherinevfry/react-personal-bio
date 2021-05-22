import React from 'react';
import styled from 'styled-components';

const BioDiv = styled.div`
background-color: #fffbf0;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
width: 96vw;
margin: 20px;
border-radius: 25px;
`;

const divTextStyle = {
  width: '40%',
  margin: '10px'
};

const contactDiv = {
  width: '40%',
  margin: '10px',
  alignSelf: 'flex-start'
};

const h1Contact = {
  backgroundColor: '#01519f',
  width: '300px',
  borderRadius: '25px',
  textAlign: 'center',
  color: '#fffbf0'
};

export default function Bio() {
  return (
    <BioDiv>
      <div style={divTextStyle}>
        <p>Hi there! My name is Katy Fry. I am a photographer, designer, artist, and aspiring web developer who calls Nashville, TN home. </p>

        <p>I grew up in a tiny town in the Ozark hills of Southwest Missouri. I spent my time drawing, writing, pretending, and--once we were finally able to afford a computer--playing games and surfing the web over a shakey dial-up connection.</p>

        <p>I moved to Nashville in 2010 to pursue a degree in Piano Performance and English. I graduated in 2015 with a double major in Theology and English and began working as an Editoral Assistant for a nonprofit. I quickly gained the title of Editor and worked hard to put out content that was both creative as well as precise and accurate.</p>

        <p>Looking for a job that was both creative and analytical led me to apply for the web development course at NSS.</p>
      </div>
      <div style={contactDiv}>
        <div>
        <h1 style={h1Contact}>CONTACT ME</h1>
        </div>
        <div>
          <ul className="fa-ul">
            <li><span className="fa-li"><i className="far fa-envelope"></i></span>katyvfry@gmail.com</li>
            <li>417-718-7977</li>
            <li>github.com/katherinevfry</li>
          </ul>
        </div>
      </div>
    </BioDiv>
  );
}
