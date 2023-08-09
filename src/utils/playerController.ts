import type {
  TryRotatingTetromino,
  TryMovingTetromino,
  MovePlayer,
  PlayerController,
} from "../types/playerController";
import { isTetrominoWithinBoard, hasTetrominoCollided } from "./board";
import { Action } from "./input";
import { rotateTetromino } from "./tetrominoes";

export const movePlayer = ({ delta, position, shape, board }: MovePlayer) => {
  // Get the possible next position of the Tetromino by adding delta to the current position
  const desiredNextPosition = {
    row: position.row + delta.row,
    column: position.column + delta.column,
  };

  const collided = hasTetrominoCollided({
    board,
    position: desiredNextPosition,
    shape,
  });

  const isOnBoard = isTetrominoWithinBoard({
    board,
    position: desiredNextPosition,
    shape,
  });

  const preventMove = !isOnBoard || (isOnBoard && collided);
  const nextPosition = preventMove ? position : desiredNextPosition;

  const isMovingDown = delta.row > 0;
  const isHit = isMovingDown && (collided || !isOnBoard);

  return { collided: isHit, nextPosition };
};

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

  const { position } = player;

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

const tryMovingTetromino = ({
  board,
  player,
  setPlayer,
  action,
  setGameOver,
}: TryMovingTetromino) => {
  // How much user wants to move. Intially set to zero. Calculated on every key press
  const delta = { row: 0, column: 0 };
  let isFastDropEnabled = false;

  // Update row and column in delta as the user performs an action by pressing a certain key
  if (action === Action.FastDrop) {
    isFastDropEnabled = true;
  } else if (action === Action.SlowDrop) {
    delta.row += 1;
  } else if (action === Action.Left) {
    delta.column -= 1;
  } else if (action === Action.Right) {
    delta.column += 1;
  }

  // Move the Player and calculate the next position of the Tetromino and also, if it has collided
  const { collided, nextPosition } = movePlayer({
    delta,
    position: player.position,
    shape: player.tetromino!.shape,
    board,
  });

  // Check if the Tertomino collided on the very first row. If so, mark game as over
  const isGameOver = collided && player.position.row === 0;
  if (isGameOver) {
    setGameOver(isGameOver);
  }

  setPlayer({
    ...player,
    collided,
    isFastDropping: isFastDropEnabled,
    position: nextPosition,
  });
};

export const playerController = ({
  action,
  board,
  player,
  setPlayer,
  setGameOver,
}: PlayerController) => {
  if (!action) return;

  // Perform operations on the basis of the action initiated by the user by pressing keys
  if (action === Action.RotateClockwise) {
    tryRotatingTetromino({ board, player, setPlayer, direction: 1 });
  } else if (action === Action.RotateAnticlockwise) {
    tryRotatingTetromino({ board, player, setPlayer, direction: -1 });
  } else {
    tryMovingTetromino({ board, player, setPlayer, action, setGameOver });
  }
};
