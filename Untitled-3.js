const board = document.getElementById("board");
const cells = [];

let currentPlayer = "X";
let gameOver = false;

// Create the 3x3 game board
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.dataset.row = i;
        cell.dataset.col = j;
        board.appendChild(cell);
        cells.push(cell);

        // Add click event listener to each cell
        cell.addEventListener("click", () => {
            if (!gameOver && cell.textContent === "") {
                cell.textContent = currentPlayer;
                cell.classList.add(currentPlayer);
                checkWin();
                switchPlayer();
            }
        });
    }
}

function checkWin() {
    // Add your win-checking logic here
}

function switchPlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function resetBoard() {
    // Add code to reset the board here
}

// Add a reset button or other UI elements for resetting the game
