import React from 'react'
import PropTypes from 'prop-types'
import ShipPlacement from './ShipPlacement';
import Start from './Start';
import { GameWindow } from '../styled-components/gameStyles';


const Game = props => {
  return (
    <GameWindow>
      <Start />
    </GameWindow>
  )
}

Game.propTypes = {}

export default Game
