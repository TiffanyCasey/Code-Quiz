// HEADER 

//Variables
var score = document.getElementById("score");
var timer = document.getElementById("timer");

//Text
score.textContent = "View High Scores";
timer.textContent = "Time: " + secondsLeft;

//Style
score.setAttribute("style", "color:purple; padding-left:20px;");
timer.setAttribute("style", "float:right; padding-right:30px;");

// Timer Function
var totalScore = 0;
var secondsLeft = 90;  

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
    
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        finalScore();
      }
  
    }, 1000);
  }

// START QUIZ
var h1 = document.querySelectorAll("h1");
var text = document.querySelectorAll("p");
var button = document.querySelector("button");
h1[0].textContent = "Coding Quiz Challenge"
text[0].textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your time by ten seconds";
button.textContent = "Start Quiz";

// Variables for questions 
var quizQuestions = document.getElementById("quizQuestions");
var choice1 = document.getElementById("1");
var choice2 = document.getElementById("2");
var choice3 = document.getElementById("3");
var choice4 = document.getElementById("4");
var correctAnswer = document.getElementById("correct");
quizQuestions.setAttribute("style","font-size:20px; font-family:sans-serif;");
choice1.setAttribute("style", "text-align:center; background-color:#8064A2; border-color:#8064A2; color:white;font-size:22px; padding: 0px 12px 0px 12px;");  
choice2.setAttribute("style", "text-align:center; background-color:#8064A2; border-color:#8064A2; color:white;font-size:22px; padding: 0px 12px 0px 12px;");  
choice3.setAttribute("style", "text-align:center; background-color:#8064A2; border-color:#8064A2; color:white;font-size:22px; padding: 0px 12px 0px 12px;");  
choice4.setAttribute("style", "text-align:center; background-color:#8064A2; border-color:#8064A2; color:white;font-size:22px; padding: 0px 12px 0px 12px;");  
correctAnswer.setAttribute("style","font-size:15px; font-family: sans-serif; color:grey font-style: italic");


// QUESTIONS 
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

//ALL DONE 
var end = document.getElementById("allDone")
var complete = document.getElementById("complete");
var submitButton = document.getElementById("submit");
var initials = document.getElementById("initials")
end.setAttribute("style","font-size:20px; font-family: sans-serif; padding:20px;");
finalScore.setAttribute("style","font-size:20px; font-family:sans-serif; padding:20px;");
submitButton.setAttribute("style", "text-align:center; background-color:#8064A2; border-color:#8064A2; color:white;font-size:22px; padding: 0px 12px 0px 12px;");  
initials.setAttribute("style","font-size:15px; font-family: sans-serif;");
end.textContent = "All done!";
complete.textContent = "Your final score is " + finalScore;
submitButton.textContent - "Submit";
initials.textContent - "Enter Initials";

//High Scores 







  // Final Score Function 
  function showScore() {
    finalScore.textContent = " ";
    mainEl.appendChild(imgEl);
  
  }
  setTime();

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

 // Score Function NEED TO FINISH 
 //var finalScore = 

