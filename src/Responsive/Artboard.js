import React from 'react';
import { TypographySwatch, MediaCard, ProfileCard } from './components';

import { Box } from '../primitives';
import { Dimensions } from './RedLines';

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
        mb={4}
        render={ref => (
          <div ref={ref}>
            <ProfileCard {...profile} />
          </div>
        )}
      />

      <Dimensions
        mb={4}
        render={ref => (
          <div ref={ref}>
            <TypographySwatch />
          </div>
        )}
      />

      <Dimensions
        mb={4}
        render={ref => (
          <div ref={ref}>
            <MediaCard {...media} />
          </div>
        )}
      />
    </Box>
  );
}
