import React from 'react';
import './App.css';
import Home from '../src/components/Home';
import Image1 from './Images/emojies.jpeg';
import Image2 from './Images/fusion.jpeg'
import Image3 from './Images/livingcement.jpg'
import Image4 from './Images/notredame.jpg'
import Image5 from './Images/robot.jpg'
import Image6 from './Images/saturn.jpeg'
import Heading from './components/Heading'

function App() {
  return (
    <div id="mainContainer">
    <div id="bodyDiv">
      <div id="left">
        <Heading head=" Today's News" />
        <Home img={Image1} story="Is social media shrinking your brain." newspaper="Guardian"/>
        <Home img={Image2} story="Fusion energy, the future!" newspaper="Japan"/>
        <Home img={Image3} story="Living cement, yes your not going mad." newspaper="The Times"/>
      </div>
      <div id="right">
      <Heading head=" Yesterday's News"/>
        <Home img={Image4} story="Notre Damme burning!" newspaper="Paris"/>
        <Home img={Image5} story="Robot that can sweat!" newspaper="USA Tech"/>
        <Home img={Image6} story="Rings of Saturn." newspaper="NASA"/>
      </div>


    </div>
    </div>
  );
}

export default App;
