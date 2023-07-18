import { defaultCell } from "./cell";
import type { Board, BuildBoardReturn } from "../types/board";

// Builds a board having n rows. Each row has n columns. And each column has a default cell.
export const buildBoard = ({ rows, columns }: Board): BuildBoardReturn => {
  const builtRows = Array.from({ length: rows }, () =>
    Array.from({ length: columns }, () => ({ ...defaultCell })),
  );

  return {
    rows: builtRows,
    size: { rows, columns },
  };
};
