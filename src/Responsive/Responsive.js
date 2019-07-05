import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from '../theme';
import { useThemes } from '../useThemes';
import DynamicCanvas from './DynamicCanvas';

export function Responsive() {
  const [data, activeIndex, selectTheme] = useThemes();

  return (
    <ThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <DynamicCanvas
          activeIndex={activeIndex}
          selectTheme={selectTheme}
          profile={data.profile}
          media={data.media}
          flex="1 1 auto"
          mx={0}
        />
      </ThemeProvider>
    </ThemeProvider>
  );
}
