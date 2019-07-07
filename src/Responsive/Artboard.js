import React from 'react';
import {
  TypographySwatch,
  ColorSwatch,
  NavBar,
  MediaCard,
  SearchBar,
  ProfileCard,
} from './components';

import { Box, Flex } from '../primitives';
import { Spacing, Dimensions } from './RedLines';

export function Artboard({
  profile,
  media,
  activeIndex,
  selectTheme,
  children,
  theme,
  ...props
}) {
  return (
    <Box maxWidth={10} {...props}>
      <Dimensions
        render={ref => (
          <div ref={ref}>
            <TypographySwatch />
            <Spacing>32</Spacing>

            <ProfileCard {...profile} height={[144, 280, 280]} />
            <Spacing>32</Spacing>

            <NavBar />
            <Spacing>32</Spacing>

            <MediaCard {...media} height={[144, 328, 328]} />
            <Spacing>32</Spacing>

            <SearchBar height={48} />
            <Spacing>32</Spacing>

            <Flex height={[4, 5]}>
              <ColorSwatch name="black" flex="1 1 146.67px" mr={3} />
              <ColorSwatch name="primary" flex="1 1 146.67px" mr={3} />
              <ColorSwatch name="secondary" flex="1 1 146.67px" />
            </Flex>
          </div>
        )}
      />
    </Box>
  );
}
