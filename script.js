//write a function that gets user choice and stores it in a var
//write a function that gets a random num from 1 to 3 and attach it to either rock paper or scissors and stores it in a var
//write a function playRound that takes both choices as arg and increment the score of both players
//loop the previous function 5 times
// decide who won by compring the scores

let playerChoice;
let computerChoice;
let randNum;

function getPlayerChoice() { 
    return playerChoice = (prompt('Rock, Paper or Scissors?')).toLocaleLowerCase()
}
getPlayerChoice()
console.log(`the player's choice is ${playerChoice}`)

function getRandNum() {
    return randNum = Math.floor(Math.random() * 3) + 1
}
getRandNum()
console.log(randNum)





