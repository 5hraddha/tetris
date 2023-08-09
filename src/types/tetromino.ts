import type { DefaultCell } from "./defaultCell";

export type Tetromino = {
  shape: number[][];
  className: string;
};

export type TransferToBoard = {
  className: string;
  isOccupied: boolean;
  position: { row: number; column: number };
  rows: DefaultCell[][];
  shape: Tetromino["shape"];
};

export type RotateTetromino = { piece: Tetromino["shape"]; direction: -1 | 1 };
