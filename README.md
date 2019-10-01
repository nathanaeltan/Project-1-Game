# Project-1-Game
For Best Results Please play on full screen.

EarPhones are also suggested. 

explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.

The main bulk of the game involves DOM manipulation of html divs that were hardcoded in. As the game progresses, more and more divs are uncovered to increase the difficulty of the game.

The DOM manipulation also involves changing the layout of the elements on the screen by utilizing classes and CSS properties to structure them in either fixed or random positions. 

**********************************************************
**********************************************************

Approach Taken: 

1.) Created a function that checks if the key clicked has the same background color as the central box color being flashed. 

2.) If this was true, another function would change the central box color to another color in an array. The central box color is randomly looping through the array of colors. 

3.) As the score goes up, more divs are revealed and more colors are added by increasing the length of the central box color array. 

4.) At the same time as the score goes up, everytime a key is clicked and it is correct, it will  change position randomly around the screen.

5.) The last level would have the divs moving around the screen randomly. To do this, I grabbed every div individually, and added an animation to each one of the divs, with a settime out for each div so they wouldnt all move as one. 