class Ship {
    constructor(ship) {
        this.length = ship.length || 0;
        this.numHits = 0;
    }

    hit() {
        this.numHits = this.numHits + 1;
    }

    isSunk() {
        return (this.length <= this.numHits);
    }
}


export default Ship;
