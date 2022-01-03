


const tiles = document.querySelectorAll(".tile");
const player_X = "X";
const player_O = "O";
const gameOver = document.getElementById("game-over");
const winnerText = document.getElementById("winner-text");
const reset = document.getElementById("reset");
const gameboard = Array(tiles.length);

let turn = player_X;

gameboard.fill(null);


const winningCombos = [
    //rows
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    //columns
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    //diagonals
    [0, 4, 8],
    [2, 4, 6],
];


tiles.forEach((tile) => tile.addEventListener("click" , tileClick));

function tileClick(event) {
    
    const tile = event.target;
    const tileNumber = tile.dataset.index;
    console.log(tile);
    if(turn === player_X) {
        tile.innerText = player_X;
        turn = player_O;

        console.log('X is being outputted');
        
    }
    else {
        tile.innerText = player_O;
        turn = player_X;  

        console.log('O is being outputted');
    }
    
    checkWinner();
    if(tile.innerText != "") {
        return;{
        console.log(checkWinner);
    }
}

function checkWinner() {
    for (let i = 0; i < winningCombos.length; i++) {
        console.log(winningCombos[i][0]);
        if(tiles[winningCombos[i][0]].innerHTML === 'X' &&  tiles[winningCombos[i][1]].innerHTML === 'X' &&  tiles[winningCombos[i][2]].innerHTML === 'X') {
            console.log("X is the winner")
        }
        if(tiles[winningCombos[i][0]].innerHTML === 'O' &&  tiles[winningCombos[i][1]].innerHTML === 'O' &&  tiles[winningCombos[i][2]].innerHTML === 'O') {
            console.log("O is the winner")    
        }

        }

    }
}

 function resetGame() {
    //document.getElementById("reset").addEventListener("click", location.reload());
    document.getElementById("reset").onclick = function() {
        document.querySelectorAll("tile").value = "";

        console.log('this is doing something');
      };
    
    
    // for (let i = 0; i <tiles.length; i++) {
        // buttonId = "reset" + i;
        // document.getElementById(reset).value = "";
        // location.reload();
        //tiles = [];
    };
    
 

 
//this is from stackoverflow for reference
    //function reset(){
  //      rounds = 0;
    //    userScore = 0;
    //    computerScore = 0;
     //   ties = 0;
   //     round_number.innerHTML = 'Round: '
    //    ties_number.innerHTML = '0'
     //   computerScore_span.innerHTML = '0'
     //   userScore_span.innerHTML = '0'
      //}