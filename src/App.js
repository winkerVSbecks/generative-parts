import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import './App.css';
import theme from './theme';
import { Card, Flex, Container, AspectRatio } from './primitives';
import { ComponentGrid, TypographySwatch, ColorSwatch } from './components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <AspectRatio ratio={720 / 1184} mx={[0, 0, 0, 3]}>
          <ComponentGrid>
            <Flex flexDirection={'column'} mr={3} width={240}>
              <TypographySwatch height={176} mb={3} />
              <Card borderRadius={3} bg="white" height={280} />
            </Flex>
            <Flex flexDirection="column" width={384} mr={[0, 0, 3]}>
              <Card borderRadius={3} bg="white" height={64} mb={3} />
              <Card borderRadius={3} bg="white" height={328} mb={3} />
              <Card borderRadius={3} bg="white" height={48} />
            </Flex>
            <Flex
              flexDirection={['row', 'row', 'column']}
              width={[640, 640, 176]}
              height={[176, 176, 472]}
              mt={[3, 3, 0]}
            >
              <ColorSwatch
                name="black"
                flex="1 1 146.67px"
                mb={[0, 0, 3]}
                mr={[3, 3, 0]}
              />
              <ColorSwatch
                name="primary"
                flex="1 1 146.67px"
                mb={[0, 0, 3]}
                mr={[3, 3, 0]}
              />
              <ColorSwatch name="secondary" flex="1 1 146.67px" />
            </Flex>
          </ComponentGrid>
        </AspectRatio>
      </Container>
    </ThemeProvider>
  );
}

export default App;
