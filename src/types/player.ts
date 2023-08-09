import type { Tetromino } from "./tetromino";

export type Player = {
  collided: boolean;
  isFastDropping: boolean;
  position: { row: number; column: number };
  tetrominoes: Tetromino[];
  tetromino: Tetromino | undefined;
};

export type UsePlayerReturn = [
  player: Player,
  setPlayer: (player: Player) => void,
  resetPlayer: () => void,
];
