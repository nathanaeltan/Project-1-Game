// DOM ELEMENTS

var boxChanger = document.querySelector('.central-color');
var redBox = document.querySelector('.red');
var yellowBox = document.querySelector('.yellow');
var greenBox = document.querySelector('.green');
var blueBox = document.querySelector('.blue');


// Global Variables
var centralColors = ['red', 'yellow', 'green', 'blue'];
var score = 0;
var counter = 0;

// Initial Game State 
boxChanger.style.backgroundColor = "red"
redBox.style.backgroundColor="red";
yellowBox.style.backgroundColor="yellow";
greenBox.style.backgroundColor="green";
blueBox.style.backgroundColor="blue";


// This function activates if there is a match in colors, it will change the color of the central box
var changeCentralBoxColor = function() {
  
    
    counter ++
    if(counter === centralColors.length) {
        counter = 0;
    }
     
       boxChanger.style.backgroundColor = centralColors[counter];
       
  
}


// This Function checks if the background color of the keyboard is the same as the background color of the central box
var checkMatchRed = function() {
    console.log(redBox.style.backgroundColor)
    console.log(boxChanger.style.backgroundColor)
if(redBox.style.backgroundColor === boxChanger.style.backgroundColor) {
    console.log('match')
    changeCentralBoxColor()
} 
}
var checkMatchYellow = function() {
    console.log(yellowBox.style.backgroundColor)
    console.log(boxChanger.style.backgroundColor)
if(yellowBox.style.backgroundColor === boxChanger.style.backgroundColor) {
    console.log('match')
    changeCentralBoxColor()
} 
}
var checkMatchGreen = function() {
  
if(greenBox.style.backgroundColor === boxChanger.style.backgroundColor) {
    console.log('match')
    changeCentralBoxColor()
} 
}
var checkMatchBlue = function() {
  
if(blueBox.style.backgroundColor === boxChanger.style.backgroundColor) {
    console.log('match')
    changeCentralBoxColor()
} 
}



// When I click on the keyboard, it will check if the background color of the keyboard and the background color of the boxChanger is the same. If it is the same, the Central Box will change Color, and a score will be added. 
redBox.addEventListener('click', checkMatchRed)
yellowBox.addEventListener('click', checkMatchYellow)
greenBox.addEventListener('click', checkMatchGreen)
blueBox.addEventListener('click', checkMatchBlue)
