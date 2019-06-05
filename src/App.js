import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import './App.css';
import theme from './theme';
import { Card, Container } from './primitives';
import {
  TypographySwatch,
  ColorSwatch,
  NavBar,
  MediaCard,
  SearchBar,
} from './components';
import { ComponentGrid } from './ComponentGrid';
import { useThemes } from './useThemes';
import { Pager } from './Pager';
import { InfoButton } from './Info';

function App() {
  const [data, activeIndex, selectTheme] = useThemes();

  return (
    <ThemeProvider theme={{ ...theme, ...data.theme }}>
      <Container>
        <InfoButton />
        <ComponentGrid mx={[0, 0, 0, 3]}>
          <ComponentGrid.One>
            <TypographySwatch mb={3} />
            <Card borderRadius={1} bg="white" height={[176, 280, 280]} />
          </ComponentGrid.One>
          <ComponentGrid.Two>
            <NavBar mb={3} />
            <MediaCard {...data.media} height={[176, 328, 328]} mb={3} />
            <SearchBar height={48} />
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
          <Pager active={activeIndex} onUpdate={selectTheme} />
        </ComponentGrid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
