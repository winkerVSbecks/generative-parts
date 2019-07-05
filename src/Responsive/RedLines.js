import React from 'react';
import styled from '@emotion/styled';
import { system, border } from 'styled-system';
import { Box, Text, Flex } from '../primitives';

const spacer = system({
  vertical: {
    property: 'height',
    scale: 'space',
  },
  horizontal: {
    property: 'width',
    scale: 'space',
  },
});

export const Spacing = styled(Flex)(
  {
    backgroundColor: 'rgba(245, 88, 88, .16)',
    color: '#B80000',
    textAlign: 'center',
  },
  spacer,
);

Spacing.defaultProps = {
  alignItems: 'center',
  justifyContent: 'center',
  width: 4,
  vertical: 4,
  mx: 'auto',
};

const DimensionContainer = styled(Flex)(border);
const DimensionValue = styled(Text)(border);

export const Dimensions = ({ value }) => (
  <DimensionContainer
    alignItems="center"
    borderLeft="2px solid #F55858"
    borderRight="2px solid #F55858"
    py={1}
    mb={3}
  >
    <Box backgroundColor="#F55858" height="2px" flex="1" />
    <DimensionValue
      backgroundColor="#F55858"
      color="#fff"
      width={3}
      py={1}
      textAlign="center"
      borderRadius="3px"
    >
      {value}
    </DimensionValue>
    <Box backgroundColor="#F55858" height="2px" flex="1" />
  </DimensionContainer>
);
