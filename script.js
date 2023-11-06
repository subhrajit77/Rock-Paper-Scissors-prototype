// JavaScript conversion of C++ Rock-Paper-Scissors game

// Constants
const CHOICES = ["Rock", "Paper", "Scissors"];

// Global variables
let computerChoice;
let humanChoice;

// Start the game
function startGame() {
  // Generate a random computer choice
  computerChoice = Math.floor(Math.random() * 3);

  // Prompt the human player for their choice
  humanChoice = prompt("Please enter your choice (1 for Rock, 2 for Paper, 3 for Scissors): ");

  // Validate the human player's choice
  if (humanChoice < 1 || humanChoice > 3) {
    alert("Invalid choice. Please enter a number between 1 and 3.");
    return;
  }

  // Determine the outcome of the game
  const result = determineOutcome(computerChoice, humanChoice);

  // Display the results to the player
  alert(`You chose: ${CHOICES[humanChoice - 1]}.`);
  alert(`Computer chose: ${CHOICES[computerChoice]}.`);
  alert(`Result: ${result}`);
}

// Determine the outcome of the game
function determineOutcome(computerChoice, humanChoice) {
  if (computerChoice === humanChoice) {
    return "Tie";
  } else if ((humanChoice === 1 && computerChoice === 3) || (humanChoice === 2 && computerChoice === 1) || (humanChoice === 3 && computerChoice === 2)) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}

// Start the game when the page loads
window.onload = startGame;
