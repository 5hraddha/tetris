import type { DefaultCell } from "./defaultCell";
import type { Player } from "./player";
import type { BuildBoardReturn } from "./board";

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

export type HasTetrominoCollided = {
  board: BuildBoardReturn;
  position: Player["position"];
  shape: Tetromino["shape"];
};

export type IsTetrominoWithinBoard = {
  board: BuildBoardReturn;
  position: Player["position"];
  shape: Tetromino["shape"];
};
