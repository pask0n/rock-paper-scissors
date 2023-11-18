function getComputerChoice() {
    let random = Math.floor(Math.random() * 3)
    console.log(random)

    if (random == 0) {
        return 'rock'
    } else if (random == 1) {
        return 'paper'
    } else if (random == 2) {
        return 'scissors'
    } else {
        return
    } 
}

let playerChoice = prompt('Rock, paper, or scissors?').toLowerCase()

console.log(getComputerChoice())
console.log(playerChoice)