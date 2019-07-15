import React, { useContext } from 'react';
import { useDebugGrid } from './useDebugGrid';
import article from './Article';
import { GeneratorContainer } from './GeneratorContainer';

const GridItem = ({ idx, x, y, Component, debug, pinned }) => {
  const { togglePin } = useContext(GeneratorContainer.Context);

  return (
    <div
      className={`${debug &&
        'outline light-red'} overflow-hidden flex items-center justify-center pointer`}
      style={{
        gridArea: `auto / auto / span ${y} / span ${x}`,
        backgroundColor: debug ? 'rgba(255,114,92, 0.1)' : 'transparent',
        outlineWidth: pinned ? 2 : 1,
      }}
      onClick={() => togglePin(idx)}
    >
      {article[idx]}
    </div>
  );
};

export const GenerativeGrid = ({ row, col, size, gap, style }) => {
  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: `repeat(${col}, ${size})`,
    gridTemplateRows: `repeat(${row}, ${size})`,
    gridGap: gap,
    padding: gap,
    gridAutoRows: size,
    gridAutoColumns: size,
    gridAutoFlow: 'dense',
  };

  const DebugGrid = useDebugGrid(4, 6);
  const { items, debug } = useContext(GeneratorContainer.Context);

  return (
    <div className="mt5 mb7 sans-serif">
      <div
        className="relative outline moon-gray"
        style={{ ...style, ...gridStyles }}
      >
        {items.map(item => (
          <GridItem idx={item.key} {...item} debug={debug} />
        ))}
        <DebugGrid visible={debug} definition={gridStyles} />
      </div>
    </div>
  );
};
