import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import './App.css';
import theme from './theme';
import { Card, Container } from './primitives';
import { TypographySwatch, ColorSwatch, NavBar, MediaCard } from './components';
import { ComponentGrid } from './ComponentGrid';
import breathe from './fabian-moller-401625-unsplash.jpg';

// Breathe - Photo by Fabian Møller on Unsplash
// Summer Days
// I am awakened by these beams of light.

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <ComponentGrid mx={[0, 0, 0, 3]}>
          <ComponentGrid.One>
            <TypographySwatch mb={3} />
            <Card borderRadius={3} bg="white" height={[176, 280, 280]} />
          </ComponentGrid.One>
          <ComponentGrid.Two>
            <NavBar mb={3} />
            <MediaCard image={breathe} height={[176, 328, 328]} mb={3} />
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
      </Container>
    </ThemeProvider>
  );
}

export default App;
