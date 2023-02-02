import Ship from "../factories/Ship";

describe('Ship methods', () => {
    let myShip;
    
    beforeEach(() => {
        myShip = new Ship(2);
    });

    it('has length, numHits, and isSunk properties', () => {
        expect(myShip.length).toBe(2);
        expect(myShip.numHits).toBe(0);
        expect(myShip.isSunk()).toBe(false);
    });

    it('increases numHits() when hit() is called', () => {
        expect(myShip.numHits).toBe(0);
        myShip.hit();
        expect(myShip.numHits).toBe(1);
    });

    it('returns true with isSunk if numHits >= length', () => {
        myShip.hit();
        myShip.hit();
        myShip.hit();
        expect(myShip.isSunk()).toBe(true);
    });
})
