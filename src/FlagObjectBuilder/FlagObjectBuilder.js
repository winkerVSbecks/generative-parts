import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Global } from '@emotion/core';
import theme, { globalStyles } from './theme';
import { Flex } from '../primitives';
import { FlagObject } from './FlagObject';
import { Controls } from './Controls';

export function FlagObjectBuilder() {
  const controls = useControls();

  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Flex>
        <Flex
          flex="1"
          height="100vh"
          alignItems="center"
          justifyContent="center"
          p={3}
          ml={[3, 3, 0]}
        >
          <FlagObject {...controls.flagObjectProps} />
        </Flex>
        <Controls width={0.25} {...controls} />
      </Flex>
    </ThemeProvider>
  );
}

function useControls() {
  const [contentHidden, setContentHidden] = React.useState(true);
  const [headline, setHeadline] = React.useState(true);
  const [pillar, setPillar] = React.useState(true);
  const [standFirst, setStandFirst] = React.useState(true);
  const [meta, setMeta] = React.useState(true);
  const [media, setMedia] = React.useState(true);
  const [border, setBorder] = React.useState(true);

  const [contentDir, setContentDir] = React.useState('column');
  const [standfirstDir, setStandfirstDir] = React.useState('column');
  const [metaDir, setMetaDir] = React.useState('row');

  const [width, setWidth] = React.useState(11);
  const [height, setHeight] = React.useState(10);

  return {
    toggles: [
      {
        name: 'Content Hidden',
        value: contentHidden,
        onChange: setContentHidden,
      },
      { name: 'Headline', value: headline, onChange: setHeadline },
      { name: 'Pillar', value: pillar, onChange: setPillar },
      { name: 'Stand First', value: standFirst, onChange: setStandFirst },
      { name: 'Meta', value: meta, onChange: setMeta },
      { name: 'Media', value: media, onChange: setMedia },
      { name: 'Border', value: border, onChange: setBorder },
    ],
    alignment: [
      { title: 'Content', selected: contentDir, onChange: setContentDir },
      {
        title: 'Standfirst Group',
        selected: standfirstDir,
        onChange: setStandfirstDir,
      },
      {
        title: 'Meta',
        selected: metaDir,
        onChange: setMetaDir,
      },
    ],
    sliders: [
      { name: 'Width', value: width, onChange: setWidth, min: 0, max: 12 },
      { name: 'Height', value: height, onChange: setHeight, min: 5, max: 10 },
    ],
    flagObjectProps: {
      headline,
      pillar,
      standFirst,
      meta,
      media,
      contentHidden,
      border,
      contentDir,
      standfirstDir,
      metaDir,
      width,
      height,
    },
  };
}
