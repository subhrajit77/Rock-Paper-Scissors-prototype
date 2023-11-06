
const rockButton = document.getElementById("rock");
    const paperButton = document.getElementById("paper");
    const scissorsButton = document.getElementById("scissors");
    const resultDiv = document.getElementById("result");

    rockButton.addEventListener("click", function() {
      playGame("rock");
    });

    paperButton.addEventListener("click", function() {
      playGame("paper");
    });

    scissorsButton.addEventListener("click", function() {
      playGame("scissors");
    });

    function playGame(humanChoice) {
      // Generate a random computer choice as a string
      const choices = ["rock", "paper", "scissors"];
      const computerChoice = choices[Math.floor(Math.random() * 3)];

      // Determine the outcome of the game
      const result = determineOutcome(computerChoice, humanChoice);

      // Display the results to the player
      resultDiv.innerHTML = `You chose: ${humanChoice}.<br>Computer chose: ${computerChoice}.<br>Result: ${result}.`;
    }

    function determineOutcome(computerChoice, humanChoice) {
      if (computerChoice === humanChoice) {
        return "Tie";
      } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
        return "You win!";
      } 
      else {
        return "Computer wins!";
      }
    }