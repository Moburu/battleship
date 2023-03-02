import Player from './factories/Player';
import Ship from './factories/Ship';

function reducer(state, action) {
    const { type, payload } = action;
    switch (type) {
        case 'SET_TIMELINE': {
            return {
                ...state,
                timeline: payload,
            }
        }
        case 'SET_PLAYERS': {
            return {
                ...state,
                players: payload,
            }
        }
        case 'SET_WINNER': {
            return {
                ...state,
                winner: payload,
            }
        }
        case 'SET_INDEX': {
            return {
                ...state,
                shipIndex: payload,
            }
        }
        case 'SET_PLAYER_NAME': {
            return {
                ...state,
                players: {
                    ...state.players,
                    human: {
                        ...state.players.human,
                        name: payload,
                    }
                }
            }
        }
        case 'ADD_PLAYER_SHIPS': {
            return {
                ...state,
                players: {
                    ...state.players,
                    human: {
                        ...state.players.human,
                        ships: payload,
                    }

                }
            }
        }
        case 'SET_CPU_SHIPS': {
            return {
                ...state,
                players: {
                    ...state.players,
                    cpu: {
                        ...state.players.cpu,
                        ships: payload,
                    }
                }
            }
        }
        case 'RESET_GAME': {
            return {
                ...state,
                players: [new Player(), new Player()],
                humanShips: [new Ship(2), new Ship(2), new Ship(3), new Ship(3), new Ship(4), new Ship(5)],
                cpuShips: [new Ship(2), new Ship(2), new Ship(3), new Ship(3), new Ship(4), new Ship(5)],
                shipIndex: 0,
                timeline: 'init',
                winner: ''
            }
        }
        default:
            return state;
    }
}

export default reducer;
