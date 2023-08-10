import { defaultCell } from "./cell";
import type {
  BuildBoard,
  BuildBoardReturn,
  NextBoard,
  HasTetrominoCollided,
  IsTetrominoWithinBoard,
} from "../types/board";
import { transferToBoard } from "./tetrominoes";

// Builds a board having n rows. Each row has n columns. And each column has a default cell.
export const buildBoard = ({ rows, columns }: BuildBoard): BuildBoardReturn => {
  const builtRows = Array.from({ length: rows }, () =>
    Array.from({ length: columns }, () => ({ ...defaultCell })),
  );

  return {
    rows: builtRows,
    size: { rows, columns },
  };
};

export const nextBoard = ({
  board,
  player,
  resetPlayer,
}: NextBoard): BuildBoardReturn => {
  const { tetromino, position } = player;

  // 1. Check if the cell on the board is occupied or not.
  // 2. If the cell is occupied that means we've already placed a piece there.
  // Since, we don't want to loose that, we'll keep such cells.
  // 3. If the cell is not occupied that means we've not placed a piece there.
  // So, we want to clear out such cells and replace it with the Default Cell.
  // We do this because as the player is moving the piece down, we want to clear out the previous cells.
  const updatedRows = board.rows.map((row) =>
    row.map((cell) => (cell.occupied ? cell : { ...defaultCell })),
  );

  const rows = transferToBoard({
    className: tetromino!.className,
    isOccupied: player.collided,
    position,
    rows: updatedRows,
    shape: tetromino!.shape,
  });

  // If we collided, reset the player!
  if (player.collided || player.isFastDropping) {
    resetPlayer();
  }

  return {
    rows,
    size: { ...board.size },
  };
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
