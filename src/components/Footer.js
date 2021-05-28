import React from 'react';
import styled from 'styled-components';
import floralflipped from '../assets/floralflipped.jpg';

const FooterDiv = styled.div`
background-image: url(${floralflipped});
background-size: cover;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
width: 96%;
margin: auto;
margin-bottom: 20px;
border-bottom-left-radius: 25px;
border-bottom-right-radius: 25px;
color: #fffbf0;
`;

const ContactDiv = styled.div`
width: 300px;
margin-top: 20px;
`;

export default function Footer() {
  return (
    <div>
      <FooterDiv>
        <h1>contact me</h1>
        <ContactDiv>
          <ul id='contactList'>
            <li><i className="far fa-envelope"></i> katyvfry@gmail.com</li>
            <li><i className="fab fa-github"></i><a id='navLink' href='https://github.com/katherinevfry'> github</a></li>
            <li><i className="fab fa-instagram"></i><a id='navLink' href='https://www.instagram.com/katherinevfry/'> instagram</a></li>
            <li><i className="fab fa-linkedin"></i><a id='navLink' href='https://www.linkedin.com/in/katherine-fry/'> linkedin</a></li>
          </ul>
        </ContactDiv>
      </FooterDiv>
    </div>
  );
}
