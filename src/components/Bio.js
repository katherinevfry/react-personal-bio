import React from 'react';

const divTextStyle = {
  width: '40%',
  margin: '10px'
};

export default function Bio() {
  return (
    <div>
      <div style={divTextStyle}>
        <p>Hi there! My name is Katy Fry. I am a photographer, designer, artist, and aspiring web developer who calls Nashville, TN home. </p>

        <p>I grew up in a tiny town in the Ozark hills of Southwest Missouri. I spent my time drawing, writing, pretending, and--once we were finally able to afford a computer--playing games and surfing the web over a shakey dial-up connection.</p>

        <p>I moved to Nashville in 2010 to pursue a degree in Piano Performance and English. I graduated in 2015 with a double major in Theology and English and began working as an Editoral Assistant for a nonprofit. I quickly gained the title of Editor and worked hard to put out content that was both creative as well as precise and accurate.</p>

        <p>Looking for a job that was both creative and analytical led me to apply for the web development course at NSS.</p>
      </div>
    </div>
  );
}
