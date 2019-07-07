import React from 'react';
import styled from '@emotion/styled';
import { Box, Text } from './primitives';

const size = 2;

const RadioGroupContainer = styled(Box)({
  border: 0,
  padding: 0,
  marginLeft: 0,
});
RadioGroupContainer.defaultProps = {
  as: 'fieldset',
};

const RadioGroupTitle = styled.legend`
  position: fixed !important;
  _position: absolute !important;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
`;

const RadioInput = styled.input`
  opacity: 0;
  position: absolute;

  &:focus + label {
    outline: thick double ${props => props.theme.colors.gray};
  }

  &:checked + label {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const RadioGroupLabel = styled(Text)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

RadioGroupLabel.defaultProps = {
  as: 'label',
  backgroundColor: 'rgba(0, 0, 0, 0.1)',
  lineHeight: 'solid',
  width: size,
  height: size,
  color: 'black',
  fontWeight: 5,
  fontSize: 2,
};

export const VerticalThemeSwitcher = ({
  active,
  onUpdate,
  color = '#fff',
  ...props
}) => (
  <RadioGroupContainer as="fieldset" {...props}>
    <RadioGroupTitle>Select a Theme</RadioGroupTitle>
    <Box width={size} alignItems="center" justifyContent="center">
      {[0, 1, 2].map(theme => (
        <Box key={`theme-${theme}`}>
          <RadioInput
            type="radio"
            id={`theme-${theme}`}
            name="radios"
            onChange={() => onUpdate(theme)}
            checked={active === theme}
          />
          <RadioGroupLabel htmlFor={`theme-${theme}`}>{theme}</RadioGroupLabel>
        </Box>
      ))}
    </Box>
  </RadioGroupContainer>
);
