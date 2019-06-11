import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import './App.css';
import theme from './theme';
import { Container } from './primitives';
import { useThemes } from './useThemes';
import Canvas from './Canvas';

function App() {
  const [data, activeIndex, selectTheme] = useThemes();

  return (
    <ThemeProvider theme={{ ...theme, ...data.theme }}>
      <Container>
        <Canvas
          activeIndex={activeIndex}
          selectTheme={selectTheme}
          profile={data.profile}
          media={data.media}
        />
      </Container>
    </ThemeProvider>
  );
}

export default App;
