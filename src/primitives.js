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
  fontFamily: 'inter',
};

export const Heading = styled(Text)();

Heading.defaultProps = {
  as: 'h2',
  m: 0,
  fontSize: 4,
  fontWeight: 'bold',
  fontFamily: 'inter',
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

export const Card = styled(Box)(
  { display: 'flex', overflow: 'hidden' },
  border,
  shadow,
  background,
  grid,
);

Card.defaultProps = {
  borderRadius: 3,
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
