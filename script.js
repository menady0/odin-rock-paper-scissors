let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  switch (random) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      return "Error";
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Enter Your Choice: ");
  humanChoice = humanChoice.toLowerCase();
  return humanChoice;
}

// getHumanChoice is a function but get a new return every time it's called, it has to be written this way
const humanSelection = getHumanChoice;
const computerSelection = getComputerChoice;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "rock") {
    return "You are equals!";
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    return "You lose! Paper beats Rock!";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    return "You win! Rock beats Scissors!";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    return "You win! Paper beats Rock!";
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    return "You lose! Scissors beats Paper!";
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    return "You lose! Rock beats Scissors!";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    return "You win! Scissors beats Paper!";
  } else {
    return "Something is wrong!";
  }
}

function playGame() {
  let i = 0;
  do {
    playRound(humanSelection(), computerSelection());
    i++;
  } while (i < 4);
  console.log(
    `End of game\n${humanScore > computerScore ? "You won the game!" : computerScore > humanScore ? "You lost the game!" : "This is draw!"}\nYour Score: ${humanScore},\nComputer Score: ${computerScore}`,
  );
}
playGame();
