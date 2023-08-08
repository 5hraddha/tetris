export type GameStats = {
  level: number;
  linesCompleted: number;
  linesPerLevel: number;
  points: number;
};

export type UseGameStatsReturn = [
  gameStats: GameStats,
  addLinesCleared: () => void,
];
