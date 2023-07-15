import { useState, useCallback } from "react";

type UseGameOverType = [
  gameOver: boolean,
  setGameOver: (gameOver: boolean) => void,
  resetGameOver: () => void,
];

/* eslint-disable */
export const useGameOver = (): UseGameOverType => {
  const [gameOver, setGameOver] = useState<boolean>(true);

  const resetGameOver = useCallback(() => {
    setGameOver(false);
  }, []);

  return [gameOver, setGameOver, resetGameOver];
};
