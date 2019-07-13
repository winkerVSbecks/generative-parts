import React from 'react';
import styled from '@emotion/styled';
import { color } from 'styled-system';
import posed from 'react-pose';

const ToggleIndicator = posed.circle({
  off: {
    cx: 8,
  },
  on: {
    cx: 16,
  },
});

const ToggleButton = styled.svg`
  padding: ${props => props.theme.space[3]}px;
  ${color}
`;

ToggleButton.defaultProps = {
  color: 'white',
};

export const Toggle = ({ enabled, onClick, ...props }) => (
  <ToggleButton
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    onClick={onClick}
    onKeyPress={e => {
      if (e.key === ' ') {
        onClick();
      }
    }}
    role="button"
    tabIndex="0"
    aria-pressed={enabled}
    {...props}
  >
    <rect aria-hidden="true" x="1" y="5" width="22" height="14" rx="7" ry="7" />
    <ToggleIndicator
      aria-hidden="true"
      pose={enabled ? 'on' : 'off'}
      fill="currentColor"
      cy="12"
      r="3"
    />
  </ToggleButton>
);
