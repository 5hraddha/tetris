import Board from "../Board";
import GameStats from "../GameStats";
import Previews from "../Previews";
import { useBoard } from "../../hooks/useBoard";
import { useGameStats } from "../../hooks/useGameStats";
import { usePlayer } from "../../hooks/usePlayer";
import { useGameController } from "../../hooks/useGameController";
import "./Tetris.css";

type TetrisProps = {
  rows: number;
  columns: number;
  setGameOver: (gameOver: boolean) => void;
  gameOver: boolean;
};

function Tetris({ rows, columns, setGameOver, gameOver }: TetrisProps) {
  const [player, setPlayer, resetPlayer] = usePlayer();
  const [gameStats, addLinesCleared] = useGameStats();
  const [board] = useBoard({
    rows,
    columns,
    player,
    resetPlayer,
    addLinesCleared,
  });

  useGameController({
    board,
    gameStats,
    player,
    gameOver,
    setGameOver,
    setPlayer,
  });

  return (
    <section className="tetris">
      <GameStats gameStats={gameStats} />
      <Board board={board} />
      <Previews tetrominoes={player.tetrominoes} />
    </section>
  );
}

export default Tetris;
