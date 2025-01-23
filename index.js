function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3) + 1;

    if (choice === 1) {
        return 'rock';
    } else if (choice === 2) {
        return 'paper';
    } else if (choice === 3) {
        return 'scissor';
    } else {
        console.log('Error, must return numbers between 1-3!')
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'scissor' ||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissor' && computerChoice === 'paper') 
    {
        humanScore++;
        return displayRoundResults(`You win! ${humanChoice} beats ${computerChoice}.`);
    } else if (computerChoice === 'rock' && humanChoice === 'scissor' ||
        computerChoice === 'paper' && humanChoice === 'rock' ||
        computerChoice === 'scissor' && humanChoice === 'paper') 
    {
        computerScore++;
        return displayRoundResults(`You lose! ${computerChoice} beats ${humanChoice}.`);
    } else if (humanChoice === 'rock' && computerChoice === 'rock' ||
        humanChoice === 'paper' && computerChoice === 'paper' ||
        humanChoice === 'scissor' && computerChoice === 'scissor'){
        return displayRoundResults(`It's a tie! Both chose ${humanChoice}.`);
    } else {
        return displayRoundResults('Error! Did you input a valid choice?');
    }
}

function checkWinner() {
    const announceWinner = document.createElement('h2');
    if (humanScore > computerScore) {
        announceWinner.textContent = 'You win!';
    } else if (humanScore < computerScore) {
        announceWinner.textContent = 'You lose.';
    } else {
        announceWinner.textContent = 'It was a tie';
    }
    
    roundResultDiv.appendChild(announceWinner);
}

function displayRoundResults(outcome) {
    roundResultHeader.textContent = outcome;
    humanScoreHeader.textContent = `Your Score: ${humanScore}`;
    computerScoreHeader.textContent = `Computer Score: ${computerScore}`;

    if (humanScore >= 5 || computerScore >= 5) {
        checkWinner();
    }
}

let humanScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('.choice');

choices.forEach(choice => {
    choice.addEventListener('click', (e) => {
        let humanChoice = e.target.value;
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });
});

const roundResultDiv = document.querySelector('.round-result');
const roundResultHeader = document.createElement('h1');


const humanScoreHeader = document.querySelector('.human-score');
const computerScoreHeader = document.querySelector('.computer-score');

roundResultHeader.textContent = 'Rock, paper, or scissor?';
roundResultDiv.appendChild(roundResultHeader);