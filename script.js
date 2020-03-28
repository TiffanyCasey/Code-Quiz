//VARIABLE ID'S
var score = document.getElementById("score");
var submitButton = document.getElementById("submitButton");

var quizQuestionHeader = document.getElementById("quizQuestionHeader");
var choice1 = document.getElementById("one");
var choice2 = document.getElementById("two");
var choice3 = document.getElementById("three");
var choice4 = document.getElementById("four");
var correct = document.getElementById("correct");
var answerResponse = document.getElementById("answerResponse");


var finalScoreIs = document.getElementById("finalScoreIs");
var quizQuestionsPage = document.getElementById("quizQuestionsPage");
var questionButton = document.getElementsByClassName("questionButton");

//VARIABLE CLASSES TO HIDE/SHOW PAGES
var quizChallengePage = document.querySelector(".quizChallengePage");
var finalScorePage = document.querySelector(".finalScorePage");

// QUIZ QUESTION ARRAY
var quizQuestions = [
  {
  "quizQuestionHeader" : "Commonly used Data Types do NOT Include:", 
  "one" : "1. strings",
  "two" : "2. booleans",
  "three" : "3. alerts",
  "four" : "4. numbers",
  "correct" : "3. alerts",
  },{
  "quizQuestionHeader" : "The condition in an if / else statement is enclosed within ________.",
  "one" : "1. quotes",
  "two" : "2. curly brackets",
  "three" : "3. parenthesis",
  "four" : "4. square brackets",
  "correct" : "3. parenthesis",
  },{
  "quizQuestionHeader" : "Arrays in JavaScript can be used to store ________.",
  "one" : "1. numbers and strings",
  "two" : "2. other arrays",
  "three" : "3. booleans",
  "four" : "4. all of the above",
  "correct" : "4. all of the above",
  },{
   "quizQuestionHeader" : "String values must be enclosed within ________ when being assigned to variables",
   "one" : "1. commas",
   "two" : "2. curly brackets",
   "three" : "3. quotes",
   "four" : "4. parenthesis",
   "correct" : "3. quotes",
  },{
   "quizQuestionHeader" : "A very useful tool used for developing and debugging for printing content to the debugger is:",
   "one" : "1. JavaScript",
   "two" : "2. terminal / bash",
   "three" : "3. for loops",
   "four" : "4. console.log",
   "correct" : "4. console.log",
  },
]

//CODING QUIZ CHALLENGE PAGE 
quizQuestionsPage.style.display = "none"; // Hide Quiz Questions Page
finalScorePage.style.display = "none";   // Hide Final Core Page 

submitButton.addEventListener("click", startQuiz);  // Event Listener when hit start quiz 

// TIMER FUNCTION BEGINS 
var secondsLeft = 80; // Seconds in Timer 
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

    if (secondsLeft === 0 || quizQuestions.length === questionIndex+1) {
      clearInterval(timerInterval);
      showFinalScore();
    }
  }, 1000);
}

// SHOW QUESTIONS
var questionIndex = 0;
var previousQuestionIndex = quizQuestions.length -1;

function showQuestions() {
  var q = quizQuestions[questionIndex];

  quizQuestionHeader.innerHTML = q.quizQuestionHeader;
  choice1.innerHTML = q.one;
  choice1.setAttribute("data-answer", q.one);
  choice2.innerHTML = q.two;
  choice2.setAttribute("data-answer", q.two);
  choice3.innerHTML = q.three;
  choice3.setAttribute("data-answer", q.three);
  choice4.innerHTML = q.four;
  choice4.setAttribute("data-answer", q.four);
}

// EVENT LISTENERS WHEN USER CLICKS BUTTON
showQuestions();
choice1.addEventListener("click", function (event) {
  checkAnswer(event);
})
choice2.addEventListener("click", function (event) {
  checkAnswer(event);
})
choice3.addEventListener("click", function (event) {
  checkAnswer(event);
})
choice4.addEventListener("click", function (event) {
  checkAnswer(event);
})

 // CHECK TO SEE IF ANSWER IS CORRECT
function checkAnswer(event) {
  event.preventDefault();

  var answer = event.currentTarget.dataset.answer;
  var correctAnswer = null;

  if (quizQuestions[questionIndex].correct === answer) {
      correctAnswer = answer;
  }
  if (answer === correctAnswer) {
  answerResponse.textContent = "Correct!"; // If correct, say correct
  } else {
  answerResponse.textContent = "Wrong!"; // If wrong, say wrong & deduct 10 points
      secondsLeft -= 10
      if (secondsLeft < 0) {
          secondsLeft = 0;
      }
  }
  if (quizQuestions.length === questionIndex+1) {
    showFinalScore(); // If it has gone through all questions, show final score
    return; // If not, print the next question
  }
  questionIndex++;
  showQuestions();
}

// GO TO "ALL DONE" PAGE AND SHOW FINAL SCORE

function showFinalScore() { //Function to go to page when time out or quiz complete 
  quizChallengePage.style.display = "none"; // Hide Quiz Challenge Page
  quizQuestionsPage.style.display = "none"; // Hide Questions Page
  answerResponse.style.display = "none"; // Hides correct/incorrect response 
  finalScorePage.style.display = "block"; // Show Final Score Page 

  if (startScore === 0 || quizQuestions.length -1) { 
    finalScoreIs.textContent = "Your final score is " + secondsLeft;
  }
}

// CAPTURE INITIALS AND GO TO HIGH SCORE PAGE 
var initialButton = document.getElementById("initialButton"); // Variable for Initial input
var initials = document.getElementById("initials"); // Variable for Initial input
var intitialInput = document.getElementById("initialInput"); // Variable for Initial input
var printInitials = document.getElementById("highScoreList");

initialButton.textContent = "Submit"; // Form button 
initials.textContent = "Enter Your Initials: "; // Form text

initialButton.addEventListener("click", function() {  // Event Listener when entering ID 
  var getInitials = document.getElementById("initialInput").value; 

  localStorage.setItem("getInitials", getInitials); // Adds Intials to Storage
  localStorage.setItem("secondsLeft", secondsLeft);  // Adds final core to Storage
  
  renderFinalScores (); // // Returns value of final score
  function renderFinalScores() { 
    var secondsLeft = localStorage.getItem("secondsLeft");  
  }

  renderInitials (); // Returns value of Initials 
  function renderInitials() { 
    var getInitials = localStorage.getItem("initialInput");  
}
});

// PRINTS HIGH SCORES 
var highScores = [];

for (var i = 0; i < highScores.length; i++) {
  var highScores = highScores[i];

  var li = document.createElement("li");
  li.textContent = highScores;
  getInitials.appendChild(li);
  secondsLeft.appendChild(li);

}


// CLEAR HIGH SCORES 
var clearHighScore = document.getElementById("clearHighScore");

clearHighScore.addEventListener("click", function() {
  localStorage.clear();
  window.location.href = "highscore.html";
})

