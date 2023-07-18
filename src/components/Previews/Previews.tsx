import React from "react";
import Preview from "../Preview";
import "./Previews.css";

type PreviewsProps = {
  tetrominoes: {
    shape: number[][];
    className: string;
  }[];
};

function Previews({ tetrominoes }: PreviewsProps) {
  // Get all the tetrominoes except the last one as it is already being rendered
  const previewTetrominoes = tetrominoes
    .slice(1 - tetrominoes.length)
    .reverse();

  return (
    <div className="previews">
      <h2 className="previews__title">Previews</h2>
      <div className="previews__tetrominoes">
        {previewTetrominoes.map((tetromino, index) => (
          /* eslint-disable react/no-array-index-key */
          <Preview key={`tetromino-${index}`} tetromino={tetromino} />
        ))}
      </div>
    </div>
  );
}

export default React.memo(Previews);
