import React from 'react';
import { withTheme } from 'emotion-theming';
import styled from '@emotion/styled';

import {
  TypographySwatch,
  ColorSwatch,
  NavBar,
  MediaCard,
  SearchBar,
  ProfileCard,
} from '../components';
import { Pager } from '../Pager';
import { Card, Flex } from '../primitives';

export const ComponentGrid = styled(Card)({
  display: 'block',
});

ComponentGrid.defaultProps = {
  py: 3,
  px: 4,
  borderRadius: 2,
  maxWidth: 10,
  my: 3,
  ml: [3, 3, 'auto'],
  mr: [3, 3, 'auto'],
};

function DynamicCanvas({
  profile,
  media,
  activeIndex,
  selectTheme,
  children,
  theme,
  ...props
}) {
  return (
    <ComponentGrid {...props}>
      {children}
      <Pager
        active={activeIndex}
        onUpdate={selectTheme}
        position="relative"
        bottom={0}
        mb={4}
      />

      <TypographySwatch mb={4} />
      <ProfileCard {...profile} height={[144, 280, 280]} mb={4} />

      <NavBar mb={4} />
      <MediaCard {...media} height={[144, 328, 328]} mb={4} />
      <SearchBar height={48} mb={4} />

      <Flex height={6} mb={4}>
        <ColorSwatch name="black" flex="1 1 146.67px" mr={3} />
        <ColorSwatch name="primary" flex="1 1 146.67px" mr={3} />
        <ColorSwatch name="secondary" flex="1 1 146.67px" />
      </Flex>
    </ComponentGrid>
  );
}

export default withTheme(DynamicCanvas);
