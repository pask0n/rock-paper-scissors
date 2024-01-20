function getComputerChoice() {
    let random = Math.floor(Math.random() * 3)

    if (random === 0) {
        return 'Rock'
    } else if (random === 1) {
        return 'Paper'
    } else if (random === 2) {
        return 'Scissors'
    } else {
        return
    } 
}

const playerScDis = document.querySelector('#player-score-dis')
const computerScDis = document.querySelector('#computer-score-dis')

const finalResult = document.querySelector('#final-result')

const btnRock = document.querySelector('#btn-rock');
const btnPaper = document.querySelector('#btn-paper');
const btnScissors = document.querySelector('#btn-scissors');

const roundMovePlayer = document.querySelector('#round-move-player')
const roundMoveComputer = document.querySelector('#round-move-computer')
const roundResult = document.querySelector('#round-result')

btnRock.addEventListener('click', () => {
    playRound('Rock',getComputerChoice());
    updateScoreDis();
})
btnPaper.addEventListener('click', () => {
    playRound('Paper',getComputerChoice());
    updateScoreDis();
})
btnScissors.addEventListener('click', () => {
    playRound('Scissors',getComputerChoice());
    updateScoreDis();
})

let playerScore = 0;
let computerScore = 0;

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        displayRoundResultDraw(playerChoice, computerChoice)
    } else if (
        playerChoice === 'Rock'
        && computerChoice === 'Paper') {
            displayRoundResultLose(playerChoice, computerChoice)
            computerScore += 1
    } else if (
        playerChoice === 'Rock'
        && computerChoice === 'Scissors') {
            displayRoundResultWin(playerChoice, computerChoice)
            playerScore += 1
    } else if (
        playerChoice === 'Paper'
        && computerChoice === 'Rock') {  
            displayRoundResultWin(playerChoice, computerChoice)
            playerScore += 1
    } else if (
        playerChoice === 'Paper'
        && computerChoice === 'Scissors') {
            displayRoundResultLose(playerChoice, computerChoice)
            computerScore += 1
    } else if (
        playerChoice === 'Scissors'
        && computerChoice === 'Rock') {
            displayRoundResultLose(playerChoice, computerChoice)
            computerScore += 1
    } else if (
        playerChoice === 'Scissors'
        && computerChoice === 'Paper') {
            displayRoundResultWin(playerChoice, computerChoice)
            playerScore += 1
    } else {
        alert('Invalid choice. Counts as a loss')
        computerScore += 1
    }
}

function displayRoundResultWin(playerChoice, computerChoice) {
    roundMovePlayer.textContent = `Your Move : ${playerChoice}`
    roundMoveComputer.textContent = `Computer's Move : ${computerChoice}`
    roundResult.textContent = 'You Win!'
}

function displayRoundResultLose(playerChoice, computerChoice) {
    roundMovePlayer.textContent = `Your Move : ${playerChoice}`
    roundMoveComputer.textContent = `Computer's Move : ${computerChoice}`
    roundResult.textContent = 'You Lose!'
}

function displayRoundResultDraw(playerChoice, computerChoice) {
    roundMovePlayer.textContent = `Your Move : ${playerChoice}`
    roundMoveComputer.textContent = `Computer's Move : ${computerChoice}`
    roundResult.textContent = 'It\'s a draw!'
}

function updateScoreDis() {
    playerScDis.textContent = playerScore;
    computerScDis.textContent = computerScore;
    displayGameResult()
}

function displayGameResult() {
    finalResult.textContent = ''
    if (playerScore == 3) {
        finalResult.textContent = 'You Win!'
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore == 3) {
        finalResult.textContent = 'You Lose, The Computer Wins!'
        playerScore = 0;
        computerScore = 0;
    } else {
        return
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

