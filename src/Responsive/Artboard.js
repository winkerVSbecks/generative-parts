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
  debug,
  ...props
}) {
  return (
    <Box {...props}>
      <Dimensions
        mb={4}
        render={ref => (
          <div ref={ref}>
            <MediaCard debug={debug} {...media} />
          </div>
        )}
      />

      <Dimensions
        mb={4}
        render={ref => (
          <div ref={ref}>
            <ProfileCard debug={debug} {...profile} />
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
    </Box>
  );
}
