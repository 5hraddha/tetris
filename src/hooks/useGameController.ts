import { useEffect } from "react";

import { BuildBoardReturn } from "../types/board";
import { GameStatsType } from "../types/gameStats";
import { Player } from "../types/player";

import { useDropTime } from "./useDropTime";
import { useInterval } from "./useInterval";

import { playerController } from "../utils/playerController";
import { Action, getActionForKey } from "../utils/action";

type UseGameController = {
  board: BuildBoardReturn;
  gameStats: GameStatsType;
  player: Player;
  gameOver: boolean;
  setGameOver: (gameOver: boolean) => void;
  setPlayer: (player: Player) => void;
};

export const useGameController = ({
  board,
  gameStats,
  player,
  gameOver,
  setGameOver,
  setPlayer,
}: UseGameController) => {
  const [dropTime, pauseDropTime, resumeDropTime] = useDropTime({ gameStats });

  useEffect(() => {
    if (gameOver) {
      return undefined;
    }

    const handleKeyDown = ({ code }: { code: string }) => {
      const currentAction = getActionForKey(code);

      if (currentAction === Action.Quit) {
        setGameOver(true);
      } else if (currentAction === Action.Pause) {
        if (dropTime) {
          pauseDropTime();
        } else {
          resumeDropTime();
        }
      } else {
        // Handle player movement and rotation when the game is not in paused state
        // eslint-disable-next-line
        if (dropTime) {
          playerController({
            action: currentAction,
            board,
            player,
            setPlayer,
            setGameOver,
          });
          // If droptime is null, we can ask user if he wants to resume the game and then resume the game
        }
      }
    };

    // Register events and cleanup
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    gameOver,
    dropTime,
    board,
    player,
    pauseDropTime,
    resumeDropTime,
    setPlayer,
    setGameOver,
  ]);

  // Handle slow drop at the set dropTime
  useInterval(() => {
    playerController({
      action: Action.SlowDrop,
      board,
      player,
      setPlayer,
      setGameOver,
    });
    // eslint-disable-next-line
  }, dropTime!);
};
