function getComputerChoice() {
    let random = Math.floor(Math.random() * 3)

    if (random === 0) {
        return 'rock'
    } else if (random === 1) {
        return 'paper'
    } else if (random === 2) {
        return 'scissors'
    } else {
        return
    } 
}

let playerChoice;
let computerChoice;

let playerScore = 0;
let computerScore = 0;

function playRound(playerChoice, computerChoice) {
    playerChoice = prompt('Rock, paper, or scissors?').toLowerCase()
    computerChoice = getComputerChoice()

    if (playerChoice === computerChoice) {
        alert('It\'s a draw! Same choice from both players')
    } else if (
        playerChoice === 'rock'
        && computerChoice === 'paper') {
            alert('Your lose! Paper beats Rock')
            computerScore += 1
    } else if (
        playerChoice === 'rock'
        && computerChoice === 'scissors') {
            alert('You win! Rock beats Scissors')
            playerScore += 1
    } else if (
        playerChoice === 'paper'
        && computerChoice === 'rock') {
            alert('You win! Paper beats Rock')
            playerScore += 1
    } else if (
        playerChoice === 'paper'
        && computerChoice === 'scissors') {
            alert('You lose! Scissors beats paper')
            computerScore += 1
    } else if  (
        playerChoice === 'scissors'
        && computerChoice === 'rock') {
            alert('You lose! Rock beats scissors')
            computerScore += 1
    } else if (
        playerChoice === 'scissors'
        && computerChoice === 'paper') {
            alert('You win! Scissors beats paper')
            playerScore += 1
    } else {
        alert('Invalid choice. Counts as a loss')
        computerScore += 1
    }
}

function game() {
    console.log('game started')
    for (let i = 0; i < 5; i++) {
        playRound(playerChoice, computerChoice);
    }

    let finalResult;
    if (playerScore > computerScore) {
        finalResult = 'You win!'
    } else if (computerScore > playerScore) {
        finalResult = 'You lose!'
    } else if (playerScore === playerScore) {
        finalResult = 'It\'s a tie!'
    } else {
        return
    }
    
    alert(`${finalResult}
    Player ${playerScore}-${computerScore} Computer`)
    console.log(`${finalResult}
    Player ${playerScore}-${computerScore} Computer`)
}

game();