function GetComputerChoice() {
    const options = ["rock", "paper", "scissors"];

    return options[Math.floor(Math.random() * 3)];
}

let playerScore = 0;
let AIScore = 0;
let result;

const body = document.querySelector("body");
const div = document.createElement("div"); 
const buttons = document.querySelectorAll("button");
const h2 = document.createElement("h2");
const playersH2 = document.querySelector("#playerScore");
const AIsH2 = document.querySelector("#AIScore");

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

buttons.forEach(item => {
    item.addEventListener("click", e => {
        div.innerHTML =  '<br>' + SingleRound(e.target.value, GetComputerChoice());
        body.appendChild(div);
        playersH2.textContent = `Player Score: ${playerScore}`;
        AIsH2.textContent = `AI Score: ${AIScore}`;

        if(playerScore == 5) {
            h2.textContent = "Player won! There's still hope.";
            body.textContent = "";
            body.appendChild(h2);
            
        }
        else if(AIScore == 5) {
            h2.textContent = "AI won! There's no hope, we lost...";
            body.textContent = "";
            body.appendChild(h2);
        }
        else if(AIScore == 5 && playerScore == 5) {
            body.textContent = "";
            h2.textContent = "It's a TIE!";
            body.appendChild(h2);
        }
        else {
            console.log("I don't know");
        }
    });
});

