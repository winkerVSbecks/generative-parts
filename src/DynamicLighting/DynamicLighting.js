import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from '../theme';
import { Container } from '../primitives';
import { useThemes } from '../useThemes';
import LightCanvas from './LightCanvas';

export function DynamicLighting() {
  const [data, activeIndex, selectTheme] = useThemes();

  return (
    <ThemeProvider theme={{ ...theme, ...data.theme }}>
      <Container>
        <LightCanvas
          activeIndex={activeIndex}
          selectTheme={selectTheme}
          profile={data.profile}
          media={data.media}
        />
      </Container>
    </ThemeProvider>
  );
}
