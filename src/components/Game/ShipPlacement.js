import React, { useState, useContext, useEffect } from 'react'
import Ship from '../../factories/Ship';
import { BoardGrid, Button, FriendlyCell, VerticalContainer } from '../styled-components/gameStyles';
import { checkCollisions, placeCpuShips } from '../../helperFunctions';
import { store } from '../../GamestateProvider';

const humanShips = [new Ship(2), new Ship(2), new Ship(3), new Ship(3), new Ship(4), new Ship(5)];
const cpuShips = [new Ship(2), new Ship(2), new Ship(3), new Ship(3), new Ship(4), new Ship(5)];
let index = 0

const ShipPlacement = props => {
    const { state, dispatch } = useContext(store);

    const player = state.players[0];
    const board = player.board;
    const cpuGameboard = state.players[1].gameboard;

    const [axis, setAxis] = useState('X');
    const [highlighted, setHighlighted] = useState([]);

    useEffect(() => {
        placeCpuShips(cpuGameboard, cpuShips)
    }, [cpuGameboard])

    const handleMouseEnter = (board, location) => {
        const [x, y] = location;
        const targets = [];
        if ((typeof humanShips[index] === 'undefined') || !checkCollisions(board, location, humanShips[index].length, axis)) {
            setHighlighted([]);
            return
        }
        if (axis === 'Y') {
            for (let i = 0; i < humanShips[index].length; i++) {
                targets.push(JSON.stringify([x+i, y]));
            }
        } else if (axis === 'X') {
            for (let i = 0; i < humanShips[index].length; i++) {
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
        if (typeof humanShips[index] === 'undefined') {
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
        <VerticalContainer>
            <h1>Place your ships to begin.</h1>
            <p>The "change axis" button will allow you to swap between horizontal and vertical placement.</p>
            <BoardGrid>
                {board.map((column, x) =>
                    column.map((entry, y) => {
                        let location = [x, y];
                        let jsonLocation = JSON.stringify(location);
                        return (
                        <FriendlyCell
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
                                handleClick(player.gameboard, location, humanShips[index]);
                            }}
                        >
                        </FriendlyCell>
                        )
                    })
                )}
            </BoardGrid>
            <p>Current axis: {axis}</p>
            <Button onClick={() => {handleChangeAxis()}}>Change Axis</Button>
        </VerticalContainer>
    )
}

export default ShipPlacement
