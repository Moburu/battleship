import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Game from './components/Game/Game';
import GamestateProvider from './GamestateProvider';

function App() {
  return (
      <GamestateProvider>
        <Header />
        <Game />
      </GamestateProvider>
  );
}

export default App;
