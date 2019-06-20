import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from '../theme';
import { Container } from '../primitives';
import { useThemes } from '../useThemes';
import DynamicCanvas from './DynamicCanvas';
import { Sliders } from './Sliders';
import { useGenerativePalette } from './useGenerativePalette';

export function GenerativePalette() {
  const [data, activeIndex, selectTheme] = useThemes();
  const [
    palette,
    hue,
    saturation,
    adjustHue,
    adjustSaturation,
  ] = useGenerativePalette();

  return (
    <ThemeProvider
      theme={{
        ...theme,
        colors: { ...theme.colors, ...palette },
      }}
    >
      <Container>
        <DynamicCanvas
          activeIndex={activeIndex}
          selectTheme={selectTheme}
          profile={data.profile}
          media={data.media}
        >
          <Sliders {...{ hue, saturation, adjustHue, adjustSaturation }} />
        </DynamicCanvas>
      </Container>
    </ThemeProvider>
  );
}
