import React from 'react';
import { Box, Flex, Label, Heading } from '../primitives';
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

export const Controls = ({
  headline,
  setHeadline,
  pillar,
  setPillar,
  standFirst,
  setStandFirst,
  meta,
  setMeta,
  media,
  setMedia,
  contentHidden,
  setContentHidden,
  border,
  setBorder,
  ...props
}) => {
  return (
    <Box p={3} {...props}>
      <Heading
        as="h2"
        mt={5}
        mb={4}
        borderColor="neutral.4"
        borderStyle="solid"
        borderWidth={2}
        borderX="none"
        borderTop="none"
      >
        Controls
      </Heading>

      <Togglable
        name="Content Hidden"
        value={contentHidden}
        onChange={setContentHidden}
      />
      <Togglable name="Headline" value={headline} onChange={setHeadline} />
      <Togglable name="Pillar" value={pillar} onChange={setPillar} />
      <Togglable
        name="Stand First"
        value={standFirst}
        onChange={setStandFirst}
      />
      <Togglable name="Meta" value={meta} onChange={setMeta} />
      <Togglable name="Media" value={media} onChange={setMedia} />
      <Togglable name="Border" value={border} onChange={setBorder} />

      <Heading as="h3" fontSize={2} mt={5} mb={3}>
        Alignment
      </Heading>
      <Box>
        <RadioGroup
          title="Select a Theme"
          items={['⬌', '⬍']}
          selected={'⬍'}
          onChange={() => {}}
        />
      </Box>
    </Box>
  );
};
