import React, { useState, useContext, useEffect } from 'react'
import { BoardGrid, Button, FriendlyCell, GameTitle, GameText, VerticalContainer } from '../styled-components/gameStyles';
import { checkCollisions, placeCpuShips } from '../../helperFunctions';
import { store } from '../../GamestateProvider';

const ShipPlacement = props => {
    const { state, dispatch } = useContext(store);
    const { shipIndex, humanShips, cpuShips, players } = state;
    const human = players[0];
    const { board } = human;
    const cpuGameboard = players[1].gameboard;

    const [axis, setAxis] = useState('X');
    const [highlighted, setHighlighted] = useState([]);

    useEffect(() => {
        placeCpuShips(cpuGameboard, cpuShips)
    }, [cpuGameboard, cpuShips])

    const handleMouseEnter = (board, location) => {
        const [x, y] = location;
        const targets = [];
        if ((typeof humanShips[shipIndex] === 'undefined') || !checkCollisions(board, location, humanShips[shipIndex].length, axis)) {
            setHighlighted([]);
            return
        }
        if (axis === 'Y') {
            for (let i = 0; i < humanShips[shipIndex].length; i++) {
                targets.push(JSON.stringify([x+i, y]));
            }
        } else if (axis === 'X') {
            for (let i = 0; i < humanShips[shipIndex].length; i++) {
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
        if (typeof humanShips[shipIndex] === 'undefined') {
            return
        }
        if (board.placeShip(ship, {coords: location, axis: axis})){
            dispatch({type: 'ADD_PLAYER_SHIP', payload: [...human.ships, ship]});
            dispatch({type: 'SET_INDEX', payload: shipIndex+1});
        }
        // 6 is one greater than the length of ships
        if (shipIndex === 5) {
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
            <GameTitle>Place your ships to begin.</GameTitle>
            <GameText>The "change axis" button will allow you to swap between horizontal and vertical placement.</GameText>
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
                                handleClick(human.gameboard, location, humanShips[shipIndex]);
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
