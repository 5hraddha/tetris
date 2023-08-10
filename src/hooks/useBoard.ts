import { useState, useEffect } from "react";
import { buildBoard, nextBoard } from "../utils/board";
import type { Board, BuildBoardReturn, UseBoardReturn } from "../types/board";

export const useBoard = ({
  rows,
  columns,
  player,
  resetPlayer,
  addLinesCleared,
}: Board): UseBoardReturn => {
  const [board, setBoard] = useState<BuildBoardReturn>(
    buildBoard({ rows, columns }),
  );

  useEffect(() => {
    setBoard((previousBoard) =>
      nextBoard({
        board: previousBoard,
        player,
        resetPlayer,
        addLinesCleared,
      }),
    );
  }, [player, resetPlayer, addLinesCleared]);

  return [board];
};
