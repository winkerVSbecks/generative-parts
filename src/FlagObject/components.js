import styled from '@emotion/styled';
import { space, color, layout, flexbox, typography } from 'styled-system';
import { Text, Heading, Image } from '../primitives';

export const Headline = styled(Heading)();

Headline.defaultProps = {
  as: 'h2',
  mb: 3,
  mt: 0,
  fontFamily: 'serif',
  fontWeight: 'bold',
  lineHeight: 'title',
  fontSize: 4,
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
  fontSize: 1,
};

export const Pillar = styled(Heading)`
  :after {
    content: '/';
    display: inline-block;
    font-weight: bold;
    margin-left: ${props => props.theme.space[1]}px;
  }
`;

Pillar.defaultProps = {
  as: 'span',
  fontFamily: 'serif',
  color: 'pillar.main',
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
