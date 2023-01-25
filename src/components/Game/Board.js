import React, { useState } from 'react'
import { BoardGrid, Cell } from '../styled-components/gameStyles.js';

const Board = props => {
    const { board } = props.player.board;
    const axis = 'x';
    const [highlighted, setHighlighted] = useState([]);
    const shipSizes = [2, 2, 3, 3, 4, 5];
    const handleMouseEnter = (board, location) => {
        const [x, y] = location;
        const targets = [];
        if (axis === 'y') {
            for (let i = 0; i < shipSizes[0]; i++) {
                // if there is an overflow on the x-axis, do nothing
                if (typeof board[x+i] === "undefined") {
                    setHighlighted([]);
                    return
                }
                targets.push(JSON.stringify([x+i, y]));
            }
        } else if (axis === 'x') {
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

    return (
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
                    >
                        {location.toString()}
                    </Cell>
                    )
                })
            )}
        </BoardGrid>
    )
}

export default Board
