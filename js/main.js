let winner = undefined;
const board = [
    {
        square: 0,
        clicked: undefined
    },
    {
        square: 1,
        clicked: undefined
    },
    {
        square: 2,
        clicked: undefined
    },
    {
        square: 3,
        clicked: undefined
    },
    {
        square: 4,
        clicked: undefined
    },
    {
        square: 5,
        clicked: undefined
    },
    {
        square: 6,
        clicked: undefined
    },
    {
        square: 7,
        clicked: undefined
    },
    {
        square: 8,
        clicked: undefined
    },
    {
        square: 9,
        clicked: undefined
    }
]
const squares = document.querySelectorAll(".square");
const winningCombos = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]]
let currentPlayer = 1
let filled = 0;

function winnerCheck() {
    for (let i = 0; i < 8; i++) {
        if (board[winningCombos[i][0]].clicked === "red"
            && board[winningCombos[i][1]].clicked === "red"
            && board[winningCombos[i][2]].clicked === "red") {
            winner = "red";
        }
        if (board[winningCombos[i][0]].clicked === "blue" &&
            board[winningCombos[i][1]].clicked === "blue" &&
            board[winningCombos[i][2]].clicked === "blue") {
            winner = "blue";
        }
    }
}

function checkTie() {
    for (let i = 1; i <= 9; i++) {
        if(filled === 9 && winner === undefined) {
            winner = "It's a tie!"
        }
    }
}

function resetGame() {
    for (let i = 1; i <= 9; i++) {
        board[i].clicked = undefined;
        filled = 0;
    }
}

for(let i = 0; i < 9; i++) {
    squares[i].addEventListener('click', function() {
        if (currentPlayer === 1 && board[i + 1].clicked === undefined && winner === undefined) {
            this.classList.toggle("red");
            board[i+1].clicked = "red"
            filled += 1;
            currentPlayer = 2;
        } else if (currentPlayer === 2 && board[i + 1].clicked === undefined && winner === undefined) {
            this.classList.toggle("blue");
            board[i + 1].clicked = "blue";
            filled += 1;
            currentPlayer = 1;
        }
        winnerCheck()
        checkTie()
    })
}