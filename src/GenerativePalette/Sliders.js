import React from 'react';
import { InputRange, Label, Flex } from '../primitives';

export const Sliders = ({ hue, adjustHue, saturation, adjustSaturation }) => (
  <Flex
    color="white"
    alignItems="center"
    justifyContent="center"
    width="100%"
    style={{
      position: 'absolute',
      top: '2rem',
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

    <Label htmlFor="saturation" ml={5}>
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
  </Flex>
);
