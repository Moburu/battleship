import React from 'react'
import { BoardGrid, Cell } from '../styled-components/gameStyles.js';

const Board = props => {
    // populate a length 64 array with dummy values
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
