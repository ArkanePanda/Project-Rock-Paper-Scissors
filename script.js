let rock = "rock";
let paper = "paper";
let scissor = "scissor";

function getComputerChoice() {
    let cpuChoice = Math.random();
    if (cpuChoice < 1/3) {
        return rock;
    } else if (cpuChoice < 2/3) {
        return paper;
    } else {
        return scissor;
    }
}

function getHumanChoice() {
    let playerChoice = prompt();
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice === rock) {
        return rock;
    }
    if (playerChoice === paper) {
        return paper;
    }
    if (playerChoice === scissor) {
        return scissor;
    }
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice === computerChoice) {
            console.log("It's a tie!")
            console.log(humanScore + ":" + computerScore);
        } else if (humanChoice === rock &&  computerChoice === scissor) {
            humanScore++;
            console.log("You won! Rock beats Scissor");
            console.log(humanScore + ":" + computerScore);
        } else if (humanChoice === paper && computerChoice === rock) {
            humanScore++;
            console.log("You won! Paper beats Rock");
            console.log(humanScore + ":" + computerScore);
        } else if (humanChoice === scissor && computerChoice === paper) {
            humanScore++;
            console.log("You won! Scissor beats Paper");
            console.log(humanScore + ":" + computerScore);
        } else {
            computerScore++;
            const computerChoiceDisplay = computerChoice[0].toUpperCase() + computerChoice.slice(1);
            const humanChoiceDisplay = humanChoice[0].toUpperCase() + humanChoice.slice(1);
            console.log(`You lost! ${computerChoiceDisplay} beats ${humanChoiceDisplay}`);
            console.log(humanScore + ":" + computerScore);
        }
    }

    let rounds = 5;
    for (let i = 1; i <= rounds; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("You're the champion!");
    } else if (computerScore > humanScore) {
        console.log("Get Rekt Plebian!");
    } else {
        console.log("It's a tie! unfortunately...");
    }
}

playGame();