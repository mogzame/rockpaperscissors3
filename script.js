let playerChoice;
let computerChoice;
let randNum;
let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

let body = document.querySelector('body')
let container = document.querySelector('.container');
let playerP = document.querySelector('.btn.p')
let playerR = document.querySelector('.btn.r')
let playerS = document.querySelector('.btn.s')
let result = document.querySelector('.result')
let score = document.querySelector('.score')
let announce = document.querySelector('.announce')
let playAgainBtn = document.createElement('button');
score.textContent = 'Human 0 - 0 Computer'

function getRandNum() {
    return randNum = Math.floor(Math.random() * 3) + 1
}
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

function playRound(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        result.textContent = "it's a draw.";
        playerScore++;
        return computerScore++
    }
    
    else if (playerChoice == 'rock' && computerChoice == 'scissors' ||
             playerChoice == 'paper' && computerChoice == 'rock' ||
             playerChoice == 'scissors' && computerChoice == 'paper') {
        result.textContent = `Human wins. ${playerChoice} beats ${computerChoice}`
        return playerScore++
    }
    else if (computerChoice == 'rock' && playerChoice == 'scissors' ||
             computerChoice == 'paper' && playerChoice == 'rock' ||
             computerChoice == 'scissors' && playerChoice == 'paper') {
        result.textContent = `Computer wins. ${computerChoice} beats ${playerChoice}`
        return computerScore++       
    }
}
function round() {
            getRandNum()
            getComputerChoice()
            playRound(playerChoice, computerChoice)
}

function announceWinner() {
    if (playerScore > computerScore) {
        announce.textContent = `You win ${playerScore} - ${computerScore}. Looks like humans will always be superior after all! `
    }
    else if (playerScore < computerScore) {
        announce.textContent = `You got beaten ${computerScore} - ${playerScore} by a machine!`
    }
    else {
        "Looks like it's a draw. We can always play again!"
    }
}

function game() {
    for (i = 0; i < 5; i++) {
        getPlayerChoice()
        getRandNum()
        getComputerChoice()
        playRound(playerChoice, computerChoice)
    }
}

function alertWinner() {
    if (playerScore > computerScore) {
        alert(`You win ${playerScore} - ${computerScore}. Looks like humans will always be superior after all! `)
    }
    else if (computerScore> playerScore) {
        alert(`You got beaten ${computerScore} - ${playerScore} by a machine!`)
    }
    else if (computerScore == playerScore) {
        alert("Looks like it's a draw. We can always play again!")
    }
}

container.addEventListener('click', (e) => {
        if (roundNumber === 4) {
            announceWinner()
            body.append(playAgainBtn);
            playAgainBtn.textContent = 'Play Again!';
            playAgainBtn.addEventListener('click', () => {
                location.reload();
            })            


        }
        
        else {
        switch(e.target.textContent) {
            case 'Rock':
                playerChoice = 'rock'
                round()
            break;
            case 'Paper':
                playerChoice = 'paper'
                round()
            break;
            case 'Scissors':
                playerChoice = 'scissors'
                round()
            break;
            }
        score.textContent = `Human ${playerScore} - ${computerScore} Computer`
        roundNumber++;
        console.log(`round number is ${roundNumber}`)
        
        }
    }
)


