import React, { useState, useRef, useEffect } from 'react';
import { range } from './utils';

export function useDebugGrid(initialRowCount, initialColumnCount) {
  const gridEl = useRef(null);

  const [rowCount, setRowCount] = useState(initialRowCount);
  const [columnCount, setColumnCount] = useState(initialColumnCount);

  useEffect(() => {
    const size = window.innerWidth * 0.15;
    const height = gridEl.current.getBoundingClientRect().height;
    const width = gridEl.current.getBoundingClientRect().width;
    setRowCount(Math.floor(height / size));
    setColumnCount(Math.floor(width / size));
  });

  const itemCount = rowCount * columnCount;

  const DebugGrid = ({ definition, visible }) => (
    <div
      ref={gridEl}
      className="absolute top-0 right-0 bottom-0 left-0 grid"
      style={{ ...definition, opacity: visible ? 1 : 0, margin: 0, zIndex: -1 }}
    >
      {range(itemCount).map(idx => (
        <div key={idx} className="outline purple" />
      ))}
    </div>
  );

  return DebugGrid;
}
