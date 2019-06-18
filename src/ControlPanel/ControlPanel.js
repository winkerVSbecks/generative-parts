import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from '../theme';
import { Container } from '../primitives';
import { useThemes } from '../useThemes';
import DynamicCanvas from './DynamicCanvas';

export function ControlPanel() {
  const [data, activeIndex, selectTheme] = useThemes();

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <DynamicCanvas
          activeIndex={activeIndex}
          selectTheme={selectTheme}
          profile={data.profile}
          media={data.media}
        />
      </Container>
    </ThemeProvider>
  );
}
