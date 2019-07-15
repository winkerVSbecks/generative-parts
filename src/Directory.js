import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Link as RouterLink } from '@reach/router';
import styled from '@emotion/styled';
import { border, shadow, background, grid } from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';
import theme from './theme';
import { Flex, Link, Heading, Box, Icon } from './primitives';
import { ReactComponent as SunIcon } from './icons/sun.svg';
import { ReactComponent as SlidersIcon } from './icons/sliders.svg';
import { ReactComponent as MaxIcon } from './icons/maximize-2.svg';
import { ReactComponent as LayoutIcon } from './icons/layout.svg';

const ExperimentLink = styled(Link, { shouldForwardProp })(
  { display: 'flex' },
  props => ({
    ':hover, :focus': {
      backgroundColor: props.theme.colors.primary,
      color: props.theme.colors.black,
    },
  }),
  border,
  shadow,
  background,
  grid,
);
ExperimentLink.defaultProps = {
  width: [4, 5],
  height: [4, 5],
  backgroundColor: 'white',
  borderRadius: '3px',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'black',
  mr: 3,
  mb: 3,
};

export const Directory = () => (
  <ThemeProvider theme={theme}>
    <Box maxWidth={11} mx="auto" mt={[4, 6, 7]} px={3}>
      <Heading color="white" flex="1">
        Generative.parts
      </Heading>

      <Flex as="main" flexWrap="wrap" my={5}>
        <ExperimentLink
          as={RouterLink}
          title="Generative grid layouts"
          to="/layout"
        >
          <Icon as={LayoutIcon} />
        </ExperimentLink>
        <ExperimentLink
          as={RouterLink}
          title="Dynamic lighting based colour"
          to="/light"
        >
          <Icon as={SunIcon} />
        </ExperimentLink>
        <ExperimentLink as={RouterLink} title="Colour recipe" to="/generative">
          <Icon as={SlidersIcon} />
        </ExperimentLink>
        <ExperimentLink
          as={RouterLink}
          title="Responsive components"
          to="/responsive"
        >
          <Icon as={MaxIcon} />
        </ExperimentLink>
      </Flex>

      <footer>
        <Link
          fontWeight="bold"
          mr={3}
          href="https://github.com/winkerVSbecks/generative-parts"
        >
          GitHub
        </Link>
        <Link fontWeight="bold" href="https://varun.ca">
          varun.ca
        </Link>
      </footer>
    </Box>
  </ThemeProvider>
);
