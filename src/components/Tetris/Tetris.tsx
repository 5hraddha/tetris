import Board from "../Board";
import GameController from "../GameController";
import GameStats from "../GameStats";
import Previews from "../Previews";
import { useBoard } from "../../hooks/useBoard";
import { useGameStats } from "../../hooks/useGameStats";
import { usePlayer } from "../../hooks/usePlayer";
import "./Tetris.css";

type TetrisProps = {
  rows: number;
  columns: number;
  setGameOver: (gameOver: boolean) => void;
};

function Tetris({ rows, columns, setGameOver }: TetrisProps) {
  const [player, resetPlayer] = usePlayer();
  const [gameStats, addLinesCleared] = useGameStats();
  const [board] = useBoard({
    rows,
    columns,
    player,
    resetPlayer,
    addLinesCleared,
  });

  return (
    <div className="tetris">
      <Board board={board} />
      <div className="tetris__info">
        <Previews tetrominoes={player.tetrominoes} />
        <GameStats gameStats={gameStats} />
      </div>
      <GameController
        // board={board}
        // gameStats={gameStats}
        // player={player}
        setGameOver={setGameOver}
        // setPlayer={setPlayer}
      />
    </div>
  );
}

export default Tetris;
