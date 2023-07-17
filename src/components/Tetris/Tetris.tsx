import Board from "../Board";
import { useBoard } from "../../hooks/useBoard";
import "./Tetris.css";

type TetrisProps = {
  rows: number;
  columns: number;
  // setGameOver: (gameOver: boolean) => void;
};

function Tetris({ rows, columns }: TetrisProps) {
  const [board] = useBoard({ rows, columns });
  return (
    <div className="tetris">
      <Board board={board} />
    </div>
  );
}

export default Tetris;
