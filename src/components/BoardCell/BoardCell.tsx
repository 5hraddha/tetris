import "./BoardCell.css";
import type { DefaultCell } from "../../types/defaultCell";

type BoardCellProps = {
  cell: DefaultCell;
};

function BoardCell({ cell }: BoardCellProps) {
  return (
    <div className={`boardCell ${cell.className}`}>
      <div className="boardCell_sparkle" />
    </div>
  );
}
export default BoardCell;
