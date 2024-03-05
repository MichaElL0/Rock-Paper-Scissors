function GetComputerChoice() {
    const options = ["rock", "paper", "scissors"];

    return options[Math.floor(Math.random() * 3)];
}

function SingleRound(playerSelection, computerSelection) {
    switch (true) {
        case playerSelection.toLowerCase() == "rock" && computerSelection == "paper":
            return "AI wins. Paper beats rock!";
            break;
        case playerSelection.toLowerCase() == "rock" && computerSelection == "scissors":
            return "Player wins. Rock beats scissors!";
            break;
        case playerSelection.toLowerCase() == "paper" && computerSelection == "rock":
            return "Player wins. Paper beats rock!";
            break;
        case playerSelection.toLowerCase() == "paper" && computerSelection == "scissors":
            return "AI wins. Scissors beats paper";
            break;
        case playerSelection.toLowerCase() == "scissors" && computerSelection == "rock":
            return "AI wins. Rock beats scissors!";
            break;    
        case playerSelection.toLowerCase() == "scissors" && computerSelection == "paper":
            return "Player wins. Scissors beats paper!";
            break;     
        case playerSelection.toLowerCase() == computerSelection:
            return "There's a TIE!";
            break;
        default:
            break;
    }
}

function PlayGame() {
    
}