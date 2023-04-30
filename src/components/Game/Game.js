import React, { useContext, useState } from 'react'
import { BoardGrid, EnemyCell, FriendlyCell, GameTitle, ResponsiveContainer, VerticalContainer } from '../styled-components/gameStyles'
import { store } from '../../GamestateProvider';

const Game = props => {
  const { state, dispatch } = useContext(store);
  const [highlighted, setHighlighted] = useState([]);
  const human = state.players[0];
  const cpu = state.players[1];

  const handleMouseEnter = (location, missed, isHit) => {
    if (!missed && !isHit) {
      setHighlighted(location);
    }
  }

  const handleMouseLeave = () => {
    setHighlighted([]);
  }

  const handleClick = (location) => {
    const [x, y] = location;
    if (!cpu.board[x][y].missed && !cpu.board[x][y].isHit) {
      human.fireShot(cpu.gameboard, location);
      cpu.fireRandomShot(human.gameboard);
    }
    if (human.gameboard.isLost()) {
      dispatch({type: "SET_TIMELINE", payload: "results"});
      dispatch({type: "SET_WINNER", payload: "cpu"});
    } else
    if (cpu.gameboard.isLost()) {
      dispatch({type: "SET_TIMELINE", payload: "results"});
      dispatch({type: "SET_WINNER", payload: "human"});
    }
  }

  return (
    <VerticalContainer>
      <GameTitle>Click on an enemy square to fire a shot.</GameTitle>
      <ResponsiveContainer>
        <VerticalContainer>
          <h2>Player</h2>
          <BoardGrid>
            {human.board.map((column, x) =>
              column.map((entry, y) => {
                let location = [x, y];
                let jsonLocation = JSON.stringify(location);
                return (
                  <FriendlyCell
                    key={jsonLocation}
                    hasShip={entry.hasShip}
                    missed={entry.missed}
                    isHit={entry.isHit}
                  >
                  </FriendlyCell>
                )
              })
            )}
          </BoardGrid>
        </VerticalContainer>
        <VerticalContainer>
          <h2>Computer</h2>
          <BoardGrid>
            {cpu.board.map((column, x) =>
              column.map((entry, y) => {
                let location = [x, y];
                let jsonLocation = JSON.stringify(location);
                return (
                  <EnemyCell
                    key={jsonLocation}
                    missed={entry.missed}
                    isHit={entry.isHit}
                    highlighted={(jsonLocation === highlighted)}
                    cursor={(highlighted === jsonLocation) ? 'pointer' : 'not-allowed'}
                    onMouseEnter={() => handleMouseEnter(jsonLocation, entry.missed, entry.isHit)}
                    onMouseLeave={() => handleMouseLeave()}
                    onClick={() => handleClick(location)}
                  >
                  </EnemyCell>
                )
              })
            )}
            </BoardGrid>
        </VerticalContainer>
      </ResponsiveContainer>
      {/* <ResponsiveContainer>
        <VerticalContainer>
          <SmallCell color='rgb(51, 51, 255, 0.9)'/>
          <span>Allied ship</span>
        </VerticalContainer>
        <VerticalContainer>
          <SmallCell color='rgb(255, 128, 128, 0.9)'/>
          <span>Hit</span>
        </VerticalContainer>
        <VerticalContainer>
          <SmallCell color='rgb(0, 0, 0, 0.5)'/>
          <span>Miss</span>
        </VerticalContainer>
      </ResponsiveContainer> */}
    </VerticalContainer>
  )
}

export default Game
