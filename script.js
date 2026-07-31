const scoreElements = {
    human: document.getElementById('human-score'),
    computer: document.getElementById('computer-score'),
};
const roundResult = document.getElementById('round-result');
const gameResult = document.getElementById('game-result');
const historyList = document.getElementById('history-list');
const choiceButtons = document.querySelectorAll('.choice-button');
const resetButton = document.getElementById('reset-button');

let humanScore = 0;
let computerScore = 0;
let roundNumber = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function updateScores() {
    scoreElements.human.textContent = `You: ${humanScore}`;
    scoreElements.computer.textContent = `Computer: ${computerScore}`;
}

function createHistoryItem(text) {
    const item = document.createElement('li');
    item.textContent = text;

    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => item.remove());

    item.appendChild(removeButton);
    historyList.prepend(item);
}

function getRoundMessage(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return `Tie: both chose ${humanChoice}.`;
    }

    const didHumanWin =
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper');

    if (didHumanWin) {
        humanScore += 1;
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    }

    computerScore += 1;
    return `You lose! ${computerChoice} beats ${humanChoice}.`;
}

function setGameResult() {
    if (humanScore > computerScore) {
        gameResult.textContent = 'You are winning! Keep going.';
    } else if (humanScore < computerScore) {
        gameResult.textContent = 'Computer is ahead — try another round.';
    } else {
        gameResult.textContent = 'It is tied right now.';
    }
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    roundNumber += 1;

    const message = getRoundMessage(humanChoice, computerChoice);
    updateScores();
    roundResult.textContent = `Round ${roundNumber}: ${message}`;
    setGameResult();
    createHistoryItem(`Round ${roundNumber}: ${message}`);
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    roundNumber = 0;
    updateScores();
    roundResult.textContent = 'Pick a move to start the game.';
    gameResult.textContent = '';
    historyList.innerHTML = '';
}

choiceButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const humanChoice = button.dataset.choice;
        playRound(humanChoice);
    });
});

resetButton.addEventListener('click', resetGame);

resetGame();
