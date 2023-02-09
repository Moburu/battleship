import Gameboard from "./Gameboard";

class Player {
    constructor(name) {
        this.name = name || "John Doe";
        this.ships = [];
        this.gameboard = new Gameboard();
        this.board = this.gameboard.board;
    }

    fireShot(board, coords) {
        if ((!this.board[coords[0]][coords[1]].missed) &&
        (!this.board[coords[0]][coords[1]].isHit)) {
            this.gameboard.receiveAttack(coords);
            this.gameboard.receiveAttack(coords);
            return "Fired"
        } else {
            return "That tile has already been hit!"
        }
    }

    fireRandomShot(board) {
        const randomX = Math.floor(this.board.length*Math.random());
        const randomY = Math.floor(this.board.length*Math.random());
        const coords = [randomX, randomY];
        if ((!this.board[coords[0]][coords[1]].missed) &&
        (!this.board[coords[0]][coords[1]].isHit)) {
            this.gameboard.receiveAttack(coords);
            return "Fired"
        } else {
            return "That tile has already been hit!"
        }
    }
}

export default Player;
