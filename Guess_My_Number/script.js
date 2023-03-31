"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
//function to avoid recursion to select message element from html
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

//document.querySelector(".number").textContent = secretNumber;

//-----------Click event to guess the number
document.querySelector(".check").addEventListener("click", function () {
  //takes the value fron input field
  const guess = Number(document.querySelector(".guess").value);

  console.log(typeof guess);
  //no number
  if (!guess) {
    displayMessage("No Number!");
  }
  //number is right
  else if (guess === secretNumber) {
    displayMessage("Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = score;
    }
  }
  //number is greater
  else if (guess !== secretNumber) {
    //desreases the score every time for wrong answer

    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    }
    //lost the game
    else {
      displayMessage("You loose the game!");
      document.querySelector(".score").textContent = 0;
    }
    //number is lesser
  }
});
//----------click event ends for guessing the number

//----------click even to reset the game
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".number").textContent = secretNumber;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
  displayMessage("Start Guessing...");
  document.querySelector(".score").textContent = score;
});
