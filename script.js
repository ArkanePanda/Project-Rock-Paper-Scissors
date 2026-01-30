let rock = "rock";
let paper = "paper";
let scissor = "scissor";

function getComputerChoice() {
    let aiChoice = Math.random();
    if (aiChoice < 1/3) {
        return rock;
    } else if (aiChoice < 2/3) {
        return paper;
    } else {
        return scissor;
    }
}

function getHumanChoice() {
    let playerChoice = prompt();
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice == rock) {
        return rock;
    }
    if (playerChoice == paper) {
        return paper;
    }
    if (playerChoice == scissor) {
        return scissor;
    }
}

console.log(getComputerChoice());
console.log(getHumanChoice());