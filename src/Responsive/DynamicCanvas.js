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
} from './components';
import { Pager } from '../Pager';
import { Card, Flex } from '../primitives';
import { Spacing, Dimensions } from './RedLines';

export const ComponentGrid = styled(Card)({
  display: 'block',
});

ComponentGrid.defaultProps = {
  backgroundColor: '#EBEBEB',
  py: 4,
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
        color="gray"
        position="relative"
        bottom={0}
        mb={4}
      />

      <Dimensions value={254} />
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
    </ComponentGrid>
  );
}

export default withTheme(DynamicCanvas);
