import React from 'react';
import { Box, Flex, Label, Heading, InputRange } from '../primitives';
import { Toggle } from '../Toggle';
import { RadioGroup } from '../RadioGroup';

const Togglable = ({ name, value, onChange }) => (
  <Flex alignItems="center" mb={2}>
    <Label mb={0} mr={3} width={5}>
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

const JustifyContent = ({ label, value, onChange }) => (
  <Flex alignItems="center" mb={2}>
    <Label
      mb={0}
      mr={3}
      width={4}
      htmlFor={`text-spacing-${label.replace(/\s/g, '-')}`}
    >
      {label}
    </Label>
    <select
      id={`text-spacing-${label.replace(/\s/g, '-')}`}
      value={value}
      onChange={e => onChange(e.target.value)}
    >
      <option value="flex-start">start</option>
      <option value="center">center</option>
      <option value="space-between">space-between</option>
      <option value="space-around">space-around</option>
      <option value="flex-end">end</option>
    </select>
  </Flex>
);

export const Controls = ({
  toggles,
  alignment,
  sliders,
  contentAlignment,
  contentOrder,
  setContentOrder,
  ...props
}) => {
  return (
    <Box p={3} {...props}>
      <Heading as="h2" mt={0} mb={3}>
        Controls
      </Heading>
      <Heading
        as="h3"
        fontSize={1}
        mt={4}
        mb={2}
        color="neutral.2"
        style={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}
      >
        Visibility
      </Heading>
      {toggles.map(toggle => (
        <Togglable key={toggle.name} {...toggle} />
      ))}
      <Heading
        as="h3"
        fontSize={1}
        mt={4}
        mb={2}
        color="neutral.2"
        style={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}
      >
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
      {contentAlignment.map(section => (
        <JustifyContent key={section.label} {...section} />
      ))}
      <Heading
        as="h3"
        fontSize={1}
        mt={4}
        mb={3}
        color="neutral.2"
        style={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}
      >
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
