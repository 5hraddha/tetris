import type {
  Tetromino,
  TransferToBoard,
  RotateTetromino,
  HasTetrominoCollided,
  IsTetrominoWithinBoard,
} from "../types/tetromino";

type Tetrominoes = {
  [key: string]: Tetromino;
};

const tetrominoClassName = "tetromino";

export const TETROMINOES: Tetrominoes = {
  I: {
    shape: [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
    ],
    className: `${tetrominoClassName} ${tetrominoClassName}__i`,
  },
  J: {
    shape: [
      [0, 1, 0],
      [0, 1, 0],
      [1, 1, 0],
    ],
    className: `${tetrominoClassName} ${tetrominoClassName}__j`,
  },
  L: {
    shape: [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 1],
    ],
    className: `${tetrominoClassName} ${tetrominoClassName}__l`,
  },
  O: {
    shape: [
      [1, 1],
      [1, 1],
    ],
    className: `${tetrominoClassName} ${tetrominoClassName}__o`,
  },
  S: {
    shape: [
      [0, 1, 1],
      [1, 1, 0],
      [0, 0, 0],
    ],
    className: `${tetrominoClassName} ${tetrominoClassName}__s`,
  },
  T: {
    shape: [
      [1, 1, 1],
      [0, 1, 0],
      [0, 0, 0],
    ],
    className: `${tetrominoClassName} ${tetrominoClassName}__t`,
  },
  Z: {
    shape: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0],
    ],
    className: `${tetrominoClassName} ${tetrominoClassName}__z`,
  },
};

export const getRandomTetromino = () => {
  const keys = Object.keys(TETROMINOES);
  const randomIndex = Math.floor(Math.random() * keys.length);
  const randomTetrominokey = keys[randomIndex];
  return TETROMINOES[randomTetrominokey];
};

export const rotateTetromino = ({ piece, direction }: RotateTetromino) => {
  // Transpose rows and columns
  const newPiece = piece.map((_, index) =>
    piece.map((column) => column[index]),
  );

  // Reverse rows to get a rotated matrix
  if (direction > 0) return newPiece.map((row) => row.reverse());

  return newPiece.reverse();
};

export const transferToBoard = ({
  className,
  isOccupied,
  position,
  rows,
  shape,
}: TransferToBoard) => {
  const currentRows = rows;
  shape.forEach((row, y) => {
    row.forEach((cell, x) => {
      if (cell) {
        const occupied = isOccupied;
        const yTemp = y + position.row;
        const xTemp = x + position.column;
        currentRows[yTemp][xTemp] = { occupied, className };
      }
    });
  });

  return currentRows;
};

export const hasTetrominoCollided = ({
  board,
  position,
  shape,
}: HasTetrominoCollided) => {
  for (let y = 0; y < shape.length; y += 1) {
    const row = y + position.row;

    for (let x = 0; x < shape[y].length; x += 1) {
      if (shape[y][x]) {
        const column = x + position.column;

        if (
          board.rows[row] &&
          board.rows[row][column] &&
          board.rows[row][column].occupied
        ) {
          return true;
        }
      }
    }
  }

  return false;
};

export const isTetrominoWithinBoard = ({
  board,
  position,
  shape,
}: IsTetrominoWithinBoard) => {
  for (let y = 0; y < shape.length; y += 1) {
    const row = y + position.row;

    for (let x = 0; x < shape[y].length; x += 1) {
      if (shape[y][x]) {
        const column = x + position.column;
        const isValidPosition = board.rows[row] && board.rows[row][column];

        if (!isValidPosition) return false;
      }
    }
  }

  return true;
};
