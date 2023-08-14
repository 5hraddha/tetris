import type {
  BuildBoard,
  BuildBoardReturn,
  NextBoard,
  FindDropPosition,
} from "../types/board";
import type { DefaultCell } from "../types/defaultCell";
import { defaultCell } from "./cell";
import { transferToBoard } from "./tetrominoes";
import { movePlayer } from "./playerController";

// Builds a board having n rows. Each row has n columns. And each column has a default cell.
export const buildBoard = ({ rows, columns }: BuildBoard): BuildBoardReturn => {
  const builtRows = Array.from({ length: rows }, () =>
    Array.from({ length: columns }, () => ({ ...defaultCell }))
  );

  return {
    rows: builtRows,
    size: { rows, columns },
  };
};

const findDropPosition = ({ board, position, shape }: FindDropPosition) => {
  const max = board.size.rows - position.row + 1;
  let row = 0;

  for (let i = 0; i < max; i += 1) {
    const delta = { row: i, column: 0 };
    const result = movePlayer({ delta, position, shape, board });
    const { collided } = result;

    if (collided) {
      break;
    }

    row = position.row + i;
  }

  return { ...position, row };
};

export const nextBoard = ({
  board,
  player,
  resetPlayer,
  addLinesCleared,
}: NextBoard): BuildBoardReturn => {
  const { tetromino, position } = player;

  // 1. Check if the cell on the board is occupied or not.
  // 2. If the cell is occupied that means we've already placed a piece there.
  // Since, we don't want to loose that, we'll keep such cells.
  // 3. If the cell is not occupied that means we've not placed a piece there.
  // So, we want to clear out such cells and replace it with the Default Cell.
  // We do this because as the player is moving the piece down, we want to clear out the previous cells.
  const updatedRows = board.rows.map((row) =>
    row.map((cell) => (cell.occupied ? cell : { ...defaultCell }))
  );

  // Drop position
  const dropPosition = findDropPosition({
    board,
    position,
    shape: tetromino!.shape,
  });

  // Place ghost
  const className = `${tetromino!.className} ${
    player.isFastDropping ? "" : "tetromino__ghost"
  }`;

  let rows = transferToBoard({
    className,
    isOccupied: player.isFastDropping,
    position: dropPosition,
    rows: updatedRows,
    shape: tetromino!.shape,
  });

  // Place the piece.
  // If it collided, mark the board cells as collided
  if (!player.isFastDropping) {
    rows = transferToBoard({
      className: tetromino!.className,
      isOccupied: player.collided,
      position,
      rows: updatedRows,
      shape: tetromino!.shape,
    });
  }

  // Check for cleared lines
  const blankRow: DefaultCell[] = rows[0].map(() => ({ ...defaultCell }));
  let linesCleared = 0;
  const newSetOfRows: DefaultCell[][] = [];
  rows.forEach((row) => {
    if (row.every((column) => column.occupied)) {
      linesCleared += 1;
      // Add a blank row at the starting of the new Board to return
      newSetOfRows.unshift(blankRow);
    } else {
      // Retain the current row by pushing it to the new Board to return
      newSetOfRows.push(row);
    }
  }, []);

  // Update rows after clearing to newSetOfRows
  rows = newSetOfRows;

  if (linesCleared > 0) {
    addLinesCleared(linesCleared);
  }

  // If we collided, reset the player!
  if (player.collided || player.isFastDropping) {
    resetPlayer();
  }

  return {
    rows,
    size: { ...board.size },
  };
};
