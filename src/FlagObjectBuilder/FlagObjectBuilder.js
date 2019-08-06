import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Global } from '@emotion/core';
import theme, { globalStyles } from './theme';
import { Flex } from '../primitives';
import { FlagObject } from './FlagObject';
import { Controls } from './Controls';

export function FlagObjectBuilder() {
  const [contentHidden, setContentHidden] = React.useState(true);
  const [headline, setHeadline] = React.useState(true);
  const [pillar, setPillar] = React.useState(true);
  const [standFirst, setStandFirst] = React.useState(true);
  const [meta, setMeta] = React.useState(true);
  const [media, setMedia] = React.useState(true);
  const [content, setContent] = React.useState(true);

  const controls = {
    headline,
    setHeadline,
    pillar,
    setPillar,
    standFirst,
    setStandFirst,
    meta,
    setMeta,
    media,
    setMedia,
    contentHidden,
    setContentHidden,
  };

  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Flex>
        <Flex
          flex="1"
          height="100vh"
          alignItems="center"
          justifyContent="center"
          ml={[3, 3, 0]}
        >
          <FlagObject {...controls} />
        </Flex>
        <Controls width={0.25} {...controls} />
      </Flex>
    </ThemeProvider>
  );
}
