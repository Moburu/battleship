TODO:
- Transitions between game componenets
- "About" section, navigation
- Improve CSS including responsive design
- Maybe add time delay for cpu shots
- Sound effects!
- Maybe add stat display for winner screen? Can make a helper function getGameStats() that will return an object full of different stats derived from the human and cpu boards such as shot accuracy

Low priority:
- In ShipPlacement, a newly placed ship doesn't show up until you mouse off the tile
- Consider whether I want to allow the player to place ships directly next to other ships

X-Y BUG
Bug description: When axis="X", we get behaviour as if axis="Y" (the highlighted tiles are below the hovered tile) and vice-versa.

What we know the problem is NOT:
- handleChangeAxis()

Temporary fix: Swapped "X" and "Y" in the conditional statements for handleMouseEnter in ShipPlacement and PlaceShip in Gameboard. Still have no idea why this happened, but will keep an eye out in the future.

FIRESHOT BUG
Bug description: Upon trying to invoke human.fireShot, where human is an instance of Player, I got an error saying that fireShot was not a function. I logged human and found that its prototype was that of a generic object, without any of the methods I had defined. In the initial state, I had added my players as "players: {human: new Player(), cpu: new Player()}. After changing it to "players: [new Player(), new Player()], it worked!

After doing some research, I've learned that classes in Javascript are really just syntactical sugar for prototypal inheritance. That is to say: classes are just objects, and every object has a [[Prototype]] property. When trying to access a property of an object, it checks both the object itself and its prototype, and the prototype's prototype, and so on all the way up the chain. A class constructor Foo actually just creates an object with a prototype called Foo. All methods listed under the class name are actually given to Foo.prototype. For some reason which I still can't figure out, instantiating the Player class inside of the players object wiped the Player prototype and replaced it with the Object prototype instead.

A bug I solved: I was getting an error "undefined is not iterable (cannot read property Symbol(Symbol.iterator))." I tracked it down in the code and figured out that it meant that I was passing in undefined into a function that expected an array. After poking around with some console logs to see what was going on, I realized the for loop in the function was running too many times. After I put a console log before the for loop inside the main function, upon seeing it trigger twice I remembered that in strict mode, React renders its components twice for some reason. I took off strict mode and the bug was fixed!

WINNER SCREEN BUG
For some reason the name of the winner was displaying improperly. I console.logged both human.gameboard.isLost() and cpu.gameboard.isLost() and find that no matter which players wins, both would return true. After checking the state of both boards post-game, I found that the num_hits of each ship on the cpu board was set to the length of the ship for each ship, even though I hadn't hit a single cpu ship during the game.

... they're the same ships!!!!

The solution ended up being that I was populating the cpu board with the same ship instances as the human board. So when I hit a ship on one board, I also hit it on the other one. I fixed this by making two different arrays of ships, one for each player.

Things I practiced with this project:
1. Test-driven development
2. Rapid prototyping
3. Using styled-components, keeping my styles organized in a separate folder and importing them when needed
4. Modularizing functions, having factories for different classes I can use and reuse as needed as well as keeping a separate "helper functions" file to share between components whenever needed.
