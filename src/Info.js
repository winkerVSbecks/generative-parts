import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';
import {
  IconButton,
  Info,
  Close,
  Heading,
  Flex,
  Text,
  Link,
} from './primitives';

const ShowInfoButton = styled(IconButton)`
  position: absolute;
  right: 0;
  top: 0;
  padding: ${props => props.theme.space[3]}px;
`;

const StyledDialog = styled(Dialog)`
  box-sizing: border-box;
  padding: ${props => props.theme.space[4]}px;
  border-radius: ${props => props.theme.radii[2]}px;
  max-width: 40em;
  width: 100%;
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
        <Flex mb={5}>
          <Heading flex="1 1 0">Generative Lighting</Heading>
          <IconButton
            color="black"
            name="close"
            icon={<Close />}
            onClick={() => setVisibility(false)}
          />
        </Flex>

        <Text color="black" mb={3}>
          This experiment uses a basic ray casting engine to dynamically
          determine the colours of interface. The engine's light source emits
          vector <em>rays</em>. The interface provides <em>surfaces</em> for the
          light to interact with. The number of rays hitting a particular UI
          component determines how much light it is receiving and therefore its
          colour.
        </Text>

        <Text color="black" mb={3}>
          For more on ray casting check out Daniel Shiffman's fantastic
          tutorial:{' '}
          <Link href="https://youtu.be/TOEi6T2mtHo">
            Coding Challenge #145: 2D Raycasting
          </Link>
          .
        </Text>

        <Text color="black" mb={3}>
          The design for all the UI components are based on{' '}
          <Link href="https://www.usedetails.com">usedetails.com.</Link>
        </Text>
      </StyledDialog>
    </React.Fragment>
  );
};
