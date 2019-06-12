import React, { useRef } from 'react';
import { withTheme } from 'emotion-theming';
import chroma from 'chroma-js';
import {
  TypographySwatch,
  ColorSwatch,
  NavBar,
  MediaCard,
  SearchBar,
  ProfileCard,
} from './components';
import { ComponentGrid } from './ComponentGrid';
import { Pager } from './Pager';
import { InfoButton } from './Info';
import { useDimensions } from './useDimensions';
import { useRayCasterEngine, RayCasterDebug } from './ray-caster-engine';

function Canvas({ profile, media, activeIndex, selectTheme, theme }) {
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

  const lightVolumes = useRayCasterEngine(
    windowDims,
    surfaceDims,
    canvasRef,
    theme.colors.primary,
  );

  return (
    <ComponentGrid mx={[0, 0, 0, 3]}>
      <RayCasterDebug ref={canvasRef} />
      <InfoButton />

      <ComponentGrid.One>
        <TypographySwatch
          ref={typeSwRef}
          style={lightToColor(lightVolumes.typeSw, theme.colors)}
          mb={3}
        />
        <ProfileCard
          ref={profileRef}
          style={lightToColor(lightVolumes.profile, theme.colors)}
          {...profile}
          height={[144, 280, 280]}
        />
      </ComponentGrid.One>

      <ComponentGrid.Two>
        <NavBar
          ref={navRef}
          style={lightToColor(lightVolumes.nav, theme.colors)}
          mb={3}
        />
        <MediaCard
          ref={mediaRef}
          style={lightToColor(lightVolumes.media, theme.colors)}
          {...media}
          height={[144, 328, 328]}
          mb={3}
        />
        <SearchBar
          ref={searchRef}
          style={lightToColor(lightVolumes.search, theme.colors)}
          height={48}
        />
      </ComponentGrid.Two>

      <ComponentGrid.Three>
        <ColorSwatch
          ref={blackRef}
          style={lightToColor(lightVolumes.black, theme.colors)}
          name="black"
          flex="1 1 146.67px"
          mb={[0, 0, 3]}
          mr={[3, 3, 0]}
        />
        <ColorSwatch
          ref={primaryRef}
          style={lightToColor(lightVolumes.primary, theme.colors)}
          name="primary"
          flex="1 1 146.67px"
          mb={[0, 0, 3]}
          mr={[3, 3, 0]}
        />
        <ColorSwatch
          ref={secondaryRef}
          style={lightToColor(lightVolumes.secondary, theme.colors)}
          name="secondary"
          flex="1 1 146.67px"
        />
      </ComponentGrid.Three>

      <Pager active={activeIndex} onUpdate={selectTheme} />
    </ComponentGrid>
  );
}

export default withTheme(Canvas);

function lightToColor(lightVolume, colors) {
  return !lightVolume
    ? {
        '--material-white': chroma
          .mix('white', colors.tertiary, 0.2, 'hsl')
          .css(),
      }
    : {
        '--material-white': chroma
          .mix(
            'white',
            colors.tertiary,
            mapRange(lightVolume, 0, 1, 0.2, 1),
            'hsl',
          )
          .css(),
      };
  // : {
  //     '--material-white': `rgba(255, 255, 255, ${mapRange(
  //       lightVolume,
  //       0,
  //       1,
  //       0.75,
  //       1,
  //     )})`,
  //   };
}

function mapRange(n, start1, stop1, start2, stop2) {
  return ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
}
