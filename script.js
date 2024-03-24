function GetComputerChoice() {
    const options = ["rock", "paper", "scissors"];

    return options[Math.floor(Math.random() * 3)];
}

let playerScore = 0;
let AIScore = 0;
let result;

function SingleRound(playerSelection, computerSelection) {
    switch (true) {
        case playerSelection.toLowerCase() == "rock" && computerSelection == "paper":
            AIScore++;
            return "AI wins. Paper beats rock!";
            break;
        case playerSelection.toLowerCase() == "rock" && computerSelection == "scissors":
            playerScore++;
            return "Player wins. Rock beats scissors!";
            break;
        case playerSelection.toLowerCase() == "paper" && computerSelection == "rock":
            playerScore++;
            return "Player wins. Paper beats rock!";
            break;
        case playerSelection.toLowerCase() == "paper" && computerSelection == "scissors":
            AIScore++;
            return "AI wins. Scissors beats paper";
            break;
        case playerSelection.toLowerCase() == "scissors" && computerSelection == "rock":
            AIScore++;
            return "AI wins. Rock beats scissors!";
            break;    
        case playerSelection.toLowerCase() == "scissors" && computerSelection == "paper":
            playerScore++;
            return "Player wins. Scissors beats paper!";
            break;     
        case playerSelection.toLowerCase() == computerSelection:
            AIScore++;
            playerScore++;
            return "There's a TIE!";
            break;
        default:
            break;
    }
}

let playerChoice = prompt("Rock, paper or scissors?: ");

function PlayGame() {
    
}

PlayGame();