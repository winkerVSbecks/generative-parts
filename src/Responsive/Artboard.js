import React from 'react';
import { TypographySwatch, MediaCard, ProfileCard } from './components';

import { Box } from '../primitives';
import { SpacingY, Dimensions } from './RedLines';

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
    <Box {...props}>
      <Dimensions
        render={ref => (
          <div ref={ref}>
            <TypographySwatch />
            <SpacingY type="margin">32</SpacingY>

            <MediaCard {...media} />
            <SpacingY type="margin">32</SpacingY>

            <ProfileCard {...profile} height={[144, 280, 280]} />
          </div>
        )}
      />
    </Box>
  );
}
