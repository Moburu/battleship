import { createContext, useReducer } from 'react';
import reducer from './reducer';
import Player from './factories/Player';

const store = createContext();
const { Provider } = store;

function GamestateProvider({ children }) {
    const initialState = {
        timeline: 'init',
        players: [new Player(), new Player("Computer")],
        winner: ''
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    return <Provider value={{state, dispatch}}>{children}</Provider>;
}

export default GamestateProvider
export { store }
