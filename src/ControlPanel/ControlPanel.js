import React, { useState } from 'react';
import { ThemeProvider } from 'emotion-theming';
import hsluv from 'hsluv';
import Random from 'canvas-sketch-util/random';
import { lerp } from 'canvas-sketch-util/math';
import theme from '../theme';
import { Container, InputRange, Label } from '../primitives';
import { useThemes } from '../useThemes';
import DynamicCanvas from './DynamicCanvas';

function lightnessToLuminance(l) {
  if (l <= 8) {
    return (1.0 * l) / 903.2962962;
  } else {
    return 1.0 * Math.pow((l + 16) / 116, 3);
  }
}

function contrastRatio(l1, l2) {
  l1 = lightnessToLuminance(l1);
  l2 = lightnessToLuminance(l2);
  return (l1 + 0.05) / (l2 + 0.05);
}

function colourPalette(hue, saturation) {
  const black = hsluv.hsluvToHex([
    Random.rangeFloor(90, 360),
    Random.rangeFloor(0, 25),
    Random.rangeFloor(0, 10),
  ]);

  const h = i => lerp(hue - 40, hue, i);
  const s = i => lerp(saturation - 4, saturation, i);
  const l = i => lerp(96, 56, i);

  const tertiary = hsluv.hsluvToHex([h(1 / 2), s(1 / 2), l(1 / 2)]);
  const secondary = hsluv.hsluvToHex([h(0 / 2), s(0 / 2), l(0 / 2)]);
  const primary = hsluv.hsluvToHex([h(2 / 2), s(2 / 2), l(2 / 2)]);
  return {
    black,
    primary,
    tertiary,
    secondary,
  };
}

function useColors() {
  const [palette, setPalette] = useState(colourPalette(90, 50));
  const [hue, setHue] = useState(90);
  const [saturation, setSaturation] = useState(50);

  const adjustHue = value => {
    setHue(value);
    setPalette(colourPalette(hue, saturation));
  };

  const adjustSaturation = value => {
    setSaturation(value);
    setPalette(colourPalette(hue, saturation));
  };

  return [palette, hue, saturation, adjustHue, adjustSaturation];
}

export function ControlPanel() {
  const [data, activeIndex, selectTheme] = useThemes();

  const [palette, hue, saturation, adjustHue, adjustSaturation] = useColors();

  return (
    <ThemeProvider
      theme={{ ...theme, colors: { ...theme.colors, ...palette } }}
    >
      <Container>
        <DynamicCanvas
          activeIndex={activeIndex}
          selectTheme={selectTheme}
          profile={data.profile}
          media={data.media}
        >
          <div
            style={{
              color: 'white',
              position: 'absolute',
              top: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '75%',
              height: 24,
            }}
          >
            <Label htmlFor="hue">hue</Label>
            <InputRange
              id="hue"
              name="hue"
              min={0}
              max={360}
              step={1}
              value={hue}
              onChange={adjustHue}
            />

            <Label htmlFor="saturation" ml={4}>
              saturation
            </Label>
            <InputRange
              id="saturation"
              name="saturation"
              min={0}
              max={100}
              step={1}
              value={saturation}
              onChange={adjustSaturation}
            />
          </div>
        </DynamicCanvas>
      </Container>
    </ThemeProvider>
  );
}
