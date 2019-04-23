const findLegalMoves = (board, pos) => {
  let results = [];

  // check for north
  if (board[pos[0] - 1] && board[pos[0] - 1][pos[1]] === 0) {
    results.push([pos[0] - 1, pos[1]]);
  }

  // check for south
  if (board[pos[0] + 1] && board[pos[0] + 1][pos[1]] === 0) {
    results.push([pos[0] + 1, pos[1]]);
  }

  // check for west
  if (board[pos[0]] && board[pos[0]][pos[1] - 1] === 0) {
    results.push([pos[0], pos[1] - 1]);
  }

  // check for east
  if (board[pos[0]] && board[pos[0]][pos[1] + 1] === 0) {
    results.push([pos[0], pos[1] + 1]);
  }

  return results;
};

// Space O(1);
// Time O(1)

// Given a board and an end position for the player, write a function to determine if it is possible to travel from every open cell on the board to the given end position.

let board1 = [
  [0, 0, 0, 0, -1],
  [0, -1, -1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, -1, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

let board2 = [
  [0, 0, 0, 0, -1],
  [0, -1, -1, 0, 0],
  [0, 0, 0, 0, 0],
  [-1, -1, 0, 0, 0],
  [0, -1, 0, 0, 0],
  [0, -1, 0, 0, 0],
];

const isPossibleToTravel = (board, endPos) => {
  let zerosCount = 0;
  let visitedBoard = board.map(row =>
    row.map(value => {
      if (value === 0) zerosCount++;
      return false;
    })
  );

  let reachableZerosCount = 0;
  let posToExplore = [endPos]; // Stack

  while (posToExplore.length) {
    let curPos = posToExplore.pop();

    if (visitedBoard[curPos[0]][curPos[1]] === false) {
      visitedBoard[curPos[0]][curPos[1]] = true;

      if (board[curPos[0]][curPos[1]] === 0) {
        reachableZerosCount++;
        let legalMoves = findLegalMoves(board, curPos);
        legalMoves.map(pos => posToExplore.push(pos));
      }
    }
  }

  return zerosCount === reachableZerosCount;
};

console.log(isPossibleToTravel(board1, [5, 0]));
console.log(isPossibleToTravel(board2, [5, 0]));
