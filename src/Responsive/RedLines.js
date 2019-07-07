import React, { useRef } from 'react';
import useComponentSize from '@rehooks/component-size';
import styled from '@emotion/styled';
import { system, border, typography } from 'styled-system';
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
  typography,
);

Spacing.defaultProps = {
  alignItems: 'center',
  justifyContent: 'center',
  width: 4,
  vertical: 4,
  mx: 'auto',
  fontSize: '0',
  fontWeight: 4,
};

const DimensionContainer = styled(Flex)(border);
const DimensionValue = styled(Text)(border);

export const Dimensions = ({ render }) => {
  const ref = useRef(null);
  const size = useComponentSize(ref);

  return (
    <React.Fragment>
      <DimensionContainer
        alignItems="center"
        borderLeft="2px solid #F55858"
        borderRight="2px solid #F55858"
        py={1}
        mb={2}
      >
        <Box backgroundColor="#F55858" height="2px" flex="1" />
        <DimensionValue
          backgroundColor="#F55858"
          color="#fff"
          width={3}
          py={1}
          textAlign="center"
          borderRadius="3px"
          fontSize={1}
          fontWeight={4}
        >
          {size.width}
        </DimensionValue>
        <Box backgroundColor="#F55858" height="2px" flex="1" />
      </DimensionContainer>
      {render(ref)}
    </React.Fragment>
  );
};
