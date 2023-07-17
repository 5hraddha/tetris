import { useState, useCallback } from "react";
import { UseGameOverReturn } from "../types/useGameOver";

export const useGameOver = (): UseGameOverReturn => {
  const [gameOver, setGameOver] = useState<boolean>(true);

  const resetGameOver = useCallback(() => {
    setGameOver(false);
  }, []);

  return [gameOver, setGameOver, resetGameOver];
};
