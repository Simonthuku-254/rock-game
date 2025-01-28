function getComputerChoice() {
    const randomNumber = Math.random();

    if(randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
  const validChoices = ["rock", "paper", "scissors"];
  let choice = prompt(
    "Enter your choice: rock, paper, or scissors"
  ).toLowerCase();

  while (!validChoices.includes(choice)) {
    choice = prompt(
      "Invalid choice! Please enter: rock, paper, or scissors"
    ).toLowerCase();
  }

  return choice;
}
console.log(getComputerChoice())

// Test the function
function getHumanChoice() {
  const validChoices = ["rock", "paper", "scissors"];
  let choice = prompt(
    "Enter your choice: rock, paper, or scissors"
  ).toLowerCase();

  while (!validChoices.includes(choice)) {
    choice = prompt(
      "Invalid choice! Please enter: rock, paper, or scissors"
    ).toLowerCase();
  }

  return choice;
}

// Test the function
console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log(`It's a tie ! Both chose{humanChoice}.`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "papper") ||
        (humanChoice === "papper" && computerChoice === "rock") 
    ) {
        humanScore ++;
        console.log(`You Win! ${humanChoice} beats ${computerChoice}.`);
    } else {
        computerScore++;
        console.log(`you lose! ${computerChoice} beats ${humanChoice}.`);
    }

    console.log(`Scores: Human - ${humanScore}, Computer - ${computerChoice}`);
}

playRound("rock", "scissors"); // Example test case: Human wins
playRound("rock", "paper"); // Example test case: Computer wins
playRound("paper", "paper"); //Example test case: Tie