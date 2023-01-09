import Gameboard from "./Gameboard";

class Player {
    constructor(name) {
        this.name = name || "John Doe";
        this.ships = [];
        this.board = new Gameboard();
    }

    fireShot(board, coords) {
        if ((!board.board[coords[0]][coords[1]].missed) &&
        (!board.board[coords[0]][coords[1]].isHit)) {
            board.receiveAttack(coords);
            board.receiveAttack(coords);
            return "Fired"
        } else {
            return "That tile has already been hit!"
        }
    }

    fireRandomShot(board) {
        const randomX = Math.floor(board.length*Math.random());
        const randomY = Math.floor(board.length*Math.random());
        const coords = [randomX, randomY];
        if ((!board.board[coords[0]][coords[1]].missed) &&
        (!board.board[coords[0]][coords[1]].isHit)) {
            board.receiveAttack(coords);
            return "Fired"
        } else {
            return "That tile has already been hit!"
        }
    }
}

export default Player;
