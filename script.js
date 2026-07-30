// Rock Paper Scissors game script
// Simple browser-based CLI using `prompt` and `console`.

function getComputerChoice() {
    let num = Math.random();
    let computerChoice;

    if (num < 0.333) {
        computerChoice = "rock";
    } else if (num < 0.666) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    return computerChoice;
}


function getHumanChoice() {
    let humanChoice = (prompt("Please choose rock, paper, or scissors:") || "").trim().toLowerCase();
    while (humanChoice !== "rock" &&
           humanChoice !== "paper" &&
           humanChoice !== "scissors") {
        humanChoice = (prompt("Invalid choice. Please choose rock, paper, or scissors:") || "").trim().toLowerCase();
    }
    return humanChoice;
}




let humanScore=0;
let computerScore=0;

computerChoice = getComputerChoice();
humanChoice = getHumanChoice();
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }}

    function playGame() {
        for (let i = 0; i < 5; i++) {
            computerChoice = getComputerChoice();
            humanChoice = getHumanChoice();
            console.log(playRound(humanChoice, computerChoice));
        }
        if (humanScore > computerScore) {
            console.log(`You won the game! Final score: You ${humanScore} - Computer ${computerScore}`);
        } else if (humanScore < computerScore) {
            console.log(`You lost the game! Final score: You ${humanScore} - Computer ${computerScore}`);
        } else {
            console.log(`The game is a tie! Final score: You ${humanScore} - Computer ${computerScore}`);
        }
    }

playGame();