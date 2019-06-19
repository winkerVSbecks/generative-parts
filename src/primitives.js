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
  fontSize,
} from 'styled-system';
import { withTheme } from 'emotion-theming';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import { ReactComponent as MenuIcon } from './menu.svg';
import { ReactComponent as SearchIcon } from './search.svg';
import { ReactComponent as InfoIcon } from './info.svg';
import { ReactComponent as CloseIcon } from './x-circle.svg';

const StyledSlider = styled(Slider)`
  max-width: 200px;
  .rc-slider-handle:active {
    border: 0;
    box-shadow: none;
  }

  .rc-slider-handle:focus {
    border: 0;
    box-shadow: none;
  }
`;

export const InputRange = withTheme(({ theme, ...props }) => (
  <StyledSlider
    trackStyle={{ backgroundColor: theme.colors.white }}
    handleStyle={{
      borderColor: theme.colors.white,
      backgroundColor: theme.colors.white,
    }}
    railStyle={{
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
    }}
    {...props}
  />
));

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
  lineHeight: 'copy',
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

export const Label = styled(Text)();

Label.defaultProps = {
  as: 'label',
  mb: 0,
  mt: 0,
  mr: 2,
  lineHeight: 'solid',
  color: 'white',
  fontWeight: 5,
  fontSize: 1,
};

export const Image = styled(Box)(
  {
    maxWidth: '100%',
  },
  border,
);

Image.defaultProps = {
  as: 'img',
  m: 0,
  height: 'auto',
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

export const PrimaryButton = styled(Button)({
  display: 'block',
  backfaceVisibility: 'hidden',
  transform: 'translateZ(0)',
  transition: 'transform .25s ease-out',
  outline: 0,
  ':hover,:focus': {
    transform: 'scale( 1.05 )',
  },
  ':active': {
    transform: 'scale( .90 )',
  },
});

PrimaryButton.defaultProps = {
  as: 'button',
  border: 0,
  backgroundColor: 'secondary',
  borderRadius: 1,
  color: 'primary',
  fontSize: 1,
  fontWeight: 6,
};

export const Link = styled(Box)(props => ({
  ':hover': {
    color: props.theme.colors.tertiary,
  },
}));

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
  position: 'relative',
};

export const TransparentButton = styled(Button)`
  background-color: transparent;
  &:hover {
    background-color: transparent;
  }
  & > div {
    display: flex;
  }
`;

export const Menu = styled(MenuIcon)({}, color, space);
export const Search = styled(SearchIcon)({}, color, space);
export const Info = styled(InfoIcon)({}, color, space);
export const Close = styled(CloseIcon)({}, color, space);

export const IconButton = ({ name, icon, ...props }) => (
  <TransparentButton {...props}>
    <div aria-label={name}>{icon}</div>
  </TransparentButton>
);

export const Input = styled.input(
  {
    appearance: 'none',
    display: 'block',
    width: '100%',
    fontFamily: 'inherit',
    color: 'inherit',
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderStyle: 'solid',
    '::-ms-clear': {
      display: 'none',
    },
  },
  border,
  space,
  props => ({
    '::placeholder': {
      color: props.theme.gray,
    },
  }),
);

Input.defaultProps = {
  fontSize: 1,
  fontWeight: 400,
  pt: 3,
  pb: 3,
  pl: 2,
  pr: 2,
  borderRadius: 0,
  mt: 0,
  mb: 0,
  ml: 0,
  mr: 0,
};
