const tiles = document.querySelectorAll(".tile");
const player_X = "X";
const player_O = "O";
let turn = player_X;

const board = Array(tiles.length);
board.fill(null);

//elements
const gameOver = document.getElementById("game-over");
const winnerText = document.getElementById("winner-text");
const reset = document.getElementById("reset");

tiles.forEach((tile) => tile.addEventListener("click" , tileClick));

function tileClick(event) {
    if(gameOver.classList.contains('visible')){
       return; 
    }

    const tile = event.target;
    const tileNumber = tile.dataset.index;
    if(tile.innerText != "") {
        return;
    }

    if(turn === player_X) {
        tile.innerText = player_X;
        gameBoard[tileNumber - 1] = player_X;
        turn = player_O;
    
    }
    else {
        tile.innerText = player_O;
        gameBoard[tileNumber - 1] = player_O;
        turn = player_X;  
    }

    checkWinner();
}

function checkWinner() {
    for (const winningCombo of winningCombos) {
    }
}
 
const winningCombos = [
    //rows
    { combo: [1, 2, 3], class: "strike-row-1"},
    { combo: [4, 5, 6], class: "strike-row-2"},
    { combo: [7, 8, 9], class: "strike-row-3"},
    //columns
    { combo: [1, 4, 7], class: "strike-column-1"},
    { combo: [2, 5, 8], class: "strike-column-2"},
    { combo: [3, 6, 9], class: "strike-column-3"},
    //diagonals
    { combo: [1, 5, 9], class: "strike-diagonal-1"},
    { combo: [3, 5, 7], class: "strike-diagonal-2"},
];