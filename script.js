
let currentPlayer = 'X';
let gameState = ['', '', '', '', '', '', '', '', ''];
let isGameOver = false;

const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('resetButton');


function handleClick(index) {
    if (gameState[index] === '' && !isGameOver) {
        gameState[index] = currentPlayer;
        cells[index].textContent = currentPlayer;
        if (checkWinner()) {
            alert(`${currentPlayer} wins!`);
            isGameOver = true;
        } else if (gameState.every(cell => cell !== '')) {
            alert("It's a draw!");
            isGameOver = true;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}


function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c];
    });
}

function resetGame() {
    gameState = ['', '', '', '', '', '', '', '', ''];
    isGameOver = false;
    currentPlayer = 'X';
    cells.forEach(cell => {
        cell.textContent = '';
    });
}


cells.forEach((cell, index) => {
    cell.addEventListener('click', () => handleClick(index));
});


resetButton.addEventListener('click', resetGame);
