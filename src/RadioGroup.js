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

export const RadioGroup = ({ onChange, selected, title, items, ...props }) => (
  <RadioGroupContainer as="fieldset" {...props}>
    <RadioGroupTitle>{title}</RadioGroupTitle>
    <Box width={size} alignItems="center" justifyContent="center">
      {items.map(item => (
        <Box key={`item-${item}`}>
          <RadioInput
            type="radio"
            id={`item-${item}`}
            name="radios"
            onChange={() => onChange(item)}
            checked={selected === item}
          />
          <RadioGroupLabel htmlFor={`item-${item}`}>{item}</RadioGroupLabel>
        </Box>
      ))}
    </Box>
  </RadioGroupContainer>
);
