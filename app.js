let playerWins = 0;
let computerWins = 0;
let ties = 0;
let rockBtn = document.querySelector('.btn-rock')
let paperBtn = document.querySelector('.btn-paper')
let scissorBtn = document.querySelector('.btn-scissor')


const choices = ["pierre","feuille","ciseaux"];

function getComputerChoice() {
  const randIndex = Math.floor(Math.random()*choices.length);
  return choices[randIndex].toLowerCase();
}

function getPlayerChoice() {
  let choice = prompt('Choisissez entre pierre, feuille, ciseaux');
  return choice.toLowerCase();
}

function getRoundWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    ties++;
    return `Égalité !`;
  } else if ((playerChoice === 'pierre' && computerChoice === 'ciseaux') ||
             (playerChoice === 'feuille' && computerChoice === 'pierre') ||
             (playerChoice === 'ciseaux' && computerChoice === 'feuille')) {
    playerWins++;
    return `Vous avez gagné !`;
  } else {
    computerWins++;
    return `L'ordinateur a gagné !`;
  }
}

function game() {
  for (let round = 1; round <= 5; round++) {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    console.log(`Round ${round}: Vous avez choisi ${playerChoice}, l'ordinateur a choisi ${computerChoice}.`);
    console.log(getRoundWinner(playerChoice, computerChoice));
  }
  
  if (playerWins < computerWins) {
    console.log("L'ordinateur remporte la partie !");
  } else if (playerWins > computerWins) {
    console.log("Vous remportez la partie !");
  } else {
    console.log("La partie est nulle !");
  }
}

game();
