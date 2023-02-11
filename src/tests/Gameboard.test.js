import Gameboard from "../factories/Gameboard";
import Ship from "../factories/Ship";

describe('Gameboard methods', () => {
    let myBoard;
    let myShip;

    beforeEach(() => {
        myBoard = new Gameboard();
        myShip = new Ship(2);
    })

    it('initializes the board properly', () => {
        let dummyBoard = [];
        for (let i = 0; i < 7; i++) {
            let dummyColumn = []
            for (let j = 0; j < 7; j++) {
                dummyColumn.push({hasShip: false, isHit: false, missed: false, ship: null});
            }
            dummyBoard.push(dummyColumn);
        }
        expect(myBoard.board).toEqual(dummyBoard);
    });

    it('can place a ship at a specific location', () => {
        myBoard.placeShip(myShip, {coords: [3, 2], axis: 'X'});
        expect(myBoard.board[3][2].hasShip).toStrictEqual(true);
        expect(myBoard.board[3][2].ship).toStrictEqual(myShip);
        expect(myBoard.board[3][3].hasShip).toStrictEqual(true);
        expect(myBoard.board[3][3].ship).toStrictEqual(myShip);
    });

    it('can shoot a target, and if you hit the ship will increment numHits', () => {
        myBoard.placeShip(myShip, {coords: [3, 2], axis: 'X'});
        myBoard.receiveAttack([3, 2]);
        expect(myBoard.board[3][2].isHit).toStrictEqual(true);
        expect(myBoard.board[3][3].ship.numHits).toStrictEqual(1);
    });

    it('will tell you if a shot was missed at a given spot', () => {
        myBoard.receiveAttack([3, 2]);
        expect(myBoard.board[3][2].missed).toStrictEqual(true);
    })

    it('will tell you if all its ships have sunk', () => {
        myBoard.placeShip(myShip, {coords: [3, 2], axis: 'X'});
        myBoard.receiveAttack([3, 2]);
        myBoard.receiveAttack([3, 3]);
        expect(myBoard.isLost()).toStrictEqual(true);
    })
})
