import { useState, useCallback } from "react";
import type { GameStatsType, UseGameStatsReturn } from "../types/gameStats";

const buildGameStats = (): GameStatsType => ({
  level: 1,
  linesCompleted: 0,
  linesPerLevel: 10,
  points: 0,
});

export const useGameStats = (): UseGameStatsReturn => {
  const [gameStats] = useState<GameStatsType>(buildGameStats());
  const addLinesCleared = useCallback(() => {}, []);

  return [gameStats, addLinesCleared];
};
