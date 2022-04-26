let computerPlay = () => Math.floor(Math.random() * 3);

let playRound = (playerSelection, computerSelection) => {
  // Rock beat scissors
  // Paper beats rock
  // Scissors beat paper
  let arrValues = ["rock", "paper", "scissors"];
  let playerVal = arrValues.indexOf(playerSelection.toLowerCase());
  let computerVal = arrValues[computerSelection];

  if (playerVal < 0) return "Invalid input provided";

  if (playerVal === 0 && computerSelection === 2)
    return `You win! ${arrValues[playerVal]} beats ${computerVal}`;
  if (playerVal === 2 && computerSelection === 0)
    return `You lose 😭 ${computerVal} beats ${arrValues[playerVal]}`;
  if (computerSelection > playerVal)
    return `You lose 😭 ${computerVal} beats ${arrValues[playerVal]}`;
  if (playerVal > computerSelection)
    return `You win! ${arrValues[playerVal]} beats ${computerVal}`;
  return "It's a tie!";
};

let game = () => {
  let userScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Please enter your result: ");
    const computerSelection = computerPlay();
    const response = playRound(playerSelection, computerSelection);
    if (response.includes("win")) userScore += 1;
    if (response.includes("lose")) computerScore += 1;
    alert(response);
  }
  alert(
    userScore > computerScore
      ? `You won! ${userScore} to ${computerScore}`
      : userScore < computerScore
      ? `You lost! ${userScore} to ${computerScore}`
      : "It's a tie!"
  );
};

// game();
