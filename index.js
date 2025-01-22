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
    resultDiv.appendChild(announceWinner);
}

function displayRoundResults(string) {
    console.log(`Your wins: ${humanScore}`);
    console.log(`Computer wins: ${computerScore}`);
    resultHeader.textContent = string;
    if (humanScore >= 5 || computerScore >= 5) {
        checkWinner();
    }
}

let humanScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('.choice');
const resultDiv = document.querySelector('.round-result');
const resultHeader = document.createElement('h1');

resultHeader.textContent = 'Rock, paper, or scissor?';

resultDiv.appendChild(resultHeader);

choices.forEach(choice => {
    choice.addEventListener('click', (e) => {
        let humanChoice = e.target.value;
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });
});