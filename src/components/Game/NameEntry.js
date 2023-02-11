import React, { useContext, useState } from 'react'
import { NameForm, NameInput, NameSubmit, VerticalContainer } from '../styled-components/gameStyles'
import { store } from '../../GamestateProvider'

const NameEntry = props => {
    const { state, dispatch } = useContext(store);
    const [input, setInput] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        const name = e.target.children[0].value;
        if (name !== "") {
            dispatch({type: 'SET_PLAYER_NAME', payload: name});
             dispatch({type: 'SET_TIMELINE', payload: 'placement'});
        }
    }

    const handleChange = e => {
        const text = e.target.value;
        setInput(text);
    }

    return (
    <VerticalContainer>
        <h1>Enter your name:</h1>
        <NameForm onSubmit={handleSubmit}>
            <NameInput
                value={input}
                onChange={handleChange}
            />
            <NameSubmit type="submit" />
        </NameForm>
    </VerticalContainer>
    )
}
export default NameEntry
