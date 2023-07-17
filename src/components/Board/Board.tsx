import "./Board.css";
import useLocalStorage from "use-local-storage";
import { BuildBoardReturn } from "../../types/board";
import BoardCell from "../BoardCell";

function Board({ board }: { board: BuildBoardReturn }) {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [theme] = useLocalStorage("theme", defaultDark ? "dark" : "light");

  // Setting the number of rows and columns in the board dynamically
  const boardStyles = {
    gridTemplateRows: `repeat(${board.size.rows}, 1fr)`,
    gridTemplateColumns: `repeat(${board.size.columns}, 1fr)`,
  };

  return (
    <div className="board" style={boardStyles} data-theme={theme}>
      {board.rows.map((row) =>
        row.map((cell, xIndex) => (
          /* eslint-disable react/no-array-index-key */
          <BoardCell key={xIndex * board.size.columns + xIndex} cell={cell} />
        )),
      )}
    </div>
  );
}

export default Board;
