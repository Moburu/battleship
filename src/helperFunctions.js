// check collisions (for a ship placed on a given tile on a given axis). returns true if there are no collisions and false if there are
const checkCollisions = (board, position, shipLength, axis) => {
    const [x, y] = position;
    if (axis === "Y") {
        for (let i = 0; i < shipLength; i++) {
            if ((typeof board[x+i] === "undefined")
            || (board[x+i][y].hasShip === true)) {
                return false;
            }
        }
    } else if (axis === "X") {
        for (let i = 0; i < shipLength; i++) {
            if ((typeof board[x][y+i] === "undefined")
            || (board[x][y+i].hasShip === true)) {
                return false;
            }
        }
    } else {
        console.log("Invalid axis specified!")
    }
    return true;
}

// find suitable locations (to place a ship)
const findSuitableLocations = (board, shipLength, axis) => {
    let suitableLocations = [];
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
        }
    }
}

const placeCpuShips = (board, shipArray) => {
    for (let i = 0; i < shipArray.length; i++) {

    }
}

export {
    checkCollisions,
    findSuitableLocations,
    placeCpuShips,
}
