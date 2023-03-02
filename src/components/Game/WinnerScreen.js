import React, { useContext } from 'react'
import { store } from '../../GamestateProvider'
import { Button, VerticalContainer } from '../styled-components/gameStyles';

const WinnerScreen = props => {
    const { state, dispatch } = useContext(store);
    const winner = state.winner;

    const handleClick = () => {
        dispatch({type: "RESET_GAME", payload: ""})
    }

    return (
        <VerticalContainer>
            <h1>
            {
                (winner === 'human') ?
                'Congrats! You win! Want to play again?' :
                (winner === 'cpu') ?
                'Sorry, you lose. Maybe next time!' :
                "Oh no. I'm having an error."
            }
            </h1>
            <Button onClick={handleClick}>
                New Game
            </Button>
        </VerticalContainer>

    )
}

export default WinnerScreen
