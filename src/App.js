import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import './App.css';
import theme from './theme';
import { Card, Flex, Container, AspectRatio } from './primitives';
import { TypographySwatch, ColorSwatch } from './components';
import { ComponentGrid } from './ComponentGrid';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <AspectRatio ratio={720 / 1184} mx={[0, 0, 0, 3]}>
          <ComponentGrid>
            <ComponentGrid.One>
              <TypographySwatch height={[80, 176]} mb={3} />
              <Card borderRadius={3} bg="white" height={[208, 280, 280]} />
            </ComponentGrid.One>
            <ComponentGrid.Two>
              <Card borderRadius={3} bg="white" height={64} mb={3} />
              <Card
                borderRadius={3}
                bg="white"
                height={[208, 328, 328]}
                mb={3}
              />
              <Card borderRadius={3} bg="white" height={48} />
            </ComponentGrid.Two>
            <ComponentGrid.Three>
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
            </ComponentGrid.Three>
          </ComponentGrid>
        </AspectRatio>
      </Container>
    </ThemeProvider>
  );
}

export default App;
