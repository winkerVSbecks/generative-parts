import React, { useContext } from 'react';
import { GeneratorContainer } from './GeneratorContainer';

export const GeneratorControls = () => {
  const { items, onChange, randomGrid, toggleDebugGrid } = useContext(
    GeneratorContainer.Context,
  );

  return (
    <div className="fixed bottom-0 left-0 right-0 z-1 bg-white pv4 shadow-2">
      <form className="code w-90 w-50-ns center dark-gray flex items-stretch">
        <div className="flex-auto mr3">
          <label className="db fw6 lh-copy f6" htmlFor="item-count">
            Item Count ({items.length})
          </label>
          <input
            type="range"
            name="item-count"
            id="item-count"
            className="input-range db w-100"
            min="1"
            max="10"
            step="1"
            value={items.length}
            onChange={onChange}
          />
        </div>

        <button
          type="button"
          className="bn bg-transparent grow dib ph3 pv0 overflow-hidden lh-solid"
          onClick={randomGrid}
        >
          <span aria-hidden="true">🔀</span>
          <span className="clip">generate random grid</span>
        </button>
        <button
          type="button"
          className="bn bg-transparent grow dib ph3 pv0 overflow-hidden lh-solid"
          onClick={toggleDebugGrid}
        >
          <span aria-hidden="true">🐛</span>
          <span className="clip">toggle debug grid</span>
        </button>
      </form>
    </div>
  );
};
