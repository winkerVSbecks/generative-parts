import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Global } from '@emotion/core';
import theme from '../theme';
import { useThemes } from '../useThemes';
import { Artboard } from './Artboard';
import { Flex } from '../primitives';
import { RadioGroup } from '../RadioGroup';

export function Responsive() {
  const [data, activeIndex, selectTheme] = useThemes();

  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={{
          body: {
            backgroundColor: '#efefef',
            cursor: 'col-resize',
          },
        }}
      />
      <Flex justifyContent="center" m={[3, 4]}>
        <RadioGroup
          mr={4}
          title="Select a Theme"
          items={[0, 1, 2]}
          selected={activeIndex}
          onChange={selectTheme}
        />
        <Artboard
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
