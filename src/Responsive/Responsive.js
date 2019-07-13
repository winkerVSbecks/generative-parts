import React, { useState } from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Global } from '@emotion/core';
import theme from '../theme';
import { useThemes } from '../useThemes';
import { Artboard } from './Artboard';
import { Flex } from '../primitives';
import { RadioGroup } from '../RadioGroup';
import { Toggle } from '../Toggle';

export function Responsive() {
  const [data, activeIndex, selectTheme] = useThemes();
  const [debug, setDebug] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={{
          body: {
            backgroundColor: '#fff',
            cursor: 'auto',
          },
        }}
      />
      <Flex alignItems="flex-start" justifyContent="center" m={[3, 4]}>
        <Flex mr={4} flexDirection="column" alignItems="center">
          <RadioGroup
            title="Select a Theme"
            items={[0, 1, 2]}
            selected={activeIndex}
            onChange={selectTheme}
          />
          <Toggle
            color="black"
            enabled={debug}
            onClick={() => setDebug(!debug)}
          />
        </Flex>
        <Artboard
          debug={debug}
          activeIndex={activeIndex}
          selectTheme={selectTheme}
          profile={data.profile}
          media={data.media}
          maxWidth={11}
          flex="1 1 auto"
          mx={0}
        />
      </Flex>
    </ThemeProvider>
  );
}
