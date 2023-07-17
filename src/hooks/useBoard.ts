import { useState } from "react";
import { buildBoard } from "../utils/board";
import type { Board, BuildBoardReturn, UseBoardReturn } from "../types/board";

export const useBoard = ({ rows, columns }: Board): UseBoardReturn => {
  const [board] = useState<BuildBoardReturn>(buildBoard({ rows, columns }));
  return [board];
};
