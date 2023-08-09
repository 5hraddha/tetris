import type {
  TryRotatingTetromino,
  PlayerController,
} from "../types/playerController";
import { isTetrominoWithinBoard, hasTetrominoCollided } from "./board";
import { Action } from "./input";
import { rotateTetromino } from "./tetrominoes";

const tryRotatingTetromino = ({
  board,
  player,
  setPlayer,
  direction,
}: TryRotatingTetromino) => {
  // Rotate the tetromino
  const rotatedShape = rotateTetromino({
    piece: player.tetromino!.shape,
    direction,
  });

  const {position} = player;

  // Check if the rotated tetromino is within the board or has collision?
  const isValidRotation =
    isTetrominoWithinBoard({ board, position, shape: rotatedShape }) &&
    !hasTetrominoCollided({ board, position, shape: rotatedShape });

  // If the rotated tetromino is within the board & has no collision,
  // then update player with new tetromino and return true
  // otherwise return false
  if (isValidRotation) {
    setPlayer({
      ...player,
      tetromino: {
        className: player.tetromino!.className,
        shape: rotatedShape,
      },
    });
    return true;
  } 
    return false;
  
};

export const playerController = ({
  action,
  board,
  player,
  setPlayer,
} // setGameOver,
: PlayerController) => {
  if (!action) return;

  // Have to enable player to rotate both clockwise and anticlockwise
  // Right now, direction is 1, means only clockwise rotation is possible
  if (action === Action.Rotate) {
    tryRotatingTetromino({ board, player, setPlayer, direction: 1 });
  }
};
