import "./Board.css";
import { BuildBoardReturn } from "../../types/board";

function Board({ board }: { board: BuildBoardReturn }) {
  console.log("board:", board);
  return <p>Board</p>;
}

export default Board;
