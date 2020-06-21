//VARIABLES
// var body = document.body;
var header = document.querySelector(".header");
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
var questionButton = document.querySelector(".questionButton");

var quizChallengePage = document.getElementById("quizChallengePage");
var finalScorePage = document.getElementById("finalScorePage");
var highScoreButtons = document.getElementById("highScoreButtons");

var initialButton = document.getElementById("initialButton"); 
var initials = document.getElementById("initials"); 
var initialInput = document.getElementById("initialInput"); 

var allDone = document.getElementById("allDone");
var allDoneButtons = document.getElementById("form-inline");

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

submitButton.addEventListener("click", function() { // Event Listener when hit start quiz 
  startQuiz()
  console.log("CLICK SUBMIT")
})

// TIMER FUNCTION BEGINS 
var secondsLeft = 80; // Seconds in Timer 
var startScore = 0; // Starting time 
var timer = document.getElementById("timer"); // Timer Variable 

timer.textContent = "Time: " + startScore; // Holder text in nav bar 

function startQuiz() { 
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
  quizQuestionsPage.style.display = "none"; // Hide Questions Page
  highScoreButtons.style.display = "none"; // Hide Questions Page
  finalScorePage.style.display = "block"; // Show Final Score Page 

  if (startScore === 0 || quizQuestions.length -1) { 
    finalScoreIs.textContent = "Your final score is " + secondsLeft;

    initialButton.textContent = "Submit"; // Form button 
    initials.textContent = "Enter Your Initials: "; // Form text
  }
} // end of showFinalScore

initialButton.addEventListener("click", function() { // Event Listener to get / store initials & go to highscore page
  header.style.display = "none"; // Hide header 
  allDone.style.display = "none"; // Hide all done
  finalScoreIs.style.display = "none" // Hide Final Score
  initials.style.display = "none" // Hide initial input
  initialButton.style.display = "none" // Hide initial button
  initialInput.style.display = "none" // Hide initial button
  highScoreButtons.style.display = "block"; // Show Final Score Page 
  
  var getInitials = document.getElementById("initialInput").value; // captures the value of the initials 
  
  localStorage.setItem("getInitials", getInitials); // Adds initials to Storage
  localStorage.setItem("secondsLeft", secondsLeft);  // Adds final core to Storage

  var highScores = getInitials + ": " + secondsLeft; // add in + getInitials when read it

  $("#highScoreList").append(highScores) // Appends high score & initials

}) // end of initial button event listener

// GO BACK BUTTON EVENT liSTENER - WORKS 
goBack.addEventListener("click", function() { // Go back to the home page
  quizChallengePage.style.display = "block"; 
  header.style.display = "block"; // Hide header 
  finalScorePage.style.display = "none";
})

// CLEAR HIGH SCORES - WORKS
clearHighScore.addEventListener("click", function() {
  localStorage.clear();
})

// CLICK TO VIEW HIGH SCORES- Currently shows "All done page"
score.addEventListener("click", function() {
  quizChallengePage.style.display = "none"; // Hide Quiz Questions Page
  showFinalScore()
})






