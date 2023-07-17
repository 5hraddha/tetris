export type GameStatsType = {
  level: number;
  linesCompleted: number;
  linesPerLevel: number;
  points: number;
};

export type UseGameStatsReturn = [
  gameStats: GameStatsType,
  addLinesCleared: () => void,
];
