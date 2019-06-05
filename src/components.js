import React from 'react';
import { Card, Text, Box } from './primitives';

export const TypographySwatch = props => (
  <Card bg="white" alignItems="center" justifyContent="center" {...props}>
    <Text fontWeight={600} fontSize={[5, 6, 7, 8]} m={0} lineHeight="solid">
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
      fontSize={['0', 1, 1]}
      m={0}
      lineHeight="solid"
      p={3}
    >
      {name}
    </Text>
  </Card>
);
