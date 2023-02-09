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
