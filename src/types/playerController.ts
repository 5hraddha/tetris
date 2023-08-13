import type { BuildBoardReturn } from "./board";
import type { Player } from "./player";
import type { Tetromino, RotateTetromino } from "./tetromino";
import { Action } from "../utils/action";

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

export type TryMovingTetromino = {
  board: BuildBoardReturn;
  player: Player;
  setPlayer: (player: Player) => void;
  action: `${Action}`;
  setGameOver: (gameOver: boolean) => void;
};

export type MovePlayer = {
  delta: { row: number; column: number };
  position: Player["position"];
  shape: Tetromino["shape"];
  board: BuildBoardReturn;
};
