import { useState, useCallback } from "react";
import { GameStats, UseGameStatsReturn } from "../types/gameStats";

const buildGameStats = (): GameStats => ({
  level: 1,
  linesCompleted: 0,
  linesPerLevel: 10,
  points: 0,
});

export const useGameStats = (): UseGameStatsReturn => {
  const [gameStats] = useState<GameStats>(buildGameStats());
  const addLinesCleared = useCallback(() => {}, []);

  return [gameStats, addLinesCleared];
};
