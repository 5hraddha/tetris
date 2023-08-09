import { useState, useCallback } from "react";
import type { UseGameOverReturn } from "../types/gameOver";

export const useGameOver = (): UseGameOverReturn => {
  const [gameOver, setGameOver] = useState<boolean>(true);

  const resetGameOver = useCallback(() => {
    setGameOver(false);
  }, []);

  return [gameOver, setGameOver, resetGameOver];
};
