import React from 'react'
import PropTypes from 'prop-types'
import { BoardGrid, Cell } from '../styled-components/gameStyles.js';

const Board = props => {
    return (
        <BoardGrid>
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
        </BoardGrid>
    )
}

Board.propTypes = {

}

export default Board
