// let playerName = getElementById("playerOne");
// userName = document.getElementById("playerOne");
// document.write("Hello, " + userName);

const playerOne = "X";
const playerTwo = "O";

let currentPlayer = playerOne;

const score = document.getElementsByClassName("score-container");

let gameboardText = document.getElementById("gameboardText");

let restartBtn = document.getElementById("restartBtn");

let cells = Array.from(document.getElementsByClassName("cell"));

function emptyCell() {
  console.log("X");
}

const chosenCell = document.getElementsByClassName("cell")[0];
console.log(chosenCell);
chosenCell.addEventListener("click", emptyCell);

for (let i = 0; i < cells.length; i++) {
  console.log(cells[i]);
}

// const gameArea = document.getElementById('whack-a-mole');
// gameArea.addEventListener('click', function(clickEvent) {
//   if (clickEvent.target.matches('.mole')) {
//     clickEvent.target.classList.remove('mole');
//     score++;
//     scoreDisplay.innerText = score;
//   }
// });
