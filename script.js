let playerSelection = "";
let playerCount = 0;
let computerCount = 0;
if (playerCount == 5) alert("You have Won!");
else if (computerCount == 5) alert("You have lost!");

const btn = document.querySelectorAll("button");
btn.forEach((button) => {
  button.addEventListener("click", () => {
    playerSelection = button.id;
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerPlay();
    let decision = playRound(playerSelection, computerSelection);
    if (decision == "W") {
      playerCount++;
    } else if (decision == "L") {
      computerCount++;
    }
    const div = document.querySelector("#scoreBoard");
    const p = document.createElement("p");
    p.textContent =
      "Player Score: " + playerCount + " Computer Score: " + computerCount;
    div.appendChild(p);
  });
});

window.addEventListener("keydown", function (e) {
  if (e.key !== "r" && e.key !== "p" && e.key !== "s") {
    return;
  }
  let playerSelect = document.querySelector(`button[data-key="${e.key}"]`);
  playerSelect = playerSelect.id.toUpperCase();

  computerSelection = computerPlay();
  let decision = playRound(playerSelect, computerSelection);
  if (decision == "W") {
    playerCount++;
  } else if (decision == "L") {
    computerCount++;
  }
  const div = document.querySelector("#scoreBoard");
  const p = document.createElement("p");
  p.textContent =
    "Player Score: " + playerCount + " Computer Score: " + computerCount;
  div.appendChild(p);
});

function computerPlay() {
  let computerchoice = Math.floor(Math.random() * Math.floor(3));
  if (computerchoice == 0) return "Rock";
  else if (computerchoice == 1) return "Paper";
  return "Scissors";
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "ROCK" && computerSelection == "Rock") {
    alert("Tied");
    return "T";
  } else if (playerSelection == "ROCK" && computerSelection == "Paper") {
    alert("You Lose! Paper beats Rock");
    return "L";
  } else if (playerSelection == "ROCK" && computerSelection == "Scissors") {
    alert("You Win! Rock beats Scissors");
    return "W";
  }
  if (playerSelection == "PAPER" && computerSelection == "Rock") {
    alert("You Win! Paper beats Rock");
    return "W";
  } else if (playerSelection == "PAPER" && computerSelection == "Paper") {
    alert("Tied");
    return "T";
  } else if (playerSelection == "PAPER" && computerSelection == "Scissors") {
    alert("You Lose! Scissors beat paper");
    return "L";
  }
  if (playerSelection == "SCISSORS" && computerSelection == "Rock") {
    alert("You Lose! Rock beats Scissors");
    return "L";
  } else if (playerSelection == "SCISSORS" && computerSelection == "Paper") {
    alert("You Win! Scissors beats Paper");
    return "W";
  } else if (playerSelection == "SCISSORS" && computerSelection == "Scissors") {
    alert("Tied");
    return "T";
  }
  return "Please pick either rock paper or scissors";
}
