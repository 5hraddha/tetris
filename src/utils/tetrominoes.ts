import { Tetromino } from "../types/tetromino";
import { DefaultCell } from "../types/defaultCell";

type Tetrominoes = {
  [key: string]: Tetromino;
};

type TransferToBoardParams = {
  className: string;
  isOccupied: boolean;
  position: { row: number; column: number };
  rows: DefaultCell[][];
  shape: number[][];
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

export const rotateTetromino = ({
  piece,
  direction,
}: {
  piece: number[][];
  direction: number;
}) => {
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
}: TransferToBoardParams) => {
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
