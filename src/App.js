import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import './App.css';
import theme from './theme';
import { Card, Box } from './primitives';
import { ComponentGrid, TypographySwatch, ColorSwatch } from './components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <ComponentGrid borderRadius={4}>
          <TypographySwatch
            gridColumn="auto / span 3"
            gridRow="auto / span 2"
          />
          {/* Navbar */}
          <Card
            borderRadius={3}
            bg="white"
            gridColumn="auto / span 5"
            gridRow="auto / span 1"
          />
          {/* Media Card */}
          <Card
            borderRadius={3}
            bg="white"
            gridColumn="auto / span 5"
            gridRow="auto / span 4"
          />
          {/* Profile */}
          <Card
            borderRadius={3}
            bg="white"
            gridColumn="auto / span 3"
            gridRow="auto / span 4"
          />
          {/* Searchbar */}
          <Card
            borderRadius={3}
            bg="white"
            gridColumn="auto / span 5"
            gridRow="auto / span 1"
          />
          <ColorSwatch
            name="black"
            gridColumn="auto / span 3"
            gridRow="auto / span 2"
          />
          <ColorSwatch
            name="primary"
            gridColumn="auto / span 3"
            gridRow="auto / span 2"
          />
          <ColorSwatch
            name="secondary"
            gridColumn="auto / span 3"
            gridRow="auto / span 2"
          />
        </ComponentGrid>
      </Box>
    </ThemeProvider>
  );
}

export default App;
