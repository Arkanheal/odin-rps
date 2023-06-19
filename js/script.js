const choiceArray = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
  return randomChoice = Math.floor(Math.random() * 3)
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
    return 0;
  } else if (choiceComparison === 0) {
    return 1;
  }

  return 2;
}

const game = () => {
  // Initialize a counter to 0
  let winCount = 0;
  // Play 5 rounds
  for (let i = 0; i < 5; ++i) {
    // One round is:
    // 1. Get input from the user
    let playerInput = prompt(`Rock, Papers, Scissors ? (case insensitive)`)
    let playerSelection = 0;

    // Sanitize use input
    let keepGoing = true;
    do {
      // Retrieve the index of the input
      playerSelection = choiceArray.indexOf(playerInput.toLowerCase());

      // Check the input is present in the choiceArray
      if (playerSelection === -1) {
        playerInput = prompt(`The input must be either "Rock", "Paper", "Scissors". Input again (case insensitive).`)
      } else {
        keepGoing = false;
      }
    } while (keepGoing);

    // 2. Call getComputerChoice to get input from the computer
    let computerSelection = getComputerChoice();
    // 3. Call playRound to get the result string
    let roundResult = playRound(playerSelection, computerSelection);
    // 4. console.log the result string
    if (roundResult === 0) {
      console.log(`Congratulations! Your ${choiceArray[playerSelection]} beats ${choiceArray[computerSelection]}`);
      ++winCount;
    } else if (roundResult === 1) {
      console.log(`It's a tie !!`);
    } else {
      console.log(`Oh no! Your ${choiceArray[playerSelection]} got crushed by their ${choiceArray[computerSelection]}`);
      --winCount;
    }
  }
  // After all five see who won
  // Computer wins if the counter is > 0
  // Tie if counter == 0
  // Player wins otherwise
  if (winCount > 0) {
    console.log(`Congratulations !! You won the Bo5.`);
  } else if (winCount === 0) {
    console.log(`It's a tie !!`);
  } else {
    console.log(`Oh no !! The computer won.`);
  }
  console.log(`Try again`);
}
