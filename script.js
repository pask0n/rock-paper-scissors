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
const playerScText = document.querySelector('#player-score-text')
const computerScText = document.querySelector('#computer-score-text')

const finalResult = document.querySelector('#final-result')

const btnRock = document.querySelector('#btn-rock');
const btnPaper = document.querySelector('#btn-paper');
const btnScissors = document.querySelector('#btn-scissors');

const records = document.querySelector('#records')

btnRock.addEventListener('click', () => {
    clearRecords();
    playRound('Rock',getComputerChoice());
    updateScoreDis();
    resetGame();
})
btnPaper.addEventListener('click', () => {
    clearRecords();
    playRound('Paper',getComputerChoice());
    updateScoreDis();
    resetGame();
})
btnScissors.addEventListener('click', () => {
    clearRecords();
    playRound('Scissors',getComputerChoice());
    updateScoreDis();
    resetGame();
})

let playerScore = 0;
let computerScore = 0;
let roundNo = 0;
let roundJustReset = false;

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        recordRound(playerChoice, computerChoice, 'Draw')
    } else if (
        playerChoice === 'Rock'
        && computerChoice === 'Paper') {
            recordRound(playerChoice, computerChoice, 'COM Win')
            computerScore += 1
    } else if (
        playerChoice === 'Rock'
        && computerChoice === 'Scissors') {
            recordRound(playerChoice, computerChoice, 'PLA Win')
            playerScore += 1
    } else if (
        playerChoice === 'Paper'
        && computerChoice === 'Rock') {  
            recordRound(playerChoice, computerChoice, 'PLA Win')
            playerScore += 1
    } else if (
        playerChoice === 'Paper'
        && computerChoice === 'Scissors') {
            recordRound(playerChoice, computerChoice, 'COM Win')
            computerScore += 1
    } else if (
        playerChoice === 'Scissors'
        && computerChoice === 'Rock') {
            recordRound(playerChoice, computerChoice, 'COM Win')
            computerScore += 1
    } else if (
        playerChoice === 'Scissors'
        && computerChoice === 'Paper') {
            recordRound(playerChoice, computerChoice, 'PLA Win')
            playerScore += 1
    } else {
        alert('Invalid choice. Counts as a loss')
        computerScore += 1
    }
}

function recordRound(playerChoice, computerChoice, roundResult) {
    roundNo += 1;
    const rec = document.createElement('p')
    rec.textContent = `${adjustMovesText(playerChoice, computerChoice)} ${roundResult}`
    records.appendChild(rec);
}

function adjustMovesText(playerChoice, computerChoice) {
    let playerMoveText = '';
    let computerMoveText = '';
    let roundNoText = '';

    if (playerChoice == 'Rock') {
        playerMoveText = 'Rock    '
    } else if (playerChoice == 'Paper') {
        playerMoveText = 'Paper   '
    } else if (playerChoice == 'Scissors') {
        playerMoveText = 'Scissors'
    } else {
        playerMoveText = 'ERROR   '
    }

    if (computerChoice == 'Rock') {
        computerMoveText = 'Rock    '
    } else if (computerChoice == 'Paper') {
        computerMoveText = 'Paper   '
    } else if (computerChoice == 'Scissors') {
        computerMoveText = 'Scissors'
    } else {
        computerMoveText = 'ERROR   '
    }

    if (roundNo < 10) {
        roundNoText = `${roundNo}  `;
    } else {
        roundNoText = `${roundNo} `;
    }

    return `${roundNoText} ${playerMoveText} ${computerMoveText}`
}

function updateScoreDis() {
    playerScDis.textContent = playerScore;
    computerScDis.textContent = computerScore;
    displayGameResult()
}

function displayGameResult() {
    playerScText.textContent = 'Player'
    computerScText.textContent = 'Computer'
    if (playerScore == 3) {
        playerScText.textContent = 'Player Wins!'
    } else if (computerScore == 3) {
        computerScText.textContent = 'Computer Wins!'
    }
}

function checkGameReset() {
    if (playerScore == 3 || computerScore == 3) {
        return true;
    }
    return false;
}

function resetGame() {
    if (checkGameReset()) {
        playerScore = 0;
        computerScore = 0;
        roundNo = 0;
        roundJustReset = true;
    }
}

function clearRecords() {
    if (roundJustReset == true) {
        removeAllChildNodes(records);
        roundJustReset = false;
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}