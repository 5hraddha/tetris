import Board from "../Board";
import GameStats from "../GameStats";
import { useBoard } from "../../hooks/useBoard";
import { useGameStats } from "../../hooks/useGameStats";
import "./Tetris.css";

type TetrisProps = {
  rows: number;
  columns: number;
  // setGameOver: (gameOver: boolean) => void;
};

function Tetris({ rows, columns }: TetrisProps) {
  const [board] = useBoard({ rows, columns });
  const [gameStats] = useGameStats();

  return (
    <div className="tetris">
      <Board board={board} />
      <GameStats gameStats={gameStats} />
    </div>
  );
}

export default Tetris;
