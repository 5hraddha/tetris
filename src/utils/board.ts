import { defaultCell } from "./cell";
import type { BuildBoard, BuildBoardReturn, NextBoard } from "../types/board";
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

export const nextBoard = ({ board, player }: NextBoard): BuildBoardReturn => {
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

  return {
    rows,
    size: { ...board.size },
  };
};
