import Ship from "../factories/Ship";

test('the ship has length, numHits, and isSunk properties', () => {
    const myShip = new Ship(5);
    expect(myShip.length).toBe(5);
    expect(myShip.numHits).toBe(0);
    expect(myShip.isSunk()).toBe(false);
});

test('calling hit() increases numHits', () => {
    const myShip = new Ship(5);
    expect(myShip.numHits).toBe(0);
    myShip.hit();
    expect(myShip.numHits).toBe(1);
});

test('isSunk returns true if numHits >= length', () => {
    const myShip = new Ship(2);
    myShip.hit();
    myShip.hit();
    myShip.hit();
    expect(myShip.isSunk()).toBe(true);
});
