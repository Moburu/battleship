import React from 'react'
import { BoardGrid, Cell } from '../styled-components/gameStyles.js';

const Board = props => {
    const cells = [];
    for (let i = 0; i < 64; i++) {
        cells.push(i);
    }

    return (
        <BoardGrid>
            {cells.map(entry =>
                <Cell />
            )}
        </BoardGrid>
    )
}

export default Board
