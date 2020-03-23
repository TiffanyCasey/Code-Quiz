
//VARIABLES
var score = document.getElementById("score");
var timer = document.getElementById("timer");
var secondsLeft = 80;
var totalScore = 0;
var start = document.getElementById("start");
var submitButton = document.getElementById("submit");
var explanation = document.getElementById("explanation");
var submitButton = document.getElementById("submit");
var quizQuestions = document.getElementById("quizQuestions");
var choice1 = document.getElementById("1");
var choice2 = document.getElementById("2");
var choice3 = document.getElementById("3");
var choice4 = document.getElementById("4");
var answerResponse = document.getElementById("answerResponse");
var allDone = document.getElementById("allDone")
var finalScoreIs = document.getElementById("complete");

var clearHighScores = document.getElementById("clearHighScores");

//TEXT
start.textContent = "Coding Quiz Challenge"
explanation.textContent = "Try to answer the following code-related questions within 80 seconds. Every incorrect answers will penalize your time by ten seconds";
submitButton.textContent = "Start Quiz";

// QUESTIONS 
var quizQuestions = [
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

// timer.addEventListener("click", function();
// Timer / Score Function 
timer.textContent = "Time: " + totalScore;

function submitButton() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
  
    if(secondsLeft === 0) {
      var finalScore = secondsLeft - wrongAnswer; 
      clearInterval(timerInterval);
      finalScorePage();
    }
  }, 1000);
}

// Go to All Done page 

function finalScorePage() {
    allDone.textContent = "All done!";
    finalScoreIs.textContent = "Your final score is " + finalScore;
  }



//Function to add in initials - THINK IS DONE 
var initials = document.getElementById("initials");
var intitialInput = document.getElementById("initialInput")
var initialButton = document.getElementById("initialButton");
var submittedInitial = document.getElementById("response");

initialButton.textContent = "Submit";
initials.textContent = "Enter Initials";

initialButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  console.log(event);
   
   var response = intitialInput.value;
    submittedInitial.textContent = response; 
 });

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

// Final Score Function 
function showScore() {
  finalScore.textContent = " ";
  mainEl.appendChild(imgEl);

}




setTime();

 //Click Events 

 //View High Scores - append the fina


 //Start Quiz 
 start.addEventListener("click", start);

 //Quiz Answers
 //Submit 
 
 //Go Back Button 
 //Clear High Scores Button  



 
