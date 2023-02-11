import Gameboard from "./Gameboard";
import { getRandomInt } from "../helperFunctions";

class Player {
    constructor(name) {
        this.name = name || "John Doe";
        this.ships = [];
        this.gameboard = new Gameboard();
        this.board = this.gameboard.board;
    }

    fireShot (gameboard, coords) {
        if ((!gameboard.board[coords[0]][coords[1]].missed) &&
        (!gameboard.board[coords[0]][coords[1]].isHit)) {
            gameboard.receiveAttack(coords);
            return "Fired"
        } else {
            return "That tile has already been hit!"
        }
    }

    fireRandomShot(gameboard) {
        const randomX = getRandomInt(0, gameboard.size);
        const randomY = getRandomInt(0, gameboard.size);
        const coords = [randomX, randomY];
        if ((!gameboard.board[randomX][randomY].missed) &&
        (!gameboard.board[randomX][randomY].isHit)) {
            gameboard.receiveAttack(coords);
            return "Fired"
        } else {
            this.fireRandomShot(gameboard);
        }
    }
}

export default Player;
