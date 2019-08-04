import styled from '@emotion/styled';
import { space, color, layout, flexbox, typography } from 'styled-system';
import { Text, Heading, Image } from '../primitives';

export const Headline = styled(Heading)();

Headline.defaultProps = {
  as: 'h2',
  mb: 0,
  mt: 0,
  fontFamily: 'serif',
  lineHeight: 'title',
  color: 'neutral.0',
};

export const StandFirst = styled(Text)();

StandFirst.defaultProps = {
  as: 'p',
  mb: 0,
  mt: 0,
  fontFamily: 'serif',
  lineHeight: 'copy',
  color: 'neutral.0',
};

export const Meta = styled.span(
  { display: 'flex' },
  space,
  color,
  layout,
  flexbox,
  typography,
);
Meta.defaultProps = {
  alignItems: 'center',
  fontFamily: 'sans',
  lineHeight: 'solid',
  fontSize: 0,
  color: 'neutral.3',
};

export const MetaLink = styled(Meta)({
  textDecoration: 'none',
  display: 'flex',
  ':hover, :focus': {
    textDecoration: 'underline',
  },
});

MetaLink.defaultProps = {
  as: 'a',
  alignItems: 'center',
  fontFamily: 'sans',
  lineHeight: 'solid',
  fontSize: 0,
  color: 'neutral.3',
};
