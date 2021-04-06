var btnStart = document.getElementById("start");
var btnhighscores = document.getElementById("highscores");
var timeEl = document.getElementById("time");
var parentEl = document.getElementById("questions");
var score = 100;
var secondsLeft = 60;
var userAnswer;
var indexQuestion = 0;
var answer;
var numAnswer = 0;
var myStorage;
var cat;
var remainigtime =0;
const mySound = document.getElementById("sound");
const mySoundWrong = document.getElementById("wrongSound");
var myQuestions = [
    {
        //"numQuestion": 1,
        "textQuestion": "Commonly used data types DO NOT include:",
        answers: {
            "1": "1.string",
            "2": "2.booleans",
            "3": "3.alerts",
            "4": "4.numbers",
        },
        correctAnswer: "3.alerts",
    },
    {
        //"numQuestion": 2,
        "textQuestion": "The condition in an if/else statement is enclosed within _____.",
        answers: {
            "1": "1.quotes",
            "2": "2.curly brackets",
            "3": "3.parentheses",
            "4": "4.square brackets",
        },
        correctAnswer: "3.parentheses",
    },
    {
        //"numQuestion": 3,
        "textQuestion": "Arrays in JavaScript can be used to store ____.",
        answers: {
            "1": "1.numbers and strings",
            "2": "2.other arrays",
            "3": "3.booleans",
            "4": "4.all of the above",
        },
        correctAnswer: "4.all of the above",

    },
    {
        //"numQuestion": 4,
        "textQuestion": "String values must be enclosed within ____ when being assigned to variables.",
        answers: {
            "1": "1.commas",
            "2": "2.curly brackets",
            "3": "3.quotes",
            "4": "4.parentheses",
        },
        correctAnswer: "3.quotes",
    },
    {
        //"numQuestion": 5,
        "textQuestion": "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: {
            "1": "1.JavaScript",
            "2": "2.terminal / bash",
            "3": "3.for loops",
            "4": "4.console.log",
        },
        correctAnswer: "4.console.log",
    }
]
var URLactual = location.pathname;


//Show the instructions
if (URLactual.includes("index.html")) {
    startGame(btnStart);
    //When I click on the View Highscores button, It Switch to Highscores page
    btnhighscores.addEventListener("click", function () {
        location.assign('./highscores.html');
        URLactual = location.pathname;
    });
};

//When I click on the start button, It starts the test
function startGame() {
    btnStart.addEventListener("click", function () {
        //initStorage()
        numAnswer = 0;
        // Sets interval in variable
        setTime();
        clearAll(parentEl);
        showQuestion();
        
    });
};

//Seconds remaining and Sets interval in time variable
function setTime() {
    //console.log(secondsLeft);
    var timerInterval = setInterval(function () {
        secondsLeft--
        timeEl.textContent = secondsLeft;
        if (secondsLeft <= 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            clearAll(parentEl);
            //finalResult();
        }

    }, 1000);
};

function clearAll(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

//Show the question and its answers
function showQuestion() {
    var newQuestion = document.createElement("ul");
    parentEl.appendChild(newQuestion);
    var linebreak = document.createElement('br');
    newQuestion.appendChild(linebreak);
    newQuestion.setAttribute("aria-label", myQuestions[indexQuestion].textQuestion);
    for (let j = 0; j < 4; j++) {
        var liEl = document.createElement("li");
        newQuestion.appendChild(liEl);
        x = document.createElement("input");
        x.setAttribute("type", "button");
        x.className = "btn";
        x.id = "ans" + (j + 1);
        liEl.appendChild(x);
        x.value = myQuestions[indexQuestion].answers[j + 1];
        var clickEl = document.getElementById("ans" + (j + 1));
        clickEl.addEventListener("click", (event) => {
            var userAnswer = event.target.value
            if (indexQuestion < 4) {
                if (userAnswer === myQuestions[indexQuestion].correctAnswer) {
                    answer = "Correct";
                } else {
                    answer = "Wrong";
                    secondsLeft -= 10;
                }
                //result(answer);
                clearAll(parentEl);
                indexQuestion++;
                showQuestion();
                localStorage.setItem("remain", 0);
            } else {
                //result(answer);
                clearAll(parentEl);
                remainigtime = secondsLeft;
                localStorage.setItem("remain", remainigtime);
                secondsLeft = 0;
                
            }
        });
        
    }
};