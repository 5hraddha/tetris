import type { BuildBoardReturn } from "./board";
import type { Player } from "./player";
import type { RotateTetromino } from "./tetromino";
import { Action } from "../utils/input";

export type PlayerController = {
  action: `${Action}`;
  board: BuildBoardReturn;
  player: Player;
  setPlayer: (player: Player) => void;
  setGameOver: (gameOver: boolean) => void;
};

export type TryRotatingTetromino = {
  board: BuildBoardReturn;
  player: Player;
  setPlayer: (player: Player) => void;
  direction: RotateTetromino["direction"];
};
