import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { store } from '../../GamestateProvider'
import { VerticalContainer } from '../styled-components/gameStyles';

const WinnerScreen = props => {
    const { state, dispatch } = useContext(store);
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

WinnerScreen.propTypes = {}

export default WinnerScreen
