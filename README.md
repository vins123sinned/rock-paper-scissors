# rock-paper-scissors
This is a project that is split into two parts: one for the functionality of the popular game rock paper scissors in the developer console and another with a fully fledged user interface on the website itself. As the first JavaScript project of The Odin Project, this is to test my knowledge of functions, problem solving, pseudocode, and the various fundamental types and syntax that one needs to know about JavaScript in order to gain the fundamental knowledge for more complex and bigger websites.

By the end of the project, I hope to be able to get a solid grasp on JavaScript fundamentals which I will be using later on to create a basic website that will be able to prove my knowledge of the fundamentals. While I have done this course and other programming endeavors before, I am still relearning what I have put aside and this is just the beginning to my dedicated and successful programming career (hopefully...).


getComputerChoice function pseudo code
Computer gets a random choice between rock, paper, or scissors when function is called:
Call math random between number 1 to 3
If number is 1
  return "rock"
Else if number is 2
  return "paper"
Else if number is 3
  return "scissor"
Else
  log that something is wrong (only 3 numbers should be returned from math random)

getHumanChoice function pseudo code
Prompts the player to pick and choose any of the valid choices (Rock, Paper, or Scissor):
Prompt player to choose between rock, paper, or scissor
Create a variable that turns the input into all lowercase
If input is 'rock', 'paper', or 'scissor'
  return input;
Else 
  log that the input is not a valid choice

PlayRound function pseudo code
Create a function that starts a round and increments the winner's score:
Call playRound with the parameters of human choice and computer choice
If human choice is 'rock' and computer choice is 'scissor" or human choice is 'paper' and computer choice is 'rock' or human choice is 'scissor' and computer choice is 'paper'
  increase humanScore by 1
  log that the user has won
Else if computerChoice is 'rock' and humanChoice is 'scissor' or computerChoice is 'paper' and humanChoice is 'rock' or computerChoice is 'scissor' and humanChoice is 'paper'
  increase computerScore by 1
  log that the computer has won
Else 
  don't increase score for both sides
  log that it is a tie