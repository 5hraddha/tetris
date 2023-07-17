import { BuildBoardReturn } from "./board";

export type UseBoard = {
  rows: number;
  columns: number;
};

export type UseBoardReturn = [board: BuildBoardReturn];
