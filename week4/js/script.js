const board = document.getElementById('board');
const tds = document.querySelectorAll('td');
const resetButton = document.getElementById('reset');
let turnEven = true;

function play(cell) {
  if (turnEven && cell.textContent === '') {
    cell.textContent = 'X';
    turnEven = !turnEven;
  } else {
    if (cell.textContent === '') {
      cell.textContent = 'O';
      turnEven = !turnEven;  
    }
  }
};

function resetBoard() {
  tds.forEach((td) => {
    td.textContent = '';
  })
  turnEven = true;
}

function isBoardFilled() {
  isFilled = true;
  tds.forEach((td) => {
    if (td.textContent === '') {
      isFilled = false;
    }
  })
  return isFilled;
}

function checkWinDiagonal(state) {    
  return false;
}

function checkState() {
  if ((tds[0].textContent === tds[1].textContent && tds[0].textContent === tds[2].textContent && tds[0].textContent !== '') || (tds[3].textContent === tds[4].textContent && tds[3].textContent === tds[5].textContent && tds[3].textContent !== '') || (tds[6].textContent === tds[7].textContent && tds[6].textContent === tds[8].textContent && tds[6].textContent !== '') || (tds[0].textContent === tds[3].textContent && tds[0].textContent === tds[6].textContent && tds[0].textContent !== '') || (tds[1].textContent === tds[4].textContent && tds[1].textContent === tds[7].textContent && tds[1].textContent !== '') || (tds[2].textContent === tds[5].textContent && tds[2].textContent === tds[8].textContent && tds[2].textContent !== '') || (tds[0].textContent === tds[4].textContent && tds[0].textContent === tds[8].textContent && tds[0].textContent !== '') || (tds[2].textContent === tds[4].textContent && tds[2].textContent === tds[6].textContent && tds[2].textContent !== '')){
    alert(`${turnEven ? 'Player 2' : 'Player 1'} won!`)
  }

  if (isBoardFilled()) {
    alert('It\'s a draw! Play again!')
  }
}

board.addEventListener('click', (event) => {
  play(event.target)
  setTimeout(checkState, 100)
});
reset.addEventListener('click', resetBoard);