const arr = ["rock", "paper", "scissors"];

let scorecard = { computer: 0, player: 0 };

const getComputerChoice = () => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const handlePlay = (playerSelection) => {
  displayRoundWinner(playRound(playerSelection, getComputerChoice()));
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection.toLowerCase() === computerSelection) {
    return "It appears you've tied.";
  } else if (computerSelection === "rock") {
    if (playerSelection.toLowerCase() === "paper") {
      scorecard.player += 1;
      return "Player wins!";
    }
    scorecard.computer += 1;
    return "Computer wins!";
  } else if (computerSelection === "paper") {
    if (playerSelection.toLowerCase() === "scissors") {
      scorecard.player += 1;
      return "Player wins!";
    }
    scorecard.computer += 1;
    return "Computer wins!";
  }
  if (computerSelection === "scissors") {
    if (playerSelection.toLowerCase() === "rock") {
      scorecard.player += 1;
      return "Player wins!";
    }
    scorecard.computer += 1;
    return "Computer wins!";
  }
};

const displayRoundWinner = (winner) => {
  const display = document.querySelector(".winner");
  const player = document.querySelector(".player");
  const computer = document.querySelector(".computer");
  player.textContent = `player: ${scorecard.player}`;
  computer.textContent = `computer: ${scorecard.computer}`;
  if (scorecard.player === 5) {
    display.textContent = "Player wins!";
  } else if (scorecard.computer === 5) {
    display.textContent = "Computer wins!";
  }
};

const btns = document.querySelectorAll(".btn");
console.log(btns);
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => handlePlay(e.target.lastChild.data));
});
