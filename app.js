// DOM ELEMENTS

var boxChanger = document.querySelector('.central-color');
var scoreDisplay = document.getElementById('score');
var timer = document.getElementById('timer');
var gameContainer = document.querySelector('.container')
var keys = document.querySelectorAll('.key')
var levelTwo = document.querySelectorAll('.second')

// Global Variables
var centralColors = ['red', 'yellow', 'green', 'blue', 'orange', 'pink' ];
var score = 0;


// Initial Game State 
boxChanger.style.backgroundColor = "red"

// This function activates if there is a match in colors, it will change the color of the central box
var changeCentralBoxColor = function () {
    var counter = 0;
    var ranNum = Math.floor(Math.random() * centralColors.length)
    
    if(score > 0 && score < 10){
        ranNum = Math.floor(Math.random() * 4)
        counter = ranNum
    } else if(score >= 10) {
        levelTwo.forEach((key) => {
            key.classList.remove('disappear')
        })
        counter = ranNum
       
    }

    boxChanger.style.backgroundColor = centralColors[counter];
}



// Function Timer **** Reactivate it when you want to Play 
var time = 200;
var timerFunc = setInterval(function () {
   
    time--
    if (time === 0) {
        console.log('Game Over')
        clearInterval(timerFunc)
        document.body.innerHTML = ''
        var el = document.createElement('h1');
        el.setAttribute('id', 'endScreen')
        el.innerText = 'GAME OVER';
        document.body.appendChild(el)
    }

    timer.innerHTML = `Time Left: ${time}`


}, 800)







// This Function Keeps Score 
var keepScore = function () {
    scoreDisplay.innerHTML = `Score: ${score}`
}

// This Function checks if the background color of the keyboard is the same as the background color of the central box

var checkMatch = function (event) {
    var whichBox = event.target.style.backgroundColor
        if (whichBox=== boxChanger.style.backgroundColor) {
            changeCentralBoxColor()
            time += 2
            score++
            keepScore()
        } else {
            score--
            time --
            keepScore()
        }
       

    }

// When I click on the keyboard, it will check if the background color of the keyboard and the background color of the boxChanger is the same. If it is the same, the Central Box will change Color, and a score will be added. 

keys.forEach((key, index) => {
    key.addEventListener('click', checkMatch)
    key.style.backgroundColor = centralColors[index]
})



