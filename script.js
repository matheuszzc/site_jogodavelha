let Player = "X";
let gtab = ["", "", "", "", "", "", "", "", ""];
let gameisRunning = true;

function makeMove(cell) {
  const index = Array.from(cell.parentNode.children).indexOf(cell);

  if (gtab[index] === "" && gameisRunning) {
    gtab[index] = Player;
    cell.innerHTML = Player;
    checkWin();
    Player = Player === "X" ? "O" : "X";
  }
}
function openPopup() {
  document.getElementById('popup').style.display = 'block';
}
function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

function checkWin() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (const pattern of winningCombinations) {
    const [a, b, c] = pattern;
    if (gtab[a] && gtab[a] === gtab[b] && gtab[a] === gtab[c]) {
      gameisRunning = false;
      document.getElementById("status").textContent = `${Player} venceu!`;
      break;
    }
  }
  if (!gtab.includes("")) {
    gameisRunning = false;
    openPopup();


    
  }
}


function resetGame() {
  Player = "X";
  gtab = ["", "", "", "", "", "", "", "", ""];
  gameisRunning = true;

  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.textContent = "";
  });

  document.getElementById("status").textContent = "";
}