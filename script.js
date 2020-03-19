// Variables by ID
var start = document.getElementById("start");
var score = document.getElementById("score");
var timer = document.getElementById("timer");
var quiz = document.getElementById("quiz");
var questions = document.getElementById("questions");
var choice1 = document.getElementById("1");
var choice2 = document.getElementById("2");
var choice3 = document.getElementById("3");
var choice4 = document.getElementById("4");
var submitButton = document.getElementById("submit");



// Variables by Class 

var start = document.querySelectorAll("h1");
var explanation = document.querySelectorAll("p");
var button = document.querySelector("button");


// CSS 

start[0].setAttribute("style", "font-size:40px; text-align:center; font-weight:bold; font-family: sans-serif; padding-top: 150px;");
explanation[0].setAttribute("style","font-size:20px; font-family: sans-serif; padding:20px; text-align:center;");
button.setAttribute("style", "text-align:center; background-color:#8064A2; border-color:#8064A2; color:white;font-size:22px; padding: 0px 12px 0px 12px;");  
submitButton.setAttribute("style", "text-align:center; background-color:#8064A2; border-color:#8064A2; color:white;font-size:22px; padding: 0px 12px 0px 12px;");  
score.setAttribute("style", "color:purple; padding-left:20px;");
timer.setAttribute("style", "float:right; padding-right:30px;");
button.setAttribute("style", "text-align:center; background-color:#8064A2; border-color:#8064A2; color:white;font-size:22px; padding: 0px 12px 0px 12px;");  




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


// Counter




// Accessing the Questions Array 
questions[0].question
questions[0].choice1
questions[0].choice2
questions[0].choice3
questions[0].choice4
questions[0].correct

// Button event listener 
// start.addEventListener("click", startQuiz);
// choice1.addEventListener("click", answerOne)
// choice2.addEventListener("click", answerTwo)
// choice3.addEventListener("click", answerThree)
// choice4.addEventListener("click", answerFour)

    
