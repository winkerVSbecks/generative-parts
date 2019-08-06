import React from 'react';
import { Box, Flex, Label, Heading, InputRange } from '../primitives';
import { Toggle } from '../Toggle';
import { RadioGroup } from '../RadioGroup';

const Togglable = ({ name, value, onChange }) => (
  <Flex alignItems="center" mb={2}>
    <Label mb={0} mr={3} width={4}>
      {name}
    </Label>
    <Toggle
      p={0}
      color="black"
      enabled={value}
      onClick={() => onChange(v => !v)}
    />
  </Flex>
);

export const Controls = ({ toggles, alignment, sliders, ...props }) => {
  return (
    <Box p={3} {...props}>
      <Heading
        as="h2"
        mt={4}
        mb={4}
        borderColor="neutral.4"
        borderStyle="solid"
        borderWidth={2}
        borderX="none"
        borderTop="none"
      >
        Controls
      </Heading>
      {toggles.map(toggle => (
        <Togglable key={toggle.name} {...toggle} />
      ))}
      <Heading as="h3" fontSize={2} mt={5} mb={3}>
        Alignment
      </Heading>
      {alignment.map(radioGrp => (
        <RadioGroup
          key={radioGrp.title}
          direction="row"
          size={1}
          mb={2}
          items={[
            { label: '⬌', value: 'row' },
            { label: '⬍', value: 'column' },
          ]}
          {...radioGrp}
        />
      ))}
      <Heading as="h3" fontSize={2} mt={5} mb={3}>
        Size
      </Heading>
      {sliders.map(slider => (
        <Box key={slider.name} maxWidth={6} mb={2}>
          <Label htmlFor={slider.name}>{slider.name}</Label>
          <InputRange id={slider.name} min={0} max={12} step={1} {...slider} />
        </Box>
      ))}
      <Box />
    </Box>
  );
};
