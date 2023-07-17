import { DefaultCell } from "./defaultCell";

export type Board = {
  rows: number;
  columns: number;
};

export type BuildBoardReturn = {
  rows: DefaultCell[][];
  size: Board;
};

export type UseBoardReturn = [board: BuildBoardReturn];
