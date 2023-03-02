import styled from 'styled-components';

const BoardGrid = styled.div`
    border: 2px solid black;
    margin: 10px;
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

const EnemyCell = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: 2px solid black;
    width: 60px;
    height: 60px;
    transition: .1s;
    background-color: ${({ highlighted, isHit, missed }) => isHit ? 'red' : missed ? 'green' : highlighted ? 'yellow' : 'white'};
    cursor: ${({ cursor }) => cursor};
`

const FriendlyCell = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: 2px solid black;
    width: 60px;
    height: 60px;
    transition: .1s;
    background-color: ${({ highlighted, hasShip, isHit, missed }) => isHit ? 'red' : missed ? 'green' : highlighted ? 'rgb(255, 128, 128, 0.5)' : hasShip ? 'blue' : 'white'};
    cursor: ${({ cursor }) => cursor};
`

const GameTitle = styled.h1`
    text-align: center;
`

const GameText = styled.p`
    text-align: center;
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

const ResponsiveContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 950px) {
        flex-direction: column;
    }
`

const VerticalContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

export {
    BoardGrid,
    Button,
    EnemyCell,
    FriendlyCell,
    GameTitle,
    GameText,
    NameForm,
    NameInput,
    NameSubmit,
    ResponsiveContainer,
    VerticalContainer,
}
