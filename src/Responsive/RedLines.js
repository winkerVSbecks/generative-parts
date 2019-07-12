import React, { useRef } from 'react';
import useComponentSize from '@rehooks/component-size';
import styled from '@emotion/styled';
import { system, border, typography } from 'styled-system';
import { Resizable } from 're-resizable';
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

export const SpacingY = styled(Flex)(
  props => ({
    flex: 'none',
    backgroundColor:
      props.type === 'margin'
        ? 'rgba(245, 88, 88, .16)'
        : 'rgba(0, 235, 172, .24)',
    color: props.type === 'margin' ? '#B80000' : '#008F5F',
    textAlign: 'center',
    opacity: props.vertical === 0 ? 0 : 0.75,
  }),
  spacer,
  typography,
);

SpacingY.defaultProps = {
  type: 'margin',
  alignItems: 'center',
  justifyContent: 'center',
  width: [3, 3, 4],
  vertical: 4,
  mx: 'auto',
  fontSize: '0',
  fontWeight: 4,
};

export const SpacingX = styled(Flex)(
  props => ({
    flex: 'none',
    backgroundColor:
      props.type === 'margin'
        ? 'rgba(245, 88, 88, .16)'
        : 'rgba(0, 235, 172, .24)',
    color: props.type === 'margin' ? '#B80000' : '#008F5F',
    textAlign: 'center',
    opacity: props.horizontal === 0 ? 0 : 0.75,
  }),
  spacer,
  typography,
);

SpacingX.defaultProps = {
  type: 'margin',
  alignItems: 'center',
  justifyContent: 'center',
  height: [3, 3, 4],
  horizontal: 4,
  my: 'auto',
  fontSize: '0',
  fontWeight: 4,
};

const DimensionContainer = styled(Flex)(border);
const DimensionValue = styled(Text)(border);

export const Dimensions = ({ render, ...props }) => {
  const ref = useRef(null);
  const size = useComponentSize(ref);

  return (
    <Box {...props}>
      <Resizable
        style={{
          border: 'solid 1px rgba(0, 0, 0, 0.2)',
          backgroundColor: '#efefef',
          cursor: 'col-resize',
          padding: '1rem',
        }}
        enable={{
          top: false,
          right: true,
          bottom: false,
          left: false,
          topRight: false,
          bottomRight: false,
          bottomLeft: false,
          topLeft: false,
        }}
        defaultSize={{
          width: '100%',
        }}
      >
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
      </Resizable>
    </Box>
  );
};
