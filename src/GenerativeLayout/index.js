import React from 'react';
import 'tachyons';
import './generative-layout.css';
import { Global } from '@emotion/core';

import { GenerativeGrid } from './GenerativeGrid';
import { GeneratorControls } from './GeneratorControls';
import { GeneratorContainer } from './GeneratorContainer';

export const GenerativeLayout = () => {
  return (
    <React.Fragment>
      <Global
        styles={{
          body: {
            backgroundColor: '#fff',
            cursor: 'auto',
          },
        }}
      />
      <GeneratorContainer.Provider initCount={10}>
        <GeneratorControls />
        <GenerativeGrid
          size="15vw"
          row={4}
          col={6}
          gap="1vw"
          style={{ margin: '1.5vw' }}
        />
      </GeneratorContainer.Provider>
    </React.Fragment>
  );
};
