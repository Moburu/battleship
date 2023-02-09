import Player from "../factories/Player";
import Ship from "../factories/Ship";
import { checkCollisions } from '../helperFunctions';

describe('Helper functions for the game loop', () => {
    let myPlayer;
    let myShip;
    let myGameboard;
    let myBoard;

    beforeEach(() => {
        myPlayer = new Player();
        myShip = new Ship(3);
        myGameboard = myPlayer.gameboard;
        myBoard = myPlayer.board;
    });

    test("checkCollisions returns false when a ship is placed atop another ship", () => {
        myGameboard.placeShip(myShip, {coords: [3, 2], axis: "X"})
        // checking both axes
        expect(checkCollisions(myBoard, [3, 1], 3, "X")).toStrictEqual(false);
        expect(checkCollisions(myBoard, [2, 2], 3, "Y")).toStrictEqual(false);
    });

    test("checkCollisions returns false when a ship would fall off the board", () => {
        // checking both axes
        expect(checkCollisions(myBoard, [6, 6], 3, "X")).toStrictEqual(false);
        expect(checkCollisions(myBoard, [6, 6], 3, "Y")).toStrictEqual(false);
    });

    test("checkCollisions returns true when the coast is clear", () => {
        // checking both axes
        expect(checkCollisions(myBoard, [2, 2], 3, "X")).toStrictEqual(true);
        expect(checkCollisions(myBoard, [2, 2], 3, "Y")).toStrictEqual(true);
    })
})
