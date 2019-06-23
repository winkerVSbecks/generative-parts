import React from 'react';
import { InputRange, Label, Card, Box } from '../primitives';

export const Sliders = ({
  hue,
  adjustHue,
  saturation,
  adjustSaturation,
  roundness,
  adjustRoundness,
  spaciousness,
  adjustSpaciousness,
  ...props
}) => (
  <Card
    borderRadius={2}
    color="black"
    bg="white"
    py={4}
    px={3}
    flexDirection="column"
    {...props}
  >
    <Box mb={4}>
      <Label htmlFor="hue">Hue</Label>
      <InputRange
        id="hue"
        name="hue"
        min={0}
        max={360}
        step={1}
        value={hue}
        onChange={adjustHue}
      />
    </Box>

    <Box mb={4}>
      <Label htmlFor="saturation">Saturation</Label>
      <InputRange
        id="saturation"
        name="saturation"
        min={0}
        max={100}
        step={1}
        value={saturation}
        onChange={adjustSaturation}
      />
    </Box>

    <Box mb={4}>
      <Label htmlFor="roundness">Roundness</Label>
      <InputRange
        id="roundness"
        name="roundness"
        min={0}
        max={4}
        step={0.1}
        value={roundness}
        onChange={adjustRoundness}
      />
    </Box>

    <Box mb={4}>
      <Label htmlFor="spaciousness">Spaciousness</Label>
      <InputRange
        id="spaciousness"
        name="spaciousness"
        min={0.25}
        max={2}
        step={0.1}
        value={spaciousness}
        onChange={adjustSpaciousness}
      />
    </Box>
  </Card>
);
