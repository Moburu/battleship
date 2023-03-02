import { createContext, useReducer } from 'react';
import reducer from './reducer';
import Ship from './factories/Ship';
import Player from './factories/Player';

const store = createContext();
const { Provider } = store;

function GamestateProvider({ children }) {
    const initialState = {
        timeline: 'init',
        players: [new Player(), new Player("Computer")],
        humanShips: [new Ship(2), new Ship(2), new Ship(3), new Ship(3), new Ship(4), new Ship(5)],
        cpuShips: [new Ship(2), new Ship(2), new Ship(3), new Ship(3), new Ship(4), new Ship(5)],
        shipIndex: 0,
        winner: ''
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    return <Provider value={{state, dispatch}}>{children}</Provider>;
}

export default GamestateProvider
export { store }
