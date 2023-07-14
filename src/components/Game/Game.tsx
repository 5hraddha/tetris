import Menu from "../Menu";
import "./Game.css";

type GameProps = {
  rows: number;
  columns: number;
};

function Game({ rows, columns }: GameProps) {
  console.log(`${rows} ${columns}`);

  const startGame = () => {
    console.log("Game started");
  };
  return (
    <div className="game">
      <Menu onClick={startGame} />
    </div>
  );
}

export default Game;
