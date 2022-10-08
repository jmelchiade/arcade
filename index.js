// let playerName = getElementById("playerOne");
// userName = document.getElementById("playerOne");
// document.write("Welcome, " + userName);
// let gameboardText = document.getElementById("gameboardText");

let winningPlayer = false;
let draw = false;
let vsComputer = false;
let gameOver = false;
const playerOne = "X";
const playerTwo = "O";
let currentPlayer = playerOne;

//display player name

window.onload = function () {
  let username = window.prompt("Enter Player Name");
  document.getElementById("winningMsg").innerHTML = "Welcome " + username;
};

let winMessage = document.getElementById("winningMsg");

const score = document.getElementsByClassName("score-container");

let restartBtn = document.getElementById("restartBtn");
restartBtn.style.visibility = "hidden";

let cells = Array.from(document.getElementsByClassName("cell"));

document.getElementById("grid").style.visibility = "hidden";

const singlePlayer = document.getElementById("singlePlayer");
singlePlayer.addEventListener("click", () => {
  vsComputer = true;
  let grid = document.getElementById("grid");
  grid.addEventListener("click", emptyCell);
});
const twoPlayer = document.getElementById("twoPlayer");
twoPlayer.addEventListener("click", () => {
  vsComputer = false;
  let grid = document.getElementById("grid");
  grid.addEventListener("click", emptyCell);
});

function emptyCell() {}

document.getElementById("grid").style.visibility = "visible";

for (let i = 0; i < cells.length; i++) {}

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

// function winMsg(playerWon) {}
//   let message = `Congratulations, ${playerWon} wins!`;
//   winMessage.innerText = message;
//   winMessage.style.display = "visible";
//get access to winmsg element
//place our display message inside the winmsg element
//change the visibilty to visible
