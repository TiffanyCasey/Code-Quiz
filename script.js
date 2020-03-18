// Initialize 
const start = document.getElementById("start");

// Button event listener 
btn.addEventListener("click", function(event) {
    event.preventDefault();    

//Variables     
var totalScore = 0;
var countDown = 0;   
    
  
// Function for Number Countdown 
function getFormattedMinutes() {
    //
    var secondsLeft = totalSeconds - secondsElapsed;
  
    var minutesLeft = Math.floor(secondsLeft / 80);
  
    var formattedMinutes;
  
    if (minutesLeft < 10) {
      formattedMinutes = "0" + minutesLeft;
    } else {
      formattedMinutes = minutesLeft;
    }
    return formattedMinutes;
  }  
    

//Launches the Quiz
function startQuiz {

}