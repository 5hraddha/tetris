import type { DefaultCell } from "./defaultCell";
import type { Player } from "./player";
import type { Tetromino } from "./tetromino";

export type Board = {
  rows: number;
  columns: number;
  player: Player;
  resetPlayer: (player: Player) => void;
  addLinesCleared: () => void;
};

export type BuildBoard = { rows: number; columns: number };

export type BuildBoardReturn = {
  rows: DefaultCell[][];
  size: { rows: number; columns: number };
};

export type NextBoard = {
  board: BuildBoardReturn;
  player: Player;
  resetPlayer: (player: Player) => void;
  addLinesCleared: () => void;
};

export type UseBoardReturn = [board: BuildBoardReturn];

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
