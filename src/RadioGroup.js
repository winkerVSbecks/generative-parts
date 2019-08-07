import React from 'react';
import styled from '@emotion/styled';
import { Box, Flex, Text, Label } from './primitives';

const RadioGroupFieldset = styled(Flex)({
  padding: 0,
  border: 0,
});
RadioGroupFieldset.defaultProps = {
  // as: 'fieldset', doesn't support flex
  role: 'group',
  flexDirection: 'column',
  mt: 0,
  mb: 0,
  mr: 0,
  ml: 0,
};

const RadioGroupContainer = styled(Flex)({
  marginLeft: 0,
  ':hover, :focus-within': {
    borderColor: '#e5e5e5',
  },
});
RadioGroupContainer.defaultProps = {
  borderWidth: 2,
  borderStyle: 'solid',
  borderColor: 'white',
  borderRadius: '3px',
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
    border-radius: 0;
  }

  &:checked + label {
    background-color: #e5e5e5;
  }
`;

const RadioGroupLabel = styled(Text)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '3px',
});

RadioGroupLabel.defaultProps = {
  as: 'label',
  backgroundColor: '#fff',
  lineHeight: 'solid',
  color: 'black',
  fontWeight: 5,
  fontSize: 2,
};

export const RadioGroup = ({
  onChange,
  selected,
  title,
  hideTitle = false,
  items,
  direction = 'column',
  size = 2,
  ...props
}) => (
  <RadioGroupFieldset flexDirection={direction} alignItems="center" {...props}>
    {hideTitle ? (
      <RadioGroupTitle>{title}</RadioGroupTitle>
    ) : (
      <Label width={4} mb={direction === 'column' ? 2 : 0}>
        {title}
      </Label>
    )}
    <RadioGroupContainer
      flexDirection={direction}
      alignItems="center"
      justifyContent="center"
    >
      {items.map(item => (
        <Box key={`item-${item.value}`}>
          <RadioInput
            type="radio"
            id={`item-${title.replace(/\s/g, '-').toLowerCase()}-${item.value}`}
            name={title.replace(/\s/g, '-').toLowerCase()}
            onChange={() => onChange(item.value)}
            checked={selected === item.value}
          />
          <RadioGroupLabel
            width={size}
            height={size}
            htmlFor={`item-${title.replace(/\s/g, '-').toLowerCase()}-${
              item.value
            }`}
          >
            {item.label}
          </RadioGroupLabel>
        </Box>
      ))}
    </RadioGroupContainer>
  </RadioGroupFieldset>
);
