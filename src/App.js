import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import './App.css';
import theme from './theme';
import { Card, Flex } from './primitives';
import { ComponentGrid, TypographySwatch, ColorSwatch } from './components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Flex alignItems="center" justifyContent="center" height="100vh">
        <ComponentGrid borderRadius={4}>
          <Flex flexDirection="column" mr={3} width={240}>
            <TypographySwatch height={176} mb={3} />
            {/* Profile */}
            <Card borderRadius={3} bg="white" height={288} />
          </Flex>
          <Flex flexDirection="column" width={384} mr={3}>
            {/* Navbar */}
            <Card borderRadius={3} bg="white" height={64} mb={3} />
            {/* Media Card */}
            <Card borderRadius={3} bg="white" height={336} mb={3} />
            {/* Searchbar */}
            <Card borderRadius={3} bg="white" height={48} />
          </Flex>
          <Flex flexDirection="column" width={176} height={472}>
            <ColorSwatch name="black" flex="1 1 146.67px" mb={3} />
            <ColorSwatch name="primary" flex="1 1 146.67px" mb={3} />
            <ColorSwatch name="secondary" flex="1 1 146.67px" />
          </Flex>
        </ComponentGrid>
      </Flex>
    </ThemeProvider>
  );
}

export default App;
