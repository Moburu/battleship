import styled from 'styled-components';

const BoardGrid = styled.div`
    border: 2px solid black;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`

const Button = styled.button`
    font-family: 'Kanit', sans-serif;
    font-size: 20px;
    background: transparent;
    border-radius: 5px;
    border: 1px solid black;
    margin: 20px;
    width: 150px;
    height: 50px;
    cursor: pointer;
`

const Cell = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: 2px solid black;
    width: 60px;
    height: 60px;
    transition: .1s;
    background-color: ${({ highlighted }) => highlighted ? 'red' : 'white'};
    cursor: ${({ cursor }) => cursor};

`

const GameWindowContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

const NameForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

const NameInput = styled.input`
    margin: 20px;
    font-size: 24px;
    font-family: 'Kanit', sans-serif;
    text-align: center;
    height: 1.2em;
`

const NameSubmit = styled.input`
    width: 150px;
    font-size: 24px;
    font-family: 'Kanit', sans-serif;
    text-align: center;

`

const SetupContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

export {
    BoardGrid,
    Button,
    Cell,
    GameWindowContainer,
    NameForm,
    NameInput,
    NameSubmit,
    SetupContainer,
}
