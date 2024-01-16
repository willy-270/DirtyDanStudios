function playGame(playerChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

   let playerEmoji;

    if (playerChoice === "rock") {
        playerEmoji = "🪨";
    }
    else if (playerChoice === "paper") {
        playerEmoji = "📜";
    }
    else if (playerChoice === "scissors") {
        playerEmoji = "✂️";
    }

    let computerEmoji;

    if (computerChoice === "rock") {
        computerEmoji = "🪨";
    }
    else if (computerChoice === "paper") {
        computerEmoji = "📜";
    }
    else if (computerChoice === "scissors") {
        computerEmoji = "✂️";
    }
    
    let result = "You: " + playerEmoji + " Computer: " + computerEmoji + ", ";

    if (playerChoice === computerChoice) {
        result += "It's a tie!";
    } else if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
            result += "You win!";
        } else {
            result += "You lose!";
        }
    }
    else if (playerChoice === "paper") {
        if (computerChoice === "rock") {
            result += "You win!";
        } else {
            result += "You lose!";
        }
    }
    else if (playerChoice === "scissors") {
        if (computerChoice === "paper") {
            result += "You win!";
        } else {
            result += "You lose!";
        }
    }

    let resultText;

    if (document.getElementById("rps-result") === null) {
        const body = document.querySelector("body");
        resultText = document.createElement("p");
        resultText.setAttribute("id", "rps-result");
        body.appendChild(resultText);
    }

    resultText = document.getElementById("rps-result");
    resultText.textContent = result;
}