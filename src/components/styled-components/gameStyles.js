import styled from 'styled-components';

const BoardGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
`

const Cell = styled.div`
    border: 2px solid black;
    width: 30px;
    height: 30px;
    transition: .25s ease-in-out;
    &: hover {
        background-color: red;
    }
`

const GameWindow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

export {
    BoardGrid,
    Cell,
    GameWindow,
}
