import React from "react";
import useLocalStorage from "use-local-storage";
import type { GameStatsType } from "../../types/gameStats";
import "./GameStats.css";

type GameStatsProps = {
  gameStats: GameStatsType;
};

function GameStats({ gameStats }: GameStatsProps) {
  const { level, points, linesCompleted, linesPerLevel } = gameStats;
  const linesToCompleteLevel = linesPerLevel - linesCompleted;

  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [theme] = useLocalStorage("theme", defaultDark ? "dark" : "light");

  return (
    <ul className="gameStats" data-theme={theme}>
      <li>
        <h2 className="gameStats__title">Level</h2>
        <p className="gameStats__value">{level}</p>
      </li>
      <li>
        <h2 className="gameStats__title">Lines to Level</h2>
        <p className="gameStats__value">{linesToCompleteLevel}</p>
      </li>
      <li>
        <h2 className="gameStats__title">Points</h2>
        <p className="gameStats__value">{points}</p>
      </li>
    </ul>
  );
}

export default React.memo(GameStats);
