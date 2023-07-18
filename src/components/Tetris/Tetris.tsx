import Board from "../Board";
import GameStats from "../GameStats";
import Previews from "../Previews";
import { useBoard } from "../../hooks/useBoard";
import { useGameStats } from "../../hooks/useGameStats";
import { usePlayer } from "../../hooks/usePlayer";
import "./Tetris.css";

type TetrisProps = {
  rows: number;
  columns: number;
  // setGameOver: (gameOver: boolean) => void;
};

function Tetris({ rows, columns }: TetrisProps) {
  const [player] = usePlayer();
  const [board] = useBoard({ rows, columns });
  const [gameStats] = useGameStats();

  return (
    <div className="tetris">
      <Board board={board} />
      <div className="tetris__info">
        <Previews tetrominoes={player.tetrominoes} />
        <GameStats gameStats={gameStats} />
      </div>
    </div>
  );
}

export default Tetris;
