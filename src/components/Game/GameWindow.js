import React, { useContext } from 'react'
import NameEntry from './NameEntry';
import ShipPlacement from './ShipPlacement';
import Game from './Game';
import WinnerScreen from './WinnerScreen';
import { ResponsiveContainer } from '../styled-components/gameStyles';
import { store } from '../../GamestateProvider';
import {Transition, CSSTransition, SwitchTransition, TransitionGroup} from "react-transition-group";

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 1 },
  exited: { opacity: 0 },
};

const GameWindow = props => {
  const { state } = useContext(store);
  const timeline = state.timeline;

  return (
    <ResponsiveContainer>
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
    </ResponsiveContainer>
  )
}

export default GameWindow
