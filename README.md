TODO:
- Add better visual indicator for where ships are
- Add computer ship placement loop
- Display both players' ships in the actual game component
Low priority:
- In ShipPlacement, a newly placed ship doesn't show up until you mouse off the tile
- Consider whether I want to allow the player to place ships directly next to other ships

X-Y BUG
Bug description: When axis="X', we get behaviour as if axis="Y" (the highlighted tiles are below the hovered tile) and vice-versa.

What we know the problem is NOT:
- handleChangeAxis()

Temporary fix: Swapped "X" and "Y" in the conditional statements for handleMouseEnter in ShipPlacement and PlaceShip in Gameboard. Still have no idea why this happened, but will keep an eye out in the future.

A bug I solved: I was getting an error "undefined is not iterable (cannot read property Symbol(Symbol.iterator))." I tracked it down in the code and figured out that it meant that I was passing in undefined into a function that expected an array. After poking around with some console logs to see what was going on, I realized the for loop in the function was running too many times. After I put a console log before the for loop inside the main function, upon seeing it trigger twice I remembered that in strict mode, React renders its components twice for some reason. I took off strict mode and the bug was fixed!
