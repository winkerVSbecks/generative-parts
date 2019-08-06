import styled from '@emotion/styled';
import { space, color, layout, flexbox, typography } from 'styled-system';
import { themeGet } from '@styled-system/theme-get';
import {
  Text,
  Heading,
  BackgroundImage,
  Card as BaseCard,
} from '../primitives';

export const Card = styled(BaseCard)();
Card.defaultProps = {
  borderColor: 'pillar.main',
  borderWidth: 2,
  borderStyle: 'solid',
  borderX: 'none',
  borderBottom: 'none',
  flexDirection: 'column',
};

export const Headline = styled(Heading)();

Headline.defaultProps = {
  as: 'h2',
  mb: 3,
  mt: 0,
  fontFamily: 'serif',
  fontWeight: 'bold',
  lineHeight: 'title',
  fontSize: [2, 3, 4],
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
  ${blocky}
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
  blocky,
);
Meta.defaultProps = {
  alignItems: 'center',
  fontFamily: 'sans',
  lineHeight: 'solid',
  fontSize: 0,
  color: 'neutral.3',
};

export const MetaLink = styled(Meta)(
  {
    textDecoration: 'none',
    display: 'flex',
    ':hover, :focus': {
      textDecoration: 'underline',
    },
  },
  blocky,
);

MetaLink.defaultProps = {
  as: 'a',
  alignItems: 'center',
  fontFamily: 'sans',
  lineHeight: 'solid',
  fontSize: 0,
  color: 'neutral.3',
};

export const Media = styled(BackgroundImage)`
  position: relative;

  :after {
    content: '';
    position: absolute;
    background-color: ${props => props.theme.colors.neutral[4]};
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    opacity: ${props => (props.blocky ? 1 : 0)};
  }
`;

export const Blocky = styled.span(blocky);

function blocky(props) {
  return {
    backgroundColor: props.blocky
      ? themeGet(`colors.${props.color}`, 'black')(props)
      : 'transparent',
    ...(props.blocky && { '> *': { opacity: 0 } }),
    ...(props.blocky && { color: 'transparent', lineHeight: 1.4 }),
  };
}
