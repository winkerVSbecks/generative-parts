import React from 'react';
import styled from '@emotion/styled';
import { grid } from 'styled-system';
import { Card, Text, Box } from './primitives';

export const TypographySwatch = props => (
  <Card bg="white" alignItems="center" justifyContent="center" {...props}>
    <Text fontWeight={600} fontSize={[6, 7, 8]} m={0} lineHeight="solid">
      Aa
    </Text>
  </Card>
);

export const ColorSwatch = ({ name, ...props }) => (
  <Card bg="white" flexDirection="column" {...props}>
    <Box bg={name} flex="1 1 auto" />
    <Text
      style={{ textTransform: 'capitalize' }}
      fontWeight={500}
      fontSize={1}
      m={0}
      lineHeight="solid"
      p={3}
    >
      {name}
    </Text>
  </Card>
);

export const ComponentGrid = styled(Card)(grid, {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: '100%',
  height: '100%',
});

ComponentGrid.defaultProps = {
  backgroundColor: 'tertiary',
  alignContent: 'center',
  justifyItems: 'center',
  justifyContent: 'center',
  borderRadius: [0, 0, 0, 4],
  flexWrap: ['wrap', 'wrap', 'no-wrap'],
};
