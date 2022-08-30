const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisaplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");

const possibleChoices = document.querySelectorAll("button");

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoices) =>
  possibleChoices.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisaplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNum = Math.floor(Math.random() * possibleChoices.length) + 1;
  switch (randomNum) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "scissors";
      break;
    case 3:
      computerChoice = "paper";
      break;
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}


function getResult() {

    if(computerChoice === userChoice){
        result = 'its a draw!'
    }else if(computerChoice === 'rock' && userChoice === "paper"){
        result = "you win!"
    }else if(computerChoice === 'rock' && userChoice === "scissors"){
        result = 'you lost!'
    }else if(computerChoice === 'paper' && userChoice === "scissors"){
        result = 'you win!'
    }else if(computerChoice === 'paper' && userChoice === "rock"){
        result = 'you lost!'
    }else if(computerChoice === 'scissors' && userChoice === "rock"){
        result = 'you win!'
    }else if(computerChoice === 'scissors' && userChoice === "paper"){
        result = 'you lost!'
    }

    resultDisplay.innerHTML = result
}