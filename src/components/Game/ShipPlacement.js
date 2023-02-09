import React, { useState, useContext } from 'react'
import Ship from '../../factories/Ship';
import { BoardGrid, Button, Cell, SetupContainer } from '../styled-components/gameStyles';
import { checkCollisions } from '../../helperFunctions';
import { store } from '../../GamestateProvider';

const ships = [new Ship(2), new Ship(2), new Ship(3), new Ship(3), new Ship(4), new Ship(5)];
let index = 0

const ShipPlacement = props => {
    const { state, dispatch } = useContext(store);
    const player = state.players.human;
    const board = player.board;
    const [axis, setAxis] = useState('X');
    const [highlighted, setHighlighted] = useState([]);

    const handleMouseEnter = (board, location) => {
        const [x, y] = location;
        const targets = [];
        if ((typeof ships[index] === 'undefined') || !checkCollisions(board, location, ships[index].length, axis)) {
            setHighlighted([]);
            return
        }
        if (axis === 'Y') {
            for (let i = 0; i < ships[index].length; i++) {
                targets.push(JSON.stringify([x+i, y]));
            }
        } else if (axis === 'X') {
            for (let i = 0; i < ships[index].length; i++) {
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
        if (typeof ships[index] === 'undefined') {
            return
        }
        if (board.placeShip(ship, {coords: location, axis: axis})){
            dispatch({type: 'ADD_PLAYER_SHIP', payload: [...player.ships, ship]});
            index = index + 1;
        }
        // 6 is one greater than the length of ships
        if (index === 6) {
            dispatch({type: 'SET_TIMELINE', payload: 'game'});
        }
    }

    const handleChangeAxis = () => {
        if (axis === 'X') {
            setAxis('Y');
        } else {
            setAxis('X');
        }
    }

    return (
        <SetupContainer>
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
                            hasShip={entry.hasShip}
                            onMouseEnter={() => {
                                handleMouseEnter(board, location);
                            }}
                            onMouseLeave={() => {
                                handleMouseLeave();
                            }}
                            onClick={() => {
                                handleClick(player.gameboard, location, ships[index]);
                            }}
                        >
                        </Cell>
                        )
                    })
                )}
            </BoardGrid>
            <p>Current axis: {axis}</p>
            <Button onClick={() => {handleChangeAxis()}}>Change Axis</Button>
        </SetupContainer>
    )
}

export default ShipPlacement
