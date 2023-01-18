import React from 'react'
import ShipPlacement from './ShipPlacement';
import { GameWindowContainer } from '../styled-components/gameStyles';

const Game = props => {
  return (
    <GameWindowContainer>
      <ShipPlacement />
    </GameWindowContainer>
  )
}

export default Game
