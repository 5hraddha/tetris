import { DefaultCell } from "./defaultCell";

export type BuildBoard = {
  rows: number;
  columns: number;
};

export type BuildBoardReturn = {
  rows: DefaultCell[][];
  size: BuildBoard;
};
