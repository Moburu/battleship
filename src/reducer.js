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
        default:
            return state;
    }
}

export default reducer;
