TODO:
Ship doesn't show up until you mouse off
Need loop to actually place player ships
Name selection

X-Y BUG
Bug description: When axis="X', we get behaviour as if axis="Y" (the highlighted tiles are below the hovered tile) and vice-versa.

What we know the problem is NOT:
- handleChangeAxis()

Temporary fix: Swapped "X" and "Y" in the conditional statements for handleMouseEnter in ShipPlacement and PlaceShip in Gameboard. Still have no idea why this happened, but will keep an eye out in the future.
