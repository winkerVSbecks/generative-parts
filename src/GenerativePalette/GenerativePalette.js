import React, { useState } from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from '../theme';
import { Container, Flex } from '../primitives';
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
  const [roundness, radii, adjustRoundness] = useRadii();
  const [spaciousness, space, adjustSpaciousness] = useSpace();

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="auto" width="100%" px={3}>
        <Sliders
          width={0.25}
          mr={3}
          justifySelf="stretch"
          height="100%"
          maxHeight={720}
          {...{
            hue,
            saturation,
            adjustHue,
            adjustSaturation,
            roundness,
            adjustRoundness,
            spaciousness,
            adjustSpaciousness,
          }}
        />
        <ThemeProvider
          theme={{
            ...theme,
            radii,
            space,
            colors: { ...theme.colors, ...palette },
          }}
        >
          <DynamicCanvas
            activeIndex={activeIndex}
            selectTheme={selectTheme}
            profile={data.profile}
            media={data.media}
            flex="1 1 auto"
            mx={0}
          />
        </ThemeProvider>
      </Container>
    </ThemeProvider>
  );
}

function useRadii() {
  const [roundness, setRoundness] = useState(1);
  const [radii, setRadii] = useState([0, 8, 16, 9999, '100%']);
  const adjustRoundness = roundness => {
    setRoundness(roundness);
    setRadii([...[0, 8, 16].map(x => x * roundness), 9999, '100%']);
  };

  return [roundness, radii, adjustRoundness];
}

function useSpace() {
  const [spaciousness, setSpaciousness] = useState(1);
  const [space, setSpace] = useState([0, 4, 8, 16, 32, 64, 128, 256, 512]);
  const adjustSpaciousness = spaciousness => {
    setSpaciousness(spaciousness);
    setSpace([0, 4, 8, 16, 32, 64, 128, 256, 512].map(x => x * spaciousness));
  };

  return [spaciousness, space, adjustSpaciousness];
}
