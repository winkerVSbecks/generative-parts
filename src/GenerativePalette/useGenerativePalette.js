import { useState } from 'react';
import hsluv from 'hsluv';
import Random from 'canvas-sketch-util/random';
import { lerp } from 'canvas-sketch-util/math';

function colourPalette(hue, saturation) {
  const black = hsluv.hsluvToHex([
    0,
    Random.rangeFloor(0, 25),
    Random.rangeFloor(0, 10),
  ]);

  const gray = hsluv.hsluvToHex([0, 0, Random.rangeFloor(40, 60)]);

  const h = i => lerp(hue - 40, hue, i);
  const s = i => lerp(saturation - 4, saturation, i);
  const l = i => lerp(96, 56, i);

  const tertiary = hsluv.hsluvToHex([h(1 / 2), s(1 / 2), l(1 / 2)]);
  const secondary = hsluv.hsluvToHex([h(0 / 2), s(0 / 2), l(0 / 2)]);
  const primary = hsluv.hsluvToHex([h(2 / 2), s(2 / 2), l(2 / 2)]);
  return {
    black,
    gray,
    primary,
    tertiary,
    secondary,
  };
}

export function useGenerativePalette() {
  const start = { h: Random.rangeFloor(0, 360), s: Random.rangeFloor(0, 100) };
  const [palette, setPalette] = useState(colourPalette(start.h, start.s));
  const [hue, setHue] = useState(start.h);
  const [saturation, setSaturation] = useState(start.s);

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
