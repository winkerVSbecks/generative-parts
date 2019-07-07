import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Global } from '@emotion/core';
import theme from '../theme';
import { useThemes } from '../useThemes';
import { Artboard } from './Artboard';
import { Flex } from '../primitives';
import { VerticalThemeSwitcher } from '../VerticalThemeSwitcher';

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
        <VerticalThemeSwitcher
          mr={4}
          active={activeIndex}
          onUpdate={selectTheme}
        />
        <Artboard
          activeIndex={activeIndex}
          selectTheme={selectTheme}
          profile={data.profile}
          media={data.media}
          flex="1 1 auto"
          mx={0}
        />
      </Flex>
    </ThemeProvider>
  );
}
