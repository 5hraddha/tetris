import Menu from "../Menu";
import Tetris from "../Tetris";
import { useGameOver } from "../../hooks/useGameOver";
import "./Game.css";

type GameProps = {
  rows: number;
  columns: number;
};

function Game({ rows, columns }: GameProps) {
  const [gameOver, setGameOver, resetGameOver] = useGameOver();

  const startGame = () => resetGameOver();

  return (
    <div className="game">
      {gameOver ? (
        <Menu onClick={startGame} />
      ) : (
        <Tetris rows={rows} columns={columns} setGameOver={setGameOver} />
      )}
    </div>
  );
}

export default Game;
