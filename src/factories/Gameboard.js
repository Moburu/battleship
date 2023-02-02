class Gameboard {

    constructor() {
        this.board = []
        this.initialize(7)
        this.size = 7;
    }

    initialize(size) {
        for (let i = 0; i < size; i++) {
            let column = []
            for (let j = 0; j < size; j++) {
                column.push({hasShip: false, isHit: false, ship: null});
            }
            this.board.push(column);
        }
    }

    placeShip(ship, options) {
        const [x, y] = options.coords;
        if (options.axis === "X") {
            for (let i = 0; i < ship.length; i++) {
                try {
                    this.board[x+i][y].hasShip = true;
                    this.board[x+i][y].ship = ship;
                } catch (err) {
                    console.error(err)
                }
            }
        } else if (options.axis === "Y") {
            for (let i = 0; i < ship.length; i++) {
                try {
                    this.board[x][y+i].hasShip = true;
                    this.board[x][y+i].ship = ship;
                } catch (err) {
                    console.error(err)
                }
            }
        } else {
            console.error("Invalid axis specified!");
            return;
        }
    }

    receiveAttack(coords) {
        const x = coords[0];
        const y = coords[1];
        if (this.board[x][y].hasShip) {
            this.board[x][y].isHit = true;
            this.board[x][y].ship.hit();
        } else {
            this.board[x][y].missed = true;
        }
    }

    isLost() {
        for (let i = 0; i < this.length; i++) {
            for (let j = 0; j < this.length; j++) {
                if (!this.board[i][j].ship.isSunk()) {
                    return false;
                }
            }
        }
        return true;
    }
}

export default Gameboard
