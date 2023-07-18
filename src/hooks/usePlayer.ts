import { useState, useCallback } from "react";
import { getRandomTetromino } from "../utils/tetrominoes";
import { Player, UsePlayerReturn } from "../types/player";

const buildPlayer = (previous?: Player): Player => {
  let tetrominoes;

  if (previous) {
    tetrominoes = [...previous.tetrominoes];
    tetrominoes.unshift(getRandomTetromino());
  } else {
    tetrominoes = Array(5)
      .fill(0)
      .map(() => getRandomTetromino());
  }

  return {
    collided: false,
    isFastDropping: false,
    position: { row: 0, column: 4 },
    tetrominoes,
    tetromino: tetrominoes.pop(),
  };
};

export const usePlayer = (): UsePlayerReturn => {
  const [player, setPlayer] = useState<Player>(buildPlayer());

  const resetPlayer = useCallback(() => {
    setPlayer((prev) => buildPlayer(prev));
  }, []);

  return [player, setPlayer, resetPlayer];
};
