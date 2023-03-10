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
                column.push({hasShip: false, isHit: false, missed: false, ship: null});
            }
            this.board[i] = column;
        }
    }

    placeShip(ship, options) {
        const [x, y] = options.coords;
        let targets = [];
        if (options.axis === "Y") {
            for (let i = 0; i < ship.length; i++) {
                if ((typeof this.board[x+i] === "undefined")
                    || (this.board[x+i][y].hasShip === true)) {
                    return false;
                }
                targets.push([x+i, y]);
            }
        } else if (options.axis === "X") {
            for (let i = 0; i < ship.length; i++) {
                if ((typeof this.board[x][y+i] === "undefined")
                    || (this.board[x][y+i].hasShip === true)) {
                    return false;
                }
                    targets.push([x, y+i]);
            }
        } else {
            console.error("Invalid axis specified!");
            return;
        }
        for (let i = 0; i < targets.length; i++) {
            this.board[targets[i][0]][targets[i][1]].hasShip = true;
            this.board[targets[i][0]][targets[i][1]].ship = ship;
        }
        return true;
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
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                if ((this.board[i][j].hasShip) && (!this.board[i][j].ship.isSunk())) {
                    return false;
                }
            }
        }
        return true;
    }
}

export default Gameboard
