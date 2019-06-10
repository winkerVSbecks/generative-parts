import React from 'react';
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
import { useComponentDimensions } from './useComponentDimensions';

export function Canvas({ profile, media, activeIndex, selectTheme }) {
  const [typeSwRef, typeSwDims] = useComponentDimensions();
  const [profileRef, profileDims] = useComponentDimensions();
  const [NavRef, NavDims] = useComponentDimensions();
  const [mediaRef, mediaDims] = useComponentDimensions();
  const [SearchRef, SearchDims] = useComponentDimensions();
  const [blackRef, blackDims] = useComponentDimensions();
  const [primaryRef, primaryDims] = useComponentDimensions();
  const [secondaryRef, secondaryDims] = useComponentDimensions();
  console.log(typeSwDims.x);

  return (
    <ComponentGrid mx={[0, 0, 0, 3]}>
      <RayCaster
        {...{
          typeSwDims,
          profileDims,
          NavDims,
          mediaDims,
          SearchDims,
          blackDims,
          primaryDims,
          secondaryDims,
        }}
      />
      <InfoButton />

      <ComponentGrid.One>
        <TypographySwatch ref={typeSwRef} mb={3} />
        <ProfileCard ref={profileRef} {...profile} height={[144, 280, 280]} />
      </ComponentGrid.One>

      <ComponentGrid.Two>
        <NavBar ref={NavRef} mb={3} />
        <MediaCard ref={mediaRef} {...media} height={[144, 328, 328]} mb={3} />
        <SearchBar ref={SearchRef} height={48} />
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
