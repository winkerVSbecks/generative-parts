import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';
import { IconButton, Info, Close, Heading, Flex } from './primitives';

const ShowInfoButton = styled(IconButton)`
  position: absolute;
  right: 0;
  top: 0;
  padding: ${props => props.theme.space[3]}px;
`;

const StyledDialog = styled(Dialog)`
  padding: ${props => props.theme.space[4]}px;
  border-radius: ${props => props.theme.radii[2]}px;
`;

export const InfoButton = () => {
  const [showInfo, setVisibility] = useState(false);
  return (
    <React.Fragment>
      <ShowInfoButton
        color="white"
        name="About"
        icon={<Info />}
        onClick={() => setVisibility(true)}
      />

      <StyledDialog isOpen={showInfo} onDismiss={() => setVisibility(false)}>
        <Flex>
          <Heading flex="1 1 0">Generative Lighting</Heading>
          <IconButton
            color="black"
            name="close"
            icon={<Close />}
            onClick={() => setVisibility(false)}
          />
        </Flex>

        <p>Hello there. I am a dialog</p>
      </StyledDialog>
    </React.Fragment>
  );
};
