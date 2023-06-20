const choiceArray = ["rock", "paper", "scissors"];

const toTitleCase = s => s[0].toUpperCase() + s.slice(1).toLowerCase();

const showResult = (context, result, playerInput = null, computerInput = null) => {
  if (result > 0) {
    console.log(
      `Congratulations ! You won the ${context}. ${playerInput ? playerInput + " beats " + computerInput : ""}`
    );
  } else if (result === 0) {
    console.log(`This ${context} is a tie.`);
  } else {
    console.log(
      `Oh no !! The computer won the ${context}! ${playerInput ? computerInput + " beats " + playerInput : ""}`
    );
  }
}

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
  let choiceComparison = playerSelection - computerSelection;
  if (choiceComparison === 1 || choiceComparison === -2) {
    return 1;
  } else if (choiceComparison === 0) {
    return 0;
  }

  return -1;
}

const game = () => {
  let winCount = 0;

  for (let i = 0; i < 5; ++i) {
    // One round is:
    // 1. Get input from the user
    let playerInput = prompt(`Rock, Papers, Scissors ? (case insensitive)`);
    let playerSelection = 0;

    let keepGoing = true;
    do {
      // If playerInput is null, he cancelled the prompt.
      if(!playerInput) {
        console.log(`Sad to see you leave !! See you soon.`)
        return;
      }

      playerSelection = choiceArray.indexOf(playerInput.toLowerCase());

      if (playerSelection === -1) {
        playerInput = prompt(
          `The input must be either "Rock", "Paper", "Scissors". Input again (case insensitive).`
        );
      } else {
        keepGoing = false;
      }
    } while (keepGoing);

    let computerSelection = getComputerChoice();

    let roundResult = playRound(playerSelection, computerSelection);

    showResult(
      `round`,
      roundResult,
      toTitleCase(playerInput),
      toTitleCase(choiceArray[computerSelection])
    );

    winCount += roundResult;
  }
  // After all five see who won
  // Computer wins if the counter is > 0
  // Tie if counter == 0
  // Player wins otherwise
  showResult(`game`, winCount);
  console.log(`Try again !!`);
}
