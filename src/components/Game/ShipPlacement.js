import React from 'react'
import Board from './Board';
import Player from '../../factories/Player';
import { Button, ShipPlacementContainer } from '../styled-components/gameStyles';

const ShipPlacement = props => {
    const dummyPlayer = new Player();
    return (
        <ShipPlacementContainer>
            <h1>Place your ships to begin.</h1>
            <p>The "change axis" button will allow you to swap between horizontal and vertical placement.</p>
            <Board player={dummyPlayer} />
            <Button>Change Axis</Button>
        </ShipPlacementContainer>
    )
}

export default ShipPlacement
