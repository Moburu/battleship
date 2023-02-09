import Player from "../factories/Player";

describe('Player methods', () => {
    let myPlayer;
    let myBoard;

    beforeEach(() => {
        myPlayer = new Player();
        myBoard = myPlayer.board;
    });

    it("is assigned a name", () => {
        expect(myPlayer.name).toStrictEqual("John Doe");
    });

    it("can attack a square on a gameboard", () => {
        myPlayer.fireShot(myBoard, [3, 2]);
        expect(myBoard[3][2].missed).toStrictEqual(true);
    });

    it("knows when it tries to target a tile that has been shot at", () => {
        expect(myPlayer.fireShot(myBoard, [3, 2])).toStrictEqual("Fired");
        expect(myPlayer.fireShot(myBoard, [3, 2])).toStrictEqual("That tile has already been hit!");
    })
})
