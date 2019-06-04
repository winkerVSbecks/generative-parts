import React from 'react';
import styled from '@emotion/styled';
import { grid, maxWidth } from 'styled-system';
import { Card, Text, Box } from './primitives';
import theme from './theme';

export const TypographySwatch = props => (
  <Card bg="white" alignItems="center" justifyContent="center" {...props}>
    <Text fontWeight={600} fontSize={[6, 7, 7]} m={0} lineHeight="solid">
      Aa
    </Text>
  </Card>
);

export const ColorSwatch = ({ name, ...props }) => (
  <Card bg="white" flexDirection="column" {...props}>
    <Box bg={name} flex="1 1 auto" />
    <Text
      style={{ textTransform: 'capitalize' }}
      fontWeight={600}
      fontSize={2}
      m={0}
      lineHeight="solid"
      p={3}
    >
      {name}
    </Text>
  </Card>
);

export const ComponentGrid = styled(Card)(grid, {
  display: 'grid',
  flex: 'none',
  // width: '100%',
});

const gridUnit = 64;

ComponentGrid.defaultProps = {
  borderRadius: 3,
  gridGap: 4,
  backgroundColor: 'tertiary',
  px: [3, 3, 6],
  py: [3, 4, 6],
  mx: [2, 3, 3],
  gridTemplateColumns: `repeat(12, ${gridUnit}px)`,
  gridAutoRows: gridUnit,
  gridAutoFlow: 'dense',
  // maxWidth: 7,
};
