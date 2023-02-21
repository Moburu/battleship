import React, { useContext } from 'react'
import { store } from '../../GamestateProvider'
import { VerticalContainer } from '../styled-components/gameStyles';

const WinnerScreen = props => {
    const { state } = useContext(store);
    const winner = state.winner;
    return (
        <VerticalContainer>
            <h1>You
            {
                (winner === 'human') ?
                ' win!' :
                (winner === 'cpu') ?
                ' lose!' :
                ' win?'
            }
            </h1>
        </VerticalContainer>
    )
}

export default WinnerScreen
