// DOM ELEMENTS

var boxChanger = document.querySelector(".central-color");
var scoreDisplay = document.getElementById("score");
var timer = document.getElementById("timer");
var gameContainer = document.querySelector(".container");
var keys = document.querySelectorAll(".key");
var levelTwo = document.querySelectorAll(".second");
var levelThree = document.querySelectorAll(".third");
var levelFour = document.querySelectorAll(".fourth");
var keyBoard = document.querySelector(".keyboard");
var sounds = document.querySelectorAll(".sound");
var leftColumn = document.querySelector(".left");
var rightColumn = document.querySelector(".right");
var startBtn = document.getElementById("start");
var startSection = document.querySelector(".startDiv");
var red = document.querySelector(".red");
var yellow = document.querySelector(".yellow");
var green = document.querySelector(".green");
var blue = document.querySelector(".blue");
var orange = document.querySelector(".orange");
var purple = document.querySelector(".purple");
var pink = document.querySelector(".pink");
var turquoise = document.querySelector(".turquoise");
var olive = document.querySelector(".olive");
var deepPink = document.querySelector(".deepink");
var instructionDisplay = document.querySelector(".instructions");
var instructionSect = document.querySelector(".instruction-section");
var mainMenu = document.getElementById("main");
var namePrompt = document.querySelector('.askName')
var playerName = document.getElementById('name')
var nameDisplay = document.getElementById('nameHolder')

/********************************************************** */
/********************************************************** */
/********************************************************** */
/********************************************************** */
// Global Variables
var centralColors = [
    "red",
    "yellow",
    "green",
    "blue",
    "orange",
    "pink",
    "purple",
    "turquoise",
    "deeppink",
    "olive"
];
var score = 0;
var gameRun = false;
var name = "";

// Initial Game State
boxChanger.style.backgroundColor = centralColors[Math.floor(Math.random() * 4)];

// Starter Function
startBtn.addEventListener("click", function () {
    gameRun = false;
    // gameContainer.classList.remove("disappear");
    startSection.classList.add("disappear");
    namePrompt.classList.remove('disappear')
});






// Instructions Function Display
instructionDisplay.addEventListener("click", function () {
    startSection.classList.add("disappear");
    instructionSect.classList.remove("disappear");
});

mainMenu.addEventListener("click", function () {
    startSection.classList.remove("disappear");
    instructionSect.classList.add("disappear");
   
});

playerName.addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode
    if( key === 13) {
        name = e.target.value
        console.log(name)
        gameContainer.classList.remove("disappear");
        namePrompt.classList.add('disappear')
        gameRun = true;
        nameDisplay.innerText = `Player: ${name}`
        nameDisplay.style.borderBottom = "1px solid black"
    }
   
})

/********************************************************** */
/********************************************************** */
/********************************************************** */
/********************************************************** */

// This function activates if there is a match in colors, it will change the color of the central box
var changeCentralBoxColor = function () {
    var counter = 0;
    var ranNum = Math.floor(Math.random() * centralColors.length);
    // Level 1 Score 0 - 10
    if (score > 0 && score <= 9) {
        ranNum = Math.floor(Math.random() * 4);
        counter = ranNum;

        // Level 2 Score 11 - 20
    } else if (score > 9 && score < 19) {
        levelTwo.forEach(key => {
            key.classList.remove("disappear");
        });

        keyBoard.style.flexDirection = "column";
        leftColumn.style.display = "flex";
        leftColumn.style.flexDirection = "column";
        leftColumn.style.position = "absolute";
        leftColumn.style.position = "0";
        rightColumn.style.display = "flex";
        rightColumn.style.flexDirection = "column";
        rightColumn.style.position = "absolute";
        rightColumn.style.position = "0";
        rightColumn.style.right = "0";

        keys.forEach(key => {
            key.style.order = Math.floor(Math.random() * 4) + 1;
        });

        ranNum = Math.floor(Math.random() * 6);

        counter = ranNum;
        //    Level 3 Score 20-29
    } else if (score >= 19 && score < 29) {
        keyBoard.style.display = "block";
        leftColumn.style.display = "block";
        rightColumn.style.display = "block";
        leftColumn.style.position = "relative";
        rightColumn.style.position = "relative";
        levelThree.forEach(key => {
            key.classList.remove("disappear");
        });
        keys.forEach(key => {
            key.style.borderRadius = "50%";
            key.style.width = "150px";
            key.style.height = "150px";
            key.style.position = "absolute";
            key.style.marginLeft = "auto";
            key.style.marginRight = "auto";
            key.style.top = Math.floor(Math.random() * 80 + 1) + "px";
            key.style.left = Math.floor(Math.random() * 1400 + 3) + "px";
            key.style.right = Math.floor(Math.random() * 1400 + 5) + "px";
            key.style.bottom = Math.floor(Math.random() * 100 + 1) + "px";
        });
        ranNum = Math.floor(Math.random() * 6);
        counter = ranNum;
        // Level 4 30 - 39
    } else if (score >= 29 && score < 39) {
        keys.forEach(key => {
            key.style.width = "70px";
            key.style.height = "70px";
            key.style.marginLeft = "auto";
            key.style.marginRight = "auto";
            key.style.top = Math.floor(Math.random() * 80 + 1) + "px";
            key.style.left = Math.floor(Math.random() * 1400 + 3) + "px";
            key.style.right = Math.floor(Math.random() * 1400 + 5) + "px";
            key.style.bottom = Math.floor(Math.random() * 100 + 1) + "px";
            ranNum = Math.floor(Math.random() * 6);
            counter = ranNum;
        });
    } else if (score >= 39 && score < 49) {
        keys.forEach(key => {
            levelFour.forEach(key => {
                key.classList.remove("disappear");
            });
            key.style.borderRadius = "0";
            key.style.width = "100px";
            key.style.height = "100px";

            counter = Math.floor(Math.random() * 8);
        });
    } else if (score >= 49) {
        
        setTimeout(function () {
            red.classList.add("last");
        }, 123);
        setTimeout(function () {
            yellow.classList.add("last");
        }, 283);
        setTimeout(function () {
            green.classList.add("last");
        }, 347);
        setTimeout(function () {
            blue.classList.add("last");
        }, 481);
        setTimeout(function () {
            orange.classList.add("last");
        }, 523);
        setTimeout(function () {
            pink.classList.add("last");
        }, 275);
        setTimeout(function () {
            turquoise.classList.add("last");
        }, 237);
        setTimeout(function () {
            olive.classList.add("last");
        }, 488);
        setTimeout(function () {
            deepPink.classList.add("last");
        }, 321);
        setTimeout(function () {
            purple.classList.add("last");
        }, 199);

        keys.forEach(key => {
            key.classList.remove('hover')
            key.style.borderRadius = "50%";
            key.style.width = "100px";
            key.style.height = "100px";
            key.style.marginLeft = "auto";
            key.style.marginRight = "auto";

            key.style.top = Math.floor(Math.random() * 80 + 1) + "px";
            key.style.left = Math.floor(Math.random() * 1400 + 3) + "px";
            key.style.right = Math.floor(Math.random() * 1400 + 5) + "px";
            key.style.bottom = Math.floor(Math.random() * 100 + 1) + "px";
            ranNum = Math.floor(Math.random() * 6);
            counter = ranNum;
        });
    }
    boxChanger.style.backgroundColor = centralColors[counter];
};

/********************************************************** */
/********************************************************** */
/********************************************************** */
/********************************************************** */

// Function Timer **** Reactivate it when you want to Play
var time = 20;
var timerFunc = setInterval(function () {
    if (gameRun === true) {
        time--;
    }

    if (time <= 0) {
        console.log("Game Over");
        clearInterval(timerFunc);
        document.body.innerHTML = "";
        var el = document.createElement("div");
        el.setAttribute("id", "endScreen");
        el.innerHTML = `<h6 style="text-decoration: underline">GAME OVER</h6>
        <h6 >Player: ${name}</h6>
        <h6>Score: ${score}</h6>
                <button id="reset">
                <h4>Play Again?</h4></button>
          `;
        document.body.appendChild(el);
        var resetBtn = document.getElementById("reset");
        resetBtn.addEventListener("click", function () {
            window.location.reload();
        });
    }
    if (score > 20 && score <= 40) {
        time -= 1.2;
    }
    if (score > 40) {
        time -= 1.4;
    }

    timer.innerHTML = `Time Left: ${Math.floor(time)}`;
}, 950);

/********************************************************** */
/********************************************************** */
/********************************************************** */
/********************************************************** */

// This Function displays Score
var keepScore = function () {
    scoreDisplay.innerHTML = `Score: ${score}`;
};

// This Function checks if the background color of the keyboard is the same as the background color of the central box

var checkMatch = function (event) {
    var whichBox = event.target.style.backgroundColor;
    if (whichBox === boxChanger.style.backgroundColor) {
        changeCentralBoxColor();

        time += 2.5;
        score++;

        scoreDisplay.classList.add("plusscore");
        setTimeout(function () {
            scoreDisplay.classList.remove("plusscore");
        }, 400);
        keepScore();
    } else {
        score--;
        time--;
        scoreDisplay.classList.add("minusscore");
        setTimeout(function () {
            scoreDisplay.classList.remove("minusscore");
        }, 400);
        keepScore();
    }
};

/********************************************************** */
/********************************************************** */
/********************************************************** */
/********************************************************** */

// When I click on the keyboard, it will check if the background color of the keyboard and the background color of the boxChanger is the same. If it is the same, the Central Box will change Color, and a score will be added.

keys.forEach((key, index) => {
    key.addEventListener("click", checkMatch);
    key.addEventListener("click", function () {
        sounds[index].currentTime = 0;
        sounds[index].play();
    });
    key.style.backgroundColor = centralColors[index];
});