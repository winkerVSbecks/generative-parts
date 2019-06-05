import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import './App.css';
import theme from './theme';
import { Card, Container } from './primitives';
import { TypographySwatch, ColorSwatch, NavBar, MediaCard } from './components';
import { ComponentGrid } from './ComponentGrid';
import { useMocks } from './useMocks';

function App() {
  const [data, cycleData] = useMocks();

  return (
    <ThemeProvider theme={{ theme, ...data.theme }}>
      <Container onClick={cycleData}>
        <ComponentGrid mx={[0, 0, 0, 3]}>
          <ComponentGrid.One>
            <TypographySwatch mb={3} />
            <Card borderRadius={1} bg="white" height={[176, 280, 280]} />
          </ComponentGrid.One>
          <ComponentGrid.Two>
            <NavBar mb={3} />
            <MediaCard {...data.media} height={[176, 328, 328]} mb={3} />
            <Card borderRadius={1} bg="white" height={48} />
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
