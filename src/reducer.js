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
        default:
            return state;
    }
}

export default reducer;
