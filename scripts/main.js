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
    } else {
        result += "You lose!";
    }
    
    let resultText = document.getElementById("rps-result");
    
    if (resultText === null) {
        const body = document.querySelector("body");
        resultText = document.createElement("p");
        resultText.setAttribute("id", "rps-result");
        body.appendChild(resultText);
    }
    
    resultText.textContent = result;

    console.log(result);
}

function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
}

function closeSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
}