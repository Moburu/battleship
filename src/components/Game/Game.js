import React from 'react'
import PropTypes from 'prop-types'
import ShipPlacement from './ShipPlacement';
import { GameWindow } from '../styled-components/gameStyles';

const Game = props => {
  return (
    <GameWindow>
      <ShipPlacement />
    </GameWindow>
  )
}

Game.propTypes = {}

export default Game
