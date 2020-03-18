// Initialize 
var start = document.getElementById("start");
var score = document.getElementById("score");
var timer = document.getElementById("timer");
var quiz = document.getElementById("quiz");
var questions = document.getElementById("questions");
var choice1 = document.getElementById("1");
var choice2 = document.getElementById("2");
var choice3 = document.getElementById("3");
var choice4 = document.getElementById("4");

//Variables     
var totalScore = 0;
var countDown = 0;   

// Question Array 
var questions = [
    {
        question: "Commonly used Data Types Include:",
        choice1: "1. strings",
        choice2: "2. booleans",
        choice3: "3. alerts",
        choice4: "4. numbers",
        correct: "3",
    },
    {
        question: "The condition in an if / else statement is enclosed within ________.",
        choice1: "1. quotes",
        choice2: "2. curly brackets",
        choice3: "3. parenthesis",
        choice4: "4. square brackets",
        correct: "3",
    },
    {
        question: "Arrays in JavaScript can be used to store ________.",
        choice1: "1. numbers and strings",
        choice2: "2. other arrays",
        choice3: "3. booleans",
        choice4: "4. all of the above",
        correct: "4",
    },
    {
        question: "String values must be enclosed within ________ when being assigned to variables",
        choice1: "1. commas",
        choice2: "2. curly brackets",
        choice3: "3. quotes",
        choice4: "4. parenthesis",
        correct: "3",
    },
    {
        question: "A very useful tool used for developing and debugging for printing content to the debugger is:",
        choice1: "1. JavaScript",
        choice2: "2. terminal / bash",
        choice3: "3. for loops",
        choice4: "4. console.log",
        correct: "4",
    }
]

// Function that runs through question and answer 

var lastQuestionIndex = questions.length-1;
var questionUserAnswering = 0;

function answerQuestion() {
    var q = questions[questionUserAnswering];
    question.innerHTML ="<p>" + q.question+ "</p>";
    choice1.innerHTML = q.choice1;
    choice2.innerHTML = q.choice2;
    choice3.innerHTML = q.choice3;
    choice4.innerHTML = q.choice4;

    questionUserAnswering = 0; 
    renderQuestion()

    questionUserAnswering++
    renderQuestion ()
}

// Function that keeps track of the score 
function keepScore() {
    for(var qIndex = 0; qIndex <= lastQuestionIndex; qIndex++) {
        progress.innherHTML +="div class="prog" id=
    }
}

// Counter




// Access Array 
questions [0].question
questions [0].choice1
questions [0].choice2
questions [0].choice3
questions [0].choice4
questions [0].correct

// Button event listener 
start.addEventListener("click", startQuiz);
choice1.addEventListener("click", answerOne)
choice2.addEventListener("click", answerTwo)
choice3.addEventListener("click", answerThree)
choice4.addEventListener("click", answerFour)

    
