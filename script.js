//Variable IDs 
var score = document.getElementById("score");
var start = document.getElementById("start");
var submitButton = document.getElementById("submit");
var explanation = document.getElementById("explanation");
var submitButton = document.getElementById("submitButton");


var quizQuestionHeader = document.getElementById("quizQuestionHeader");
var choice1 = document.getElementById("one");
var choice2 = document.getElementById("two");
var choice3 = document.getElementById("three");
var choice4 = document.getElementById("four");
var correct = document.getElementById("correct");
var answerResponse = document.getElementById("answerResponse");


var allDone = document.getElementById("allDone")
var finalScoreIs = document.getElementById("finalScoreIs");
var clearHighScores = document.getElementById("clearHighScores");
var questionButton = document.getElementById("questionBotton");

var quizQuestionsPage = document.getElementById("quizQuestionsPage");

//Variable Classes 
var quizChallengePage = document.querySelector(".quizChallengePage");
var finalScorePage = document.querySelector(".finalScorePage");

  // Quiz Questions
  var quizQuestions = [
    {
    "quizQuestionHeader" : "Commonly used Data Types Include:", 
    "one" : "1. strings",
    "two" : "2. booleans",
    "three" : "3. alerts",
    "four" : "4. numbers",
    "correct" : "4",
    },{
   "quizQuestionHeader" : "The condition in an if / else statement is enclosed within ________.",
   "one" : "1. quotes",
   "two" : "2. curly brackets",
   "three" : "3. parenthesis",
   "four" : "4. square brackets",
   "correct" : "3",
    },{
    "quizQuestionHeader" : "Arrays in JavaScript can be used to store ________.",
    "one" : "1. numbers and strings",
    "two" : "2. other arrays",
    "three" : "3. booleans",
    "four" : "4. all of the above",
    "correct" : "4",
   },{
    "quizQuestionHeader" : "String values must be enclosed within ________ when being assigned to variables",
    "one" : "1. commas",
    "two" : "2. curly brackets",
    "three" : "3. quotes",
    "four" : "4. parenthesis",
    "correct" : "3",
   },{
    "quizQuestionHeader" : "A very useful tool used for developing and debugging for printing content to the debugger is:",
    "one" : "1. JavaScript",
    "two" : "2. terminal / bash",
    "three" : "3. for loops",
    "four" : "4. console.log",
    "correct" : "4",
  },
]

quizQuestionsPage.style.display = "none"; // Hide Quiz Questions Page
finalScorePage.style.display = "none";   // Hide Final Core Page 

// EVENT LISTENER WHEN HIT START QUIZ 
submitButton.addEventListener("click", startQuiz);  // Start Timer Button 

// TIMER FUNCTION BEGINS 
var secondsLeft = 10; // Seconds in Timer 
var startScore = 0; // Starting time 
var timer = document.getElementById("timer"); // Timer Variable 

timer.textContent = "Time: " + startScore; // Holder text in nav bar 

function startQuiz() { 
finalScorePage.style.display = "none"; // Hide Final Core Page 
quizChallengePage.style.display = "none"; // Hide Quiz Challenge Page 
quizQuestionsPage.style.display = "block"; // Show Quiz Questions Page

  var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = "Time: " + secondsLeft;

    if (secondsLeft === 0 || quizQuestions.length === null) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

// Loop Questions 
var questionIndex = 0;
var previousQuestionIndex = quizQuestions.length -1;

function showQuestions() {
  var q = quizQuestions[questionIndex];
  quizQuestionHeader.innerHTML = q.question;
  choice1.innerHTML = q.one;
  choice2.innerHTML = q.two;
  choice3.innerHTML = q.three;
  choice4.innerHTML = q.four;
}

showQuestions();

option1.addEventListener("click", function (event) {
  checkAnswer(event);
})
option2.addEventListener("click", function (event) {
  checkAnswer(event);
})
option3.addEventListener("click", function (event) {
  checkAnswer(event);
})
option4.addEventListener("click", function (event) {
  checkAnswer(event);
})


/*
function askQuestions () {
  startQuiz();
  console.log(quizQuestions[0][1]);
  quizQuestionsPage.textContent = (`${quizQuestions[0][1]}`);

  for (var i = 0; i < quizQuestions.length; i++) {
    
        //document.write(quizQuestionsPage[0]);

      if (questionButton === quizQuestions[5]) {
        startScore++;
        answerResponse.textContent = "Correct!";
      } else {
        answerResponse.textContent = "Wrong!";
        startScore - 10; 
      }
    }
  }
  */

// Go to All Done page & Print Score
function finalScorePage() {
  quizChallengePage.style.display = "none"; // Hide Quiz Challenge Page
  quizQuestionsPage.style.display = "none"; // Hide Questions Page
  finalScorePage.style.display = "block"; // Show Final Score Page 

  if (secondsLeft === 0 || quizQuestions.length === null) {
  
    finalScoreIs.textContent = "Your final score is " + finalScore;
  }
}

//Function to add in initials - THINK IS DONE 
var initials = document.getElementById("initials");
var intitialInput = document.getElementById("initialInput");
var initialButton = document.getElementById("initialButton");

var submittedInitial = document.getElementById("response");

initialButton.textContent = "Submit";
initials.textContent = "Enter Your Initials: ";

//submitButton.addEventListener("click", startQuiz)  // Start Timer Button 
initialButton.addEventListener("click", function(event) { // click takes you to the high score page 
  event.preventDefault();
     
   var response = intitialInput.value;
   submittedInitial.textContent = response; 
 });

 // Save score (use.value?)
var highScore = localStorage.getItem("highScore");
localStorage.setItem("highScore", highScore);



// Print high scores 
function showScore() {
  finalScore.textContent = " ";
  mainEl.appendChild(imgEl);
}

 






 
