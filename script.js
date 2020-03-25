//Variable IDs 
var score = document.getElementById("score");
var start = document.getElementById("start");
var submitButton = document.getElementById("submit");
var explanation = document.getElementById("explanation");
var submitButton = document.getElementById("submitButton");
var quizQuestionHeader = document.getElementById("quizQuestionHeader");
var choice1 = document.getElementById("1");
var choice2 = document.getElementById("2");
var choice3 = document.getElementById("3");
var choice4 = document.getElementById("4");
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
    [quizQuestionHeader, "Commonly used Data Types Include:"], 
    [1, "1. strings"],
    [2, "2. booleans"],
    [3, "3. alerts"],
    [4, "4. numbers"],
    [correct, ""],
,
    [quizQuestionHeader, "The condition in an if / else statement is enclosed within ________."],
    [1, "1. quotes"],
    [2, "2. curly brackets"],
    [3, "3. parenthesis"],
    [4, "4. square brackets"],
    [correct, "3. parenthesis"],
,
    [quizQuestionHeader, "Arrays in JavaScript can be used to store ________."],
    [1, "1. numbers and strings"],
    [2, "2. other arrays"],
    [3, "3. booleans"],
    [4, "4. all of the above"],
    [correct, "4. all of the above"],
,
    [quizQuestionHeader, "String values must be enclosed within ________ when being assigned to variables"],
    [1, "1. commas"],
    [2, "2. curly brackets"],
    [3, "3. quotes"],
    [4, "4. parenthesis"],
    [correct, "3. quotes"],
,
    [quizQuestionHeader, "A very useful tool used for developing and debugging for printing content to the debugger is:"],//
    [1, "1. JavaScript"],
    [2, "2. terminal / bash"],
    [3, "3. for loops"],
    [4, "4. console.log"],
    [correct, "4. console.log"],
];

//Coding Quiz Challenge Page 
start.textContent = "Coding Quiz Challenge";
explanation.textContent = "Try to answer the following code-related questions within 80 seconds. Every incorrect answers will penalize your time by ten seconds";
submitButton.textContent = "Start Quiz";

quizQuestionsPage.style.display = "none"; // Hide Quiz Questions Page
finalScorePage.style.display = "none";   // Hide Final Core Page 

// START QUIZ / TIMER FUNCTION
submitButton.addEventListener("click", startQuiz)  // Start Timer Button 

  var secondsLeft = 10; // Seconds in Timer 
  var startScore = 0; // Starting time 
  var finalScore = "";  // Holder for Final Time 
  var timer = document.getElementById("timer"); // Timer Variable 

timer.textContent = "Time: " + startScore; // Holder text in nav bar  
console.log(quizQuestions[0][1]);
quizQuestionsPage.textContent = (`${quizQuestions[0][1]}`);

function startQuiz() { // Timer function Begins 
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

// Loop Questions - NEED TO FIX 
function askQuestions () {



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

// Go to All Done page & Print Score
function finalScorePage() {
  quizChallengePage.style.display = "none"; // Hide Quiz Challenge Page
  quizQuestionsPage.style.display = "none"; // Hide Questions Page
  finalScorePage.style.display = "block"; // Show Final Score Page 

  if (secondsLeft === 0 || quizQuestions.length === null) {
    allDone.textContent = "All done!";
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

 






 
