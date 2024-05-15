import React, { useState } from 'react';
import './App.css';
import CardsContainer from './components/CardsContainer';
import Score from './components/Score';
import Logo from './images/logo-small.png';

function App() {
  const [selectedCards, setSelectedCards] = useState([]);

  const selectCard = (id) => {
    if (selectedCards.find((elem) => elem === id)) {
      console.log('Coinside!');
      setSelectedCards([]);
    } else {
      let copy = Object.assign([], selectedCards);
      copy.push(id);
      setSelectedCards(copy);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo">
          <img src={Logo} alt="App-logo" />
        </div>
        <div>
          <div className="App-name">Memory Card Game</div>
          <p>Click pictures and do not repeat.</p>
        </div>
        <Score score={selectedCards.length} />
      </header>
      <CardsContainer selectCard={selectCard} />
      <div className="App-footer">
        <p>Created by aabelikoff &copy;</p>
      </div>
    </div>
  );
}

export default App;
