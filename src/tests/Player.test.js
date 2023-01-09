import Player from "../factories/Player";
import Gameboard from "../factories/Gameboard";
import Ship from "../factories/Ship";

test("each player is assigned a name", () => {
    const myPlayer0 = new Player();
    expect(myPlayer0.name).toStrictEqual("John Doe");
});

test("a player can attack a square on a gameboard", () => {
    const myPlayer1 = new Player();
    const myBoard1 = new Gameboard();
    myPlayer1.fireShot(myBoard1, [3, 2]);
    expect(myBoard1.board[3][2].missed).toStrictEqual(true);
});

test("it will not fire a shot at the same tile twice", () => {
    const myPlayer2 = new Player();
    const myBoard2 = new Gameboard();
    expect(myPlayer2.fireShot(myBoard2, [3, 2])).toStrictEqual("Fired");
    expect(myPlayer2.fireShot(myBoard2, [3, 2])).toStrictEqual("That tile has already been hit!");
})
