const choiceArray = ["rock", "paper", "scissors"];

let playerWin = 0;
let computerWin = 0;

const launchGame = () => {
  playerWin = 0;
  computerWin = 0;
  gameDiv.style.display = "flex";
  resultDiv.textContent = "";
  tryAgain.hidden = true;
}

const buttonArray = document.querySelectorAll(".choice");
for (let i = 0; i < buttonArray.length; ++i) {
  const button = buttonArray[i];
  button.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const roundResult = playRound(i, computerSelection);
    if (roundResult === 1) {
      playerWin++
    } else if (roundResult === -1) {
      computerWin++
    }
    showRoundResult(
      roundResult,
      toTitleCase(choiceArray[i]),
      toTitleCase(choiceArray[computerSelection])
    );

    showScore(playerWin, computerWin);
  });
}

const gameDiv = document.querySelector(".game");
gameDiv.addEventListener("click", () => {
  if (computerWin === 5 || playerWin === 5) {
    showGameResult(playerWin, computerWin);
    gameDiv.style.display = "none";
    document.querySelector(".round-result").textContent = "";
    document.querySelector(".score").textContent = "";

    tryAgain.hidden = false;
  }
});

const showGameResult = (playerWin, computerWin) => {
  const scoreString = `Final score : ${playerWin} | ${computerWin}`;
  if (playerWin > computerWin) {
    resultDiv.textContent = `You won !!
      ${scoreString}`;
  } else {
    resultDiv.textContent = `Computer won !! Better luck next time !
      ${scoreString}`;
  }
}

const showScore = (playerScore, computerScore) => {
  const scoreDiv = document.querySelector(".score");
  scoreDiv.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}

const showRoundResult = (result, playerInput, computerInput) => {
  const resultDiv = document.querySelector(`.round-result`);
  if (result > 0) {
    resultDiv.textContent =
      `Congratulations ! You won the round. ${playerInput} beats ${computerInput}`;
  } else if (result === 0) {
    resultDiv.textContent =
      "This round is a tie.";
  } else {
    resultDiv.textContent =
      `Oh no !! The computer won the round! ${computerInput} beats ${playerInput}`;
  }
}

const toTitleCase = s => s[0].toUpperCase() + s.slice(1).toLowerCase();

const getComputerChoice = () => {
  return randomChoice = Math.floor(Math.random() * 3);
}

/** Let's say
 * Rock = 0, Paper = 1 and Scissors = 2
 * 2 - 1 = 1 Win
 * 1 - 0 = 1 Win
 * 0 - 2 = -2 Win
 * 2 - 0 = 2 Lose
 * 1 - 2 = -1 Lose
 * 0 - 1 = -1 Lose
**/
const playRound = (playerSelection, computerSelection) => {
  // Compare playerSelection and computerSelection
  const choiceComparison = playerSelection - computerSelection;
  if (choiceComparison === 1 || choiceComparison === -2) {
    return 1;
  } else if (choiceComparison === 0) {
    return 0;
  }

  return -1;
}

const tryAgain = document.querySelector(".try-again");
const resultDiv = document.querySelector(".game-result");
tryAgain.addEventListener("click", launchGame);
