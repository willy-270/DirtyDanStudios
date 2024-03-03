let computerWins = 0;
let playerWins = 0;

function playGame(playerChoice) {
    const choices = ["rock", "paper", "scissors"];
    computerChoice = choices[Math.floor(Math.random() * choices.length)];

    const emojis = {
        rock: "🪨",
        paper: "📜",
        scissors: "✂️"
    };
    
    const playerEmoji = emojis[playerChoice];
    const computerEmoji = emojis[computerChoice];
    
    let result = `You: ${playerEmoji} Computer: ${computerEmoji}, `;
    
    if (playerChoice === computerChoice) {
        result += "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result += "You win!";
        playerWins++;
    } else {
        result += "You lose!";
        computerWins++;
    }
    
    let resultText = document.getElementById("rps-result");
    
    if (resultText === null) {
        const body = document.querySelector("body");
        resultText = document.createElement("p");
        resultText.setAttribute("id", "rps-result");
        body.appendChild(resultText);
    }
    
    resultText.textContent = result;

    let playerWinsText = document.getElementById("player-wins");
    let computerWinsText = document.getElementById("computer-wins");

    if (playerWinsText === null || computerWinsText === null) {
        const body = document.querySelector("body");
        playerWinsText = document.createElement("p");
        computerWinsText = document.createElement("p");
        playerWinsText.setAttribute("id", "player-wins");
        computerWinsText.setAttribute("id", "computer-wins");
        body.appendChild(playerWinsText);
        body.appendChild(computerWinsText);
    }

    playerWinsText.textContent = `Player wins: ${playerWins}`;
    computerWinsText.textContent = `Computer wins: ${computerWins}`;
}

function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
}

function closeSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
}