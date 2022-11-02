// game variables
let winningPlayer = false;
let draw = false;
let vsComputer = false;
let gameOver = false;
const playerOne = "X";
const playerTwo = "O";
let currentPlayer = playerOne;
let gameMode = false;
let trueName = "";
const winningCells = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

//DOM Variables
// window.onload = function () {
//   let username = window.prompt("Enter Player Name");
//   document.getElementById("winningMsg").innerHTML = "Welcome " + username;
// };

let singlePlayerForm = document.getElementById("singlePlayerForm");
let singlePlayerName = document.getElementById("singlePlayerName");
let formBtn = document.getElementById("formBtn");
let winMessage = document.getElementById("winningMsg");
const singlePlayer = document.getElementById("singlePlayer");
const twoPlayer = document.getElementById("twoPlayer");

singlePlayerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("form submitted");
});

function displayName() {
  // winMessage.innerHTML = singlePlayerName.
  trueName = document.getElementById("singlePlayerName").value;
  document.getElementById("winningMsg").innerHTML = "Welcome" + " " + trueName;
  // winMessage.target.innerText = singlePlayerName;
}

formBtn.addEventListener("click", displayName);
console.log("name is logged");

let restartBtn = document.getElementById("restartBtn");
restartBtn.style.visibility = "none";
document.getElementById("grid").style.visibility = "visible";

// document.getElementById("grid").style.visibility = "hidden";
let grid = document.getElementById("grid");
grid.style.visibility = "none";
// function revealBoard(){

// }

const score = document.getElementsByClassName("score-container");

let cells = Array.from(document.getElementsByClassName("cell"));

//single player vs computer mode selection

singlePlayer.addEventListener("click", () => {
  vsComputer = true;
  // let grid = document.getElementById("grid");
  // grid.addEventListener("click", emptyCell);
  singlePlayer.style.visibility = "hidden";
  twoPlayer.style.visibility = "hidden";
  singlePlayerForm.style.visibility = "visible";
});

//multiplayer mode selection
twoPlayer.addEventListener("click", () => {
  vsComputer = false;
  let grid = document.getElementById("grid");
  grid.addEventListener("click", emptyCell);
});

//reassign current player to x based on game mode
const gameArea = document.getElementById("grid");
gameArea.addEventListener("click", function (emptyCell) {
  if (emptyCell.target.matches(".cell")) {
    if (emptyCell.target.innerText === "") {
      console.log(typeof emptyCell.target.innerText);

      console.log("cell selected");

      emptyCell.target.innerText = currentPlayer;

      if (currentPlayer === "X") {
        if (vsComputer === true) {
          computerMove();
        } else {
          gameWon();

          currentPlayer = "O";
          emptyCell.target.style.color = "orange";
        }
      } else {
        gameWon();
        currentPlayer = "X";
        emptyCell.target.style.color = "green";
      }
    }
  }
});

//vsComputer selects random cells
function computerMove() {
  let randomNum = Math.floor(Math.random() * 9);
  console.log(cells[randomNum].innerText);

  if (cells[randomNum].innerText === "") {
    cells[randomNum].innerText = "O";
    gameWon();
  } else {
    computerMove();
  }
}

function setGameMode(event) {
  console.log("button clicked");
}

function gameWon() {
  let cell0 = document.getElementById("0");
  let cell1 = document.getElementById("1");
  let cell2 = document.getElementById("2");
  let cell3 = document.getElementById("3");
  let cell4 = document.getElementById("4");
  let cell5 = document.getElementById("5");
  let cell6 = document.getElementById("6");
  let cell7 = document.getElementById("7");
  let cell8 = document.getElementById("8");

  if (
    cell0.innerText === currentPlayer &&
    cell1.innerText === currentPlayer &&
    cell2.innerText === currentPlayer
  ) {
    console.log("You've Won!");
    winningPlayer = true;
    winMessage.innerText = "You've Won";
  }

  if (
    cell3.innerText === currentPlayer &&
    cell4.innerText === currentPlayer &&
    cell5.innerText === currentPlayer
  ) {
    console.log("Nice; You've Won!");
    winningPlayer = true;
    winMessage.innerText = "Nice; You've Won!";
  }

  if (
    cell6.innerText === currentPlayer &&
    cell7.innerText === currentPlayer &&
    cell8.innerText === currentPlayer
  ) {
    console.log("Winner");
    winningPlayer = true;
    winMessage.innerText = "Winner";
  }

  if (
    cell0.innerText === currentPlayer &&
    cell4.innerText === currentPlayer &&
    cell8.innerText === currentPlayer
  ) {
    console.log("Way to Go!");
    winningPlayer = true;
    winMessage.innerText = "Way to Go!";
  }

  if (
    cell2.innerText === currentPlayer &&
    cell4.innerText === currentPlayer &&
    cell6.innerText === currentPlayer
  ) {
    console.log("Player Wins!");
    winningPlayer = true;
    winMessage.innerText = "Player Wins!";
  }

  if (
    cell1.innerText === currentPlayer &&
    cell4.innerText === currentPlayer &&
    cell7.innerText === currentPlayer
  ) {
    console.log("Clever Cat!");
    winningPlayer = true;
    winMessage.innerText = "Clever Cat!";
  }

  if (
    cell0.innerText === currentPlayer &&
    cell3.innerText === currentPlayer &&
    cell6.innerText === currentPlayer
  ) {
    console.log("Great Job!");
    winningPlayer = true;
    winMessage.innerText = "Great Job!";
  }

  if (
    cell2.innerText === currentPlayer &&
    cell5.innerText === currentPlayer &&
    cell8.innerText === currentPlayer
  ) {
    console.log("Nice One!");
    winningPlayer = true;
    winMessage.innerText = "Nice One!";
  }

  if (winningPlayer === false) {
    let counter = 0;
    for (let i = 0; i < cells.length; i++) {
      if (cells[i].innerText === "") {
        break;

        console.log("It's a Tie!");
      } else {
        counter++;
      }
    }
    if (counter === 9) {
      draw = true;
      winMessage.innerText = "It's a Draw!";
    }
  }
  if (winningPlayer) {
    endOfGame();
  }
}

function endOfGame() {
  if (winningPlayer === true || draw === true) {
    gameOver = true;
    restartBtn.style.visibility = "visible";
    restartBtn.addEventListener("click", resetGrid);
  }
}

function resetGrid() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = "";
  }
  winningPlayer = false;
  vsComputer = false;
  draw = false;
  winMessage.innerText = "Game On!";
}

//game display as follows:
//user selects game mode, game mode buttons disappear on click
//form appears for name input(s), forms disappear on submit
//display name inputs
//display gameboard
//display score with winning trophy icon
//display message of game winner
//display restart button or switch game mode
//repeats
