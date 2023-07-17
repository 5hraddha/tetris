import { useState } from "react";
import { buildBoard } from "../utils/board";
import type { UseBoard, UseBoardReturn } from "../types/useBoard";
import type { BuildBoardReturn } from "../types/board";

export const useBoard = ({ rows, columns }: UseBoard): UseBoardReturn => {
  const [board] = useState<BuildBoardReturn>(buildBoard({ rows, columns }));
  return [board];
};
