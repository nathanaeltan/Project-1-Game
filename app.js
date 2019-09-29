// DOM ELEMENTS

var boxChanger = document.querySelector('.central-color');
var scoreDisplay = document.getElementById('score');
var timer = document.getElementById('timer');
var gameContainer = document.querySelector('.container')
var keys = document.querySelectorAll('.key')
var levelTwo = document.querySelectorAll('.second')
var levelThree = document.querySelectorAll('.third')
var keyBoard = document.querySelector('.keyboard')

// Global Variables
var centralColors = ['red', 'yellow', 'green', 'blue', 'orange', 'pink', 'purple', 'turquoise' ];
var score = 0;

// Initial Game State 
boxChanger.style.backgroundColor = centralColors[Math.floor(Math.random() * 4)]

// This function activates if there is a match in colors, it will change the color of the central box
var changeCentralBoxColor = function () {
    var counter = 0;
    var ranNum = Math.floor(Math.random() * centralColors.length)
    // Level 1 Score 0 - 10
    if(score > 0 && score < 9){
        ranNum = Math.floor(Math.random() * 4)
        counter = ranNum

        // Level 2 Score 11 - 20
    } else if(score >= 9 && score < 19) {
        levelTwo.forEach((key) => {
            key.classList.remove('disappear')
        })
        ranNum = Math.floor(Math.random() * 6)
        counter = ranNum
    //    Level 3 Score 21-30
    } else if(score >= 19 && score < 29) {
     
        levelThree.forEach((key) => {
            key.classList.remove('disappear')
        })
        keys.forEach((key) => {
        
            key.style.borderRadius = "50%";
           key.style.width = "150px"
           key.style.height = "150px"
           key.style.position = "absolute" 
           key.style.marginLeft = "auto" 
           key.style.marginRight = "auto" 
           key.style.top = Math.floor((Math.random() * 80) + 1)+"px";
           key.style.left = Math.floor((Math.random() * 1400) + 3)+"px";
           key.style.right = Math.floor((Math.random() * 1500) + 5)+"px";
           key.style.bottom = Math.floor((Math.random() * 100) + 1)+"px";
        })
        counter = ranNum
    } else if(score >= 29) {
        keys.forEach((key) => {
            key.style.width = "70px";
            key.style.height = "70px";
            key.style.marginLeft = "auto" 
           key.style.marginRight = "auto" 
           key.style.top = Math.floor((Math.random() * 80) + 1)+"px";
           key.style.left = Math.floor((Math.random() * 1400) + 3)+"px";
           key.style.right = Math.floor((Math.random() * 1500) + 5)+"px";
           key.style.bottom = Math.floor((Math.random() * 100) + 1)
           counter = ranNum
        })
    }

    boxChanger.style.backgroundColor = centralColors[counter];
}



// Function Timer **** Reactivate it when you want to Play 
var time = 20000;
var timerFunc = setInterval(function () {
   
    time--
    if (time === 0) {
        console.log('Game Over')
        clearInterval(timerFunc)
        document.body.innerHTML = ''
        var el = document.createElement('h1');
        el.setAttribute('id', 'endScreen')
        el.innerText = `GAME OVER
        Score: ${score}`;
        document.body.appendChild(el)
    }

    timer.innerHTML = `Time Left: ${time}`


}, 800)







// This Function displays Score 
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
            scoreDisplay.classList.add('plusscore');
            setTimeout(function() {
                scoreDisplay.classList.remove('plusscore')
            }, 300);
            keepScore()
            
        } else {
            score--
            time --
            scoreDisplay.classList.add('minusscore');
            setTimeout(function() {
                scoreDisplay.classList.remove('minusscore')
            }, 300);
            keepScore()
    
        }

    }

// When I click on the keyboard, it will check if the background color of the keyboard and the background color of the boxChanger is the same. If it is the same, the Central Box will change Color, and a score will be added. 

keys.forEach((key, index) => {
    key.addEventListener('click', checkMatch)
    key.style.backgroundColor = centralColors[index]
})




