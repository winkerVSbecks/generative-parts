import React, { useRef, useState } from 'react';
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
import { useDimensions } from './useDimensions';
import { useRayCasterEngine, RayCasterDebug } from './useRayCasterEngine';
import { lightToStyles } from './lightToStyles';

function LightCanvas({ profile, media, activeIndex, selectTheme, theme }) {
  const typeSwRef = useRef(null);
  const profileRef = useRef(null);
  const navRef = useRef(null);
  const mediaRef = useRef(null);
  const searchRef = useRef(null);
  const blackRef = useRef(null);
  const primaryRef = useRef(null);
  const secondaryRef = useRef(null);
  const canvasRef = useRef(null);

  const [windowDims, surfaceDims] = useDimensions(
    typeSwRef,
    profileRef,
    navRef,
    mediaRef,
    searchRef,
    blackRef,
    primaryRef,
    secondaryRef,
  );

  const light = useRayCasterEngine(
    windowDims,
    surfaceDims,
    canvasRef,
    theme.colors.primary,
  );

  const [debug, setDebug] = useState(false);

  return (
    <ComponentGrid mx={[0, 0, 0, 3]}>
      {debug && <RayCasterDebug ref={canvasRef} />}
      <Toggle enabled={debug} onClick={() => setDebug(!debug)} />
      <InfoButton />

      <ComponentGrid.One>
        <TypographySwatch
          ref={typeSwRef}
          style={lightToStyles(light.typeSw, theme.colors)}
          mb={3}
        />
        <ProfileCard
          ref={profileRef}
          style={lightToStyles(light.profile, theme.colors)}
          {...profile}
          height={[144, 280, 280]}
        />
      </ComponentGrid.One>

      <ComponentGrid.Two>
        <NavBar
          ref={navRef}
          style={lightToStyles(light.nav, theme.colors)}
          mb={3}
        />
        <MediaCard
          ref={mediaRef}
          style={lightToStyles(light.media, theme.colors)}
          {...media}
          height={[144, 328, 328]}
          mb={3}
        />
        <SearchBar
          ref={searchRef}
          style={lightToStyles(light.search, theme.colors)}
          height={48}
        />
      </ComponentGrid.Two>

      <ComponentGrid.Three>
        <ColorSwatch
          ref={blackRef}
          style={lightToStyles(light.black, theme.colors)}
          name="black"
          flex="1 1 146.67px"
          mb={[0, 0, 3]}
          mr={[3, 3, 0]}
        />
        <ColorSwatch
          ref={primaryRef}
          style={lightToStyles(light.primary, theme.colors)}
          name="primary"
          flex="1 1 146.67px"
          mb={[0, 0, 3]}
          mr={[3, 3, 0]}
        />
        <ColorSwatch
          ref={secondaryRef}
          style={lightToStyles(light.secondary, theme.colors)}
          name="secondary"
          flex="1 1 146.67px"
        />
      </ComponentGrid.Three>

      <Pager active={activeIndex} onUpdate={selectTheme} />
    </ComponentGrid>
  );
}

export default withTheme(LightCanvas);
