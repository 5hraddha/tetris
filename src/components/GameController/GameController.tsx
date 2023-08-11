import { BuildBoardReturn } from "../../types/board";
// import { GameStats } from "../../types/gameStats";
import { Player } from "../../types/player";
import { Action, getActionForKey } from "../../utils/input";
import { playerController } from "../../utils/playerController";
import { useInterval } from "../../hooks/useInterval";
import "./GameController.css";

type GameControllerProps = {
  board: BuildBoardReturn;
  // gameStats: GameStats;
  player: Player;
  setGameOver: (gameOver: boolean) => void;
  setPlayer: (player: Player) => void;
};

function GameController({
  board,
  // gameStats,
  player,
  setGameOver,
  setPlayer,
}: GameControllerProps) {
  const handleInput = ({ action }: { action: `${Action}` }) => {
    playerController({
      action,
      board,
      player,
      setPlayer,
      setGameOver,
    });
  };

  const onKeyUp = ({ code }: { code: string }) => {
    if (getActionForKey(code) === Action.Quit) {
      setGameOver(true);
    }
  };

  const onKeyDown = ({ code }: { code: string }) => {
    handleInput({ action: getActionForKey(code) });
  };

  useInterval(() => {
    handleInput({ action: Action.SlowDrop });
  }, 1000);
  return (
    <input
      className="gameController"
      type="text"
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      // eslint-disable-next-line
      autoFocus
    />
  );
}

export default GameController;
