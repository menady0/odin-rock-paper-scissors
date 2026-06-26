let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0:
            console.log("Rock");
            break;
        case 1:
            console.log("Paper");
            break;
        case 2:
            console.log("Scissors");
            break;
        default:
            console.log("Error");
            break;
    }    
}
function getHumanChoice() {
    let humanChoice = prompt("Enter Your Choice: ")
    humanChoice = humanChoice.toLowerCase();
    console.log(humanChoice);
    
}

function playRound(humanChoice, computerScore) {
    
}