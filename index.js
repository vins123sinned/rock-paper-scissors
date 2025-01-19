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
        choice === 'scissor') {
        return choice;
    } else {
        console.log('That is not a valid input! Please make sure to type it correctly!');
    }
}

let humanScore = 0;
let computerScore = 0;