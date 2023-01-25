import Gameboard from "../factories/Gameboard";
import Ship from "../factories/Ship";

test('the board initializes properly', () => {
    const myBoard1 = new Gameboard();
    let dummyBoard = [];
    for (let i = 0; i < 7; i++) {
        let dummyColumn = []
        for (let j = 0; j < 7; j++) {
            dummyColumn.push({hasShip: false, isHit: false, ship: null});
        }
        dummyBoard.push(dummyColumn);
    }
    expect(myBoard1.board).toEqual(dummyBoard);
});

test('you can place a ship at a specific location', () => {
    const myBoard2 = new Gameboard();
    const myShip2 = new Ship({length: 2});
    myBoard2.placeShip(myShip2, {coords: [3, 2], axis: 'X'});
    expect(myBoard2.board[3][2].hasShip).toStrictEqual(true);
    expect(myBoard2.board[3][2].ship).toStrictEqual(myShip2);
    expect(myBoard2.board[4][2].hasShip).toStrictEqual(true);
    expect(myBoard2.board[4][2].ship).toStrictEqual(myShip2);
});

test('you can shoot a target, and if you hit the ship will increment numHits', () => {
    const myBoard3 = new Gameboard();
    const myShip3 = new Ship({length: 2});
    myBoard3.placeShip(myShip3, {coords: [3, 2], axis: 'X'});
    myBoard3.receiveAttack([3, 2]);
    expect(myBoard3.board[3][2].isHit).toStrictEqual(true);
    expect(myBoard3.board[4][2].ship.numHits).toStrictEqual(1);
});

test('the board will tell you if a shot was missed at a given spot', () => {
    const myBoard4 = new Gameboard();
    myBoard4.receiveAttack([3, 2]);
    expect(myBoard4.board[3][2].missed).toStrictEqual(true);
})

test('the board will tell you if all its ships have sunk', () => {
    const myBoard5 = new Gameboard();
    const myShip5 = new Ship({length: 2});
    myBoard5.placeShip(myShip5, {coords: [3, 2], axis: 'X'});
    myBoard5.receiveAttack([3, 2]);
    myBoard5.receiveAttack([4, 2]);
    expect(myBoard5.isLost()).toStrictEqual(true);
})
