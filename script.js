//write a function that gets user choice and stores it in a var
//write a function that gets a random num from 1 to 3 and attach it to either rock paper or scissors and stores it in a var
//write a function playRound that takes both choices as arg and increment the score of both players
//loop the previous function 5 times
// decide who won by compring the scores

let playerChoice;
let computerChoice;
let randNum;
let playerScore = 0;
let computerScore = 0;

function getPlayerChoice() { 
    if 
    return playerChoice = (prompt('Rock, Paper or Scissors?')).toLocaleLowerCase()
}
getPlayerChoice()
console.log(`the player's choice is ${playerChoice}`)

function getRandNum() {
    return randNum = Math.floor(Math.random() * 3) + 1
}
getRandNum()
console.log(randNum)

function getComputerChoice() {
    if (randNum == 1) {
        return computerChoice = 'rock'
    }
    else if (randNum == 2) {
        return computerChoice = 'paper'
    }
    else {
        return computerChoice = 'scissors'
    }
}
getComputerChoice()
console.log(`the computer choice is ${computerChoice}`)

function playRound(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        console.log("it's a draw.");
        playerScore++;
        return computerScore++
    }
    
    else if (playerChoice == 'rock' && computerChoice == 'scissors' ||
             playerChoice == 'paper' && computerChoice == 'rock' ||
             playerChoice == 'scissors' && computerChoice == 'paper') {
        console.log(`Human wins`)
        return playerScore++        
    }
    else if (computerChoice == 'rock' && playerChoice == 'scissors' ||
             computerChoice == 'paper' && playerChoice == 'rock' ||
             computerChoice == 'scissors' && playerChoice == 'paper') {
        console.log('Computer wins')
        return computerScore++       
    }
    else if (playerChoice == 0) {
        alert('Game cancelled :( I hope we play next time.')
    }
    else {
        console.log('Please enter a valid choice!')
    }
}

playRound(playerChoice, computerChoice)
console.log(playerScore)
console.log(computerScore)




