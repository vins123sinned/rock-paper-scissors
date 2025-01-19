function getComputerChoice() {
    // A range from 0-2 also works but 1-3 looks nicer
    const choice = Math.floor(Math.random() * 3) + 1;

    if (choice === 1) {
        return 'rock';
    } else if (choice === 2) {
        return 'paper';
    } else if (choice === 3) {
        return 'scissor';
    } else {
        // Just in case, not necessary but I'll include it for good measure
        console.log('Error, must return numbers between 1-3!')
    }
}

function getHumanChoice() {
    let input = prompt('Rock, Paper, or Scissor?');
    let choice = input.toLowerCase();

    if (choice === 'rock' || choice === 'paper' || 
        choice === 'scissor') 
    {
        return choice;
    } else {
        console.log('That is not a valid input! Please make sure to type it correctly!');
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'scissor' ||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissor' && computerChoice === 'paper') 
    {
        humanScore++;
        return console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    } else if (computerChoice === 'rock' && humanChoice === 'scissor' ||
        computerChoice === 'paper' && humanChoice === 'rock' ||
        computerChoice === 'scissor' && humanChoice === 'paper') 
    {
        computerScore++;
        return console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    } else if (humanChoice === 'rock' && computerChoice === 'rcok' ||
        humanChoice === 'paper' && computerChoice === 'paper' ||
        humanChoice === 'scissor' && computerChoice === 'scissor'){
        return console.log(`It's a tie! Both chose ${humanChoice}.`);
    } else {
        return console.log('Error! Did you input a valid choice?');
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    checkWinner();
}

function checkWinner() {
    console.log(`Your wins: ${humanScore}`);
    console.log(`Computer wins: ${computerScore}`);
    console.log('...');
    if (humanScore > computerScore) {
        return console.log('You win!');
    } else if (humanScore < computerScore) {
        return console.log('You lose.');
    } else {
        return console.log('It was a tie')
    }
}

let humanScore = 0;
let computerScore = 0;

playGame();
