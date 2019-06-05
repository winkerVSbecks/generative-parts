import React from 'react';
import styled from '@emotion/styled';
import {
  space,
  color,
  layout,
  flexbox,
  typography,
  border,
  shadow,
  background,
  buttonStyle,
  grid,
} from 'styled-system';
import { ReactComponent as MenuIcon } from './menu.svg';
import { ReactComponent as SearchIcon } from './search.svg';

export const Box = styled.div(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },
  space,
  color,
  layout,
  flexbox,
);

export const Flex = styled(Box)({
  display: 'flex',
});

export const Text = styled(Box)(typography);

Text.defaultProps = {
  as: 'p',
  mb: 0,
  mt: 0,
  fontFamily: 'inter',
  lineHeight: 'body',
  color: 'gray',
};

export const Heading = styled(Text)();

Heading.defaultProps = {
  as: 'h2',
  mb: 0,
  mt: 0,
  fontSize: 4,
  fontWeight: 'bold',
  fontFamily: 'inter',
  lineHeight: 'title',
  color: 'black',
};

export const Image = styled(Box)(
  {
    maxWidth: '100%',
    height: 'auto',
  },
  border,
);

Image.defaultProps = {
  as: 'img',
  m: 0,
};

export const BackgroundImage = styled.div(
  {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  props => ({
    backgroundColor: props.theme.colors.gray,
    backgroundImage: props.image ? `url(${props.image})` : null,
  }),
  layout,
  flexbox,
);

export const Card = styled(Box)(
  { display: 'flex', overflow: 'hidden' },
  border,
  shadow,
  background,
  grid,
);

Card.defaultProps = {
  borderRadius: 1,
};

export const Button = styled(Box)(
  {
    appearance: 'none',
    display: 'inline-block',
    textAlign: 'center',
    lineHeight: 'inherit',
    textDecoration: 'none',
  },
  typography,
  border,
  buttonStyle,
);

Button.defaultProps = {
  as: 'button',
  border: 0,
};

export const Link = styled(Box)();

Link.defaultProps = {
  as: 'a',
  color: 'primary',
};

export const Container = styled(Flex)({ overflow: 'hidden' });

Container.defaultProps = {
  alignItems: 'center',
  mx: 'auto',
  height: '100vh',
  maxWidth: 1184,
};

export const Menu = styled(MenuIcon)({}, color, space);
export const Search = styled(SearchIcon)({}, color, space);

export const TransparentButton = styled(Button)`
  padding: 0;
  background-color: transparent;
  &:hover {
    background-color: transparent;
  }
  & > div {
    display: flex;
  }
`;

export const IconButton = ({ name, icon, ...props }) => (
  <TransparentButton {...props}>
    <div aria-label={name}>{icon}</div>
  </TransparentButton>
);
