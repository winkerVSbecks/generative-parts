import React, { useState } from 'react';
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
import { InfoButton } from '../Info';
import { Toggle } from '../Toggle';

function DynamicCanvas({
  profile,
  media,
  activeIndex,
  selectTheme,
  children,
  theme,
}) {
  const [debug, setDebug] = useState(false);

  return (
    <ComponentGrid mx={[0, 0, 0, 3]}>
      {/* <Toggle enabled={debug} onClick={() => setDebug(!debug)} /> */}
      <InfoButton />
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
