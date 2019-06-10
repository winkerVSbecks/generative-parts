import React, { useRef } from 'react';
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
import { RayCaster } from './RayCaster';
import { useDimensions } from './useDimensions';

export function Canvas({ profile, media, activeIndex, selectTheme }) {
  const typeSwRef = useRef(null);
  const profileRef = useRef(null);
  const navRef = useRef(null);
  const mediaRef = useRef(null);
  const searchRef = useRef(null);
  const blackRef = useRef(null);
  const primaryRef = useRef(null);
  const secondaryRef = useRef(null);

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

  const surfaces = [
    { name: 'typeSw', dims: surfaceDims.typeSw },
    { name: 'profile', dims: surfaceDims.profile },
    { name: 'nav', dims: surfaceDims.nav },
    { name: 'media', dims: surfaceDims.media },
    { name: 'search', dims: surfaceDims.search },
    { name: 'black', dims: surfaceDims.black },
    { name: 'primary', dims: surfaceDims.primary },
    { name: 'secondary', dims: surfaceDims.secondary },
  ];

  return (
    <ComponentGrid mx={[0, 0, 0, 3]}>
      <RayCaster windowDims={windowDims} surfaces={surfaces} />
      <InfoButton />

      <ComponentGrid.One>
        <TypographySwatch ref={typeSwRef} mb={3} />
        <ProfileCard ref={profileRef} {...profile} height={[144, 280, 280]} />
      </ComponentGrid.One>

      <ComponentGrid.Two>
        <NavBar ref={navRef} mb={3} />
        <MediaCard ref={mediaRef} {...media} height={[144, 328, 328]} mb={3} />
        <SearchBar ref={searchRef} height={48} />
      </ComponentGrid.Two>

      <ComponentGrid.Three>
        <ColorSwatch
          ref={blackRef}
          name="black"
          flex="1 1 146.67px"
          mb={[0, 0, 3]}
          mr={[3, 3, 0]}
        />
        <ColorSwatch
          ref={primaryRef}
          name="primary"
          flex="1 1 146.67px"
          mb={[0, 0, 3]}
          mr={[3, 3, 0]}
        />
        <ColorSwatch ref={secondaryRef} name="secondary" flex="1 1 146.67px" />
      </ComponentGrid.Three>

      <Pager active={activeIndex} onUpdate={selectTheme} />
    </ComponentGrid>
  );
}
