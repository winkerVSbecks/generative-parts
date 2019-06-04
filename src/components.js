import React from 'react';
import styled from '@emotion/styled';
import { grid, maxWidth } from 'styled-system';
import { Card, Text, Box } from './primitives';
import theme from './theme';

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
  height: '90vh',
  width: '82vw',
});

const gridUnit = 48;

ComponentGrid.defaultProps = {
  borderRadius: 3,
  gridGap: 3,
  backgroundColor: 'tertiary',
  px: [3, 3, 6],
  py: [3, 3, 5],
  mx: [2, 3, 3],
};

// 240 380 180

// 4  6  3
