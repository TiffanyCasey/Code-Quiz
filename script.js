//Variable IDs 
var score = document.getElementById("score");
var start = document.getElementById("start");
var submitButton = document.getElementById("submit");
var explanation = document.getElementById("explanation");
var submitButton = document.getElementById("submitButton");
var quizQuestions = document.getElementById("quizQuestions");
var choice1 = document.getElementById("1");
var choice2 = document.getElementById("2");
var choice3 = document.getElementById("3");
var choice4 = document.getElementById("4");
var answerResponse = document.getElementById("answerResponse");
var allDone = document.getElementById("allDone")
var finalScoreIs = document.getElementById("finalScoreIs");
var clearHighScores = document.getElementById("clearHighScores");

//Variable Classes 
var quizChallengePage = document.querySelector(".quizChallengePage");
var quizQuestionsPage = document.querySelector(".quizQuestionsPage");
var finalScorePage = document.querySelector(".finalScorePage");

//Coding Quiz Challenge Page 
start.textContent = "Coding Quiz Challenge";
explanation.textContent = "Try to answer the following code-related questions within 80 seconds. Every incorrect answers will penalize your time by ten seconds";
submitButton.textContent = "Start Quiz";

quizQuestionsPage.style.display = "none";// Hide Quiz Questions Page
finalScorePage.style.display = "none"; // Hide Final Core Page 

// START QUIZ / TIMER FUNCTION
submitButton.addEventListener("click", startQuiz); // Start Quiz Button 

  var secondsLeft = 3; // Seconds in Timer 
  var startScore = 0; // Starting time 
  var finalScore = "";  // Holder for Final Time 
  var timer = document.getElementById("timer"); // Timer Variable 

timer.textContent = "Time: " + startScore; // Holder text in nav bar  

function startQuiz() { // Timer function Begins 
  finalScorePage.style.display = "none"; // Hide Final Core Page 
  quizChallengePage.style.display ="none"; // Hide Quiz Challenge Page 
  quizQuestionsPage.style.display = "block"; // Show Quiz Questions Page

  var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = "Time: " + secondsLeft;

    if (secondsLeft === 0 || quizQuestions.length === null) {
      clearInterval(timerInterval);
    }
  }, 1000);
}
    
// Questions Loop

for(var i=0; 1 < quizQuestions.length; i++) {
  var answerResponse = document.createElement(quizQuestions[i].prompt)
  if(answerResponse == quizQuestions[i].correct) {
    startScore++;
    answerResponse.textContent = "Correct!";
  } else {
    answerResponse.textContent = "Wrong!";
  }
}


// Go to All Done page & Print Score
function finalScorePage() {
  quizChallengePage.style.display = "none"; // Hide Quiz Challenge Page
  quizQuestionsPage.style.display = "none"; // Hide Questions Page
  finalScorePage.style.display = "block"; // Show Final Score Page 

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

initialButton.addEventListener("click", function(event) { // click takes you to the high score page 
  event.preventDefault();
  
  console.log(event);
   
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

 
 // Questions
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
  },
];





 
