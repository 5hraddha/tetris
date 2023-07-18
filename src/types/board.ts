import { DefaultCell } from "./defaultCell";
import { Player } from "./player";

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
