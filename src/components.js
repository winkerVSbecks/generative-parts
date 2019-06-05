import React from 'react';
import { Card, Text, Box, IconButton } from './primitives';
import { ReactComponent as Menu } from './menu.svg';
import { ReactComponent as Search } from './search.svg';

export const TypographySwatch = props => (
  <Card
    bg="white"
    alignItems="center"
    height={[80, 176]}
    justifyContent="center"
    {...props}
  >
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

export const NavBar = ({ name, ...props }) => (
  <Card bg="white" height={64} alignItems="center" px={3} {...props}>
    <IconButton color="gray" name="Menu" icon={<Menu />} />
    <Text
      fontWeight={600}
      fontSize={[3, 4]}
      lineHeight="solid"
      flex="1 1 0"
      textAlign="center"
    >
      Details
    </Text>
    <IconButton color="gray" name="Search" icon={<Search />} />
  </Card>
);
