import React from "react";
import { buildBoard } from "../../utils/board";
import { transferToBoard } from "../../utils/tetrominoes";
import BoardCell from "../BoardCell";
import "./Preview.css";

type PreviewProps = {
  tetromino: {
    shape: number[][];
    className: string;
  };
};

function Preview({ tetromino }: PreviewProps) {
  const { shape, className } = tetromino;
  const board = buildBoard({ rows: 4, columns: 4 });

  // Add classnames of the tetromino to the board whereever the cell is 1
  board.rows = transferToBoard({
    className,
    isOccupied: false,
    position: { row: 0, column: 0 },
    rows: board.rows,
    shape,
  });

  return (
    <div className="preview">
      <div className="preview__board">
        {board.rows.map((row) =>
          row.map((cell, xIndex) => (
            /* eslint-disable react/no-array-index-key */
            <BoardCell key={xIndex * board.size.columns + xIndex} cell={cell} />
          )),
        )}
      </div>
    </div>
  );
}

export default React.memo(Preview);
