import { useState, useCallback } from "react";
import type { GameStatsType, UseGameStatsReturn } from "../types/gameStats";

const buildGameStats = (): GameStatsType => ({
  level: 1,
  linesCompleted: 0,
  linesPerLevel: 10,
  points: 0,
});

export const useGameStats = (): UseGameStatsReturn => {
  const [gameStats, setGameStats] = useState<GameStatsType>(buildGameStats());

  const addLinesCleared = useCallback((lines: number) => {
    setGameStats((previous) => {
      const points = previous.points + lines * 100;
      const { linesPerLevel } = previous;
      const newLinesCompleted = previous.linesCompleted + lines;
      const level =
        newLinesCompleted >= linesPerLevel
          ? previous.level + 1
          : previous.level;
      const linesCompleted = newLinesCompleted % linesPerLevel;

      return {
        level,
        linesCompleted,
        linesPerLevel,
        points,
      };
    });
  }, []);

  return [gameStats, addLinesCleared];
};
