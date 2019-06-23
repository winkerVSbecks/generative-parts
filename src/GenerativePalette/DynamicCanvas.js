import React from 'react';
import { withTheme } from 'emotion-theming';
import {
  TypographySwatch,
  ColorSwatch,
  NavBar,
  MediaCard,
  SearchBar,
  ProfileCard,
} from '../components';
import { ComponentGrid } from '../ComponentGrid';
import { Pager } from '../Pager';

function DynamicCanvas({
  profile,
  media,
  activeIndex,
  selectTheme,
  children,
  theme,
  ...props
}) {
  console.log(props);

  return (
    <ComponentGrid mx={[0, 0, 0, 3]} {...props}>
      {children}

      <ComponentGrid.One>
        <TypographySwatch mb={3} />
        <ProfileCard {...profile} height={[144, 280, 280]} />
      </ComponentGrid.One>

      <ComponentGrid.Two>
        <NavBar mb={3} />
        <MediaCard {...media} height={[144, 328, 328]} mb={3} />
        <SearchBar height={48} />
      </ComponentGrid.Two>

      <ComponentGrid.Three>
        <ColorSwatch
          name="black"
          flex="1 1 146.67px"
          mb={[0, 0, 3]}
          mr={[3, 3, 0]}
        />
        <ColorSwatch
          name="primary"
          flex="1 1 146.67px"
          mb={[0, 0, 3]}
          mr={[3, 3, 0]}
        />
        <ColorSwatch name="secondary" flex="1 1 146.67px" />
      </ComponentGrid.Three>

      <Pager active={activeIndex} onUpdate={selectTheme} />
    </ComponentGrid>
  );
}

export default withTheme(DynamicCanvas);
