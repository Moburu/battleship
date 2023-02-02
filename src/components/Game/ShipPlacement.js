import React, { useState } from 'react'
import Player from '../../factories/Player';
import Ship from '../../factories/Ship';
import { BoardGrid, Button, Cell, ShipPlacementContainer } from '../styled-components/gameStyles';

const dummyPlayer = new Player();
const dummyShip = new Ship(2);
const board = dummyPlayer.board.board;

const ShipPlacement = props => {
    const [axis, setAxis] = useState('X');
    const [highlighted, setHighlighted] = useState([]);
    const shipSizes = [2, 2, 3, 3, 4, 5];
    const handleMouseEnter = (board, location) => {
        const [x, y] = location;
        const targets = [];
        if (axis === 'X') {
            for (let i = 0; i < shipSizes[0]; i++) {
                // if there is an overflow on the x-axis, do nothing
                if (typeof board[x+i] === "undefined") {
                    setHighlighted([]);
                    return
                }
                targets.push(JSON.stringify([x+i, y]));
            }
        } else if (axis === 'Y') {
            for (let i = 0; i < shipSizes[0]; i++) {
                // if there is an overflow on the y-axis, do nothing
                if (typeof board[x][y+i] === "undefined") {
                    setHighlighted([]);
                    return
                }
                targets.push(JSON.stringify([x, y+i]));
            }
        } else {
            throw new Error("unexpected axis");
        }
        setHighlighted(targets);
    }
    const handleMouseLeave = () => {
        setHighlighted([]);
    }
    const handleClick = (board, location, ship) => {
            board.placeShip(ship, {coords: location, axis: axis});
    }
    const handleChangeAxis = () => {
        if (axis === 'X') {
            setAxis('Y');
        } else {
            setAxis('X');
        }
    }

    return (
        <ShipPlacementContainer>
            <h1>Place your ships to begin.</h1>
            <p>The "change axis" button will allow you to swap between horizontal and vertical placement.</p>
            <BoardGrid>
                {board.map((column, x) =>
                    column.map((entry, y) => {
                        let location = [x, y];
                        let jsonLocation = JSON.stringify(location);
                        return (
                        <Cell
                            key={jsonLocation}
                            highlighted={highlighted.includes(jsonLocation)}
                            cursor={highlighted.includes(jsonLocation) ? 'pointer' : 'not-allowed'}
                            onMouseEnter={() => {
                                handleMouseEnter(board, location);
                            }}
                            onMouseLeave={() => {
                                handleMouseLeave();
                            }}
                            onClick={() => {
                                handleClick(dummyPlayer.board, location, dummyShip);
                            }}
                        >
                            {location.toString()}
                            {entry.hasShip ? <span>X</span> : <span>O</span>}
                        </Cell>
                        )
                    })
                )}
            </BoardGrid>
            <p>Current axis: {axis}</p>
            <Button onClick={() => {handleChangeAxis()}}>Change Axis</Button>
        </ShipPlacementContainer>
    )
}

export default ShipPlacement
