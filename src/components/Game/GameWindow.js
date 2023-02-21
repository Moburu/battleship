import React, { useContext } from 'react'
import NameEntry from './NameEntry';
import ShipPlacement from './ShipPlacement';
import Game from './Game';
import WinnerScreen from './WinnerScreen';
import { HorizontalContainer } from '../styled-components/gameStyles';
import { store } from '../../GamestateProvider';

const GameWindow = props => {
  const { state } = useContext(store);
  const timeline = state.timeline;

  return (
    <HorizontalContainer>
      {
        timeline === 'init'
        ? <NameEntry />
        : timeline === 'placement'
        ? <ShipPlacement />
        : timeline === 'game'
        ? <Game />
        : timeline === 'results'
        ? <WinnerScreen />
        : <p>I don't know what's going on.</p>
      }
    </HorizontalContainer>
  )
}

export default GameWindow
