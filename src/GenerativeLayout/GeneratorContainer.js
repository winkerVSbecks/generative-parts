import { useState } from 'react';
import createContainer from 'constate';
import { range, randomSize } from './utils';

const generateGridItems = count =>
  range(count).map(idx => ({
    key: idx,
    ...randomSize(4, 6),
  }));

const reGenerateGridItems = items =>
  items.map(item =>
    item.pinned
      ? item
      : {
          ...item,
          ...randomSize(4, 6),
        },
  );

function useGeneratorState({ initCount = 4 }) {
  const [items, setItems] = useState(generateGridItems(initCount));
  const [debug, setDebugGrid] = useState(true);

  return {
    items: items,
    debug,
    togglePin: key => {
      const gridItems = items.map(item =>
        item.key === key ? { ...item, pinned: !item.pinned } : item,
      );
      setItems(gridItems);
    },
    toggleDebugGrid: () => {
      setDebugGrid(!debug);
    },
    onChange: e => {
      const count = Number(e.target.value);
      const gridItems = generateGridItems(count);
      setItems(gridItems);
    },
    randomGrid: () => {
      const gridItems = reGenerateGridItems(items);
      setItems(gridItems);
    },
  };
}

export const GeneratorContainer = createContainer(useGeneratorState);
