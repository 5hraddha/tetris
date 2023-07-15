import Menu from "../Menu";
import { useGameOver } from "../../hooks/useGameOver";
import "./Game.css";

type GameProps = {
  rows: number;
  columns: number;
};

function Game({ rows, columns }: GameProps) {
  console.log(`${rows} ${columns}`);

  const [gameOver, setGameOver, resetGameOver] = useGameOver();

  const startGame = () => {
    setGameOver(true);
    resetGameOver();
    console.log(`Game started and gameOver's value is ${gameOver}`);
  };
  return (
    <div className="game">
      <Menu onClick={startGame} />
    </div>
  );
}

export default Game;
