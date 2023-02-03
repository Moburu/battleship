import React, { useContext } from 'react'
import NameEntry from './NameEntry';
import ShipPlacement from './ShipPlacement';
import { GameWindowContainer } from '../styled-components/gameStyles';
import { store } from '../../GamestateProvider';

const Game = props => {
  const { state, dispatch   } = useContext(store);
  const timeline = state.timeline;

  return (
    <GameWindowContainer>
      {
        timeline === 'init'
        ? <NameEntry />
        : timeline === 'placement'
        ? <ShipPlacement />
        : timeline === 'game'
        ? <h1>Game time!</h1>
        : <p>I don't know what's going on.</p>
      }
    </GameWindowContainer>
  )
}

export default Game
