function getComputerChoice() {
    let random = Math.floor(Math.random() * 3)
    console.log(random)

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

let playerChoice = prompt('Rock, paper, or scissors?').toLowerCase()
let computerChoice = getComputerChoice()

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        alert('It\'s a draw! Same choice from both players')
    } else if (
        playerChoice === 'rock'
        && computerChoice === 'paper') {
            alert('Your lose! Paper beats Rock')
    } else if (
        playerChoice === 'rock'
        && computerChoice === 'scissors') {
            alert('You win! Rock beats Scissors')
    } else if (
        playerChoice === 'paper'
        && computerChoice === 'rock') {
            alert('You win! Paper beats Rock')
    } else if (
        playerChoice === 'paper'
        && computerChoice === 'scissors') {
            alert('You lose! Scissors beats paper')
    } else if  (
        playerChoice === 'scissors'
        && computerChoice === 'rock') {
            alert('You lose! Rock beats scissors')
    } else if (
        playerChoice === 'scissors'
        && computerChoice === 'paper') {
            alert('You win! Scissors beats paper')
        }
}

console.log('computerChoice = ' + computerChoice)
console.log('playerChoice = ' + playerChoice)

playRound(playerChoice, computerChoice);