const result = document.querySelector(".result");

export function checkIsWinner(player, cpu) {
  let message;
  if (player === cpu) {
    message = "Tie";
  } else if ((player === "rock" && cpu === "scissor") || (player === "paper" && cpu === "rock") || (player === "scissor" && cpu === "paper")) {
    message = "Player Wins";
  } else {
    message = "Player Lose";
  }

  result.textContent = `${message} (Player: ${player} - CPU: ${cpu})`;
}
