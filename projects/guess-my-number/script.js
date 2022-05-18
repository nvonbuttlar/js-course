'use strict';

// Guess my number
// 1. randomly select a target number to guess - DONE
// 2. update the "start guessing" text as too high or too low based on guess
// 3. reduce score by one on every wrong answer
// 4. if answer is correct: 
// - update "start guessing" to "correct number"
// - turn background green
// - set highscore OR update if it is beaten on subsequent try
// - click again to reset number and score, but not highscore.

const generateNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
} 

const targetNumber = generateNumber(1, 20);
console.log("target number: ", targetNumber);

let score = 20;

const checkGuess = () => {

  const inputVal = document.querySelector(".guess").value;
  console.log("input value: ", inputVal);

  const guessDiff = inputVal - targetNumber;

  if (guessDiff > 0) {
    document.querySelector(".message").textContent = "too high...";
    score -- 
    document.querySelector(".score").textContent = score;
  } else if (guessDiff < 0) {
    document.querySelector(".message").textContent = "too low...";
    score -- 
    document.querySelector(".score").textContent = score;
  } else {
    document.querySelector(".message").textContent = "correct number!";
    document.body.style.backgroundColor = "#60b347";
    document.querySelector(".check").remove();
    document.querySelector(".guess").setAttribute("disabled", "");
    document.querySelector(".highscore").textContent = score;

    // need logic for new high score!
  }
}

const checkBtn = document.querySelector(".check");
checkBtn.addEventListener("click", checkGuess, false);


// need function to reset some values for again! button