import React from 'react';
import styled from '@emotion/styled';
import { Box, Flex, IconButton } from './primitives';
import { position } from 'styled-system';

const Circle = ({ isActive, ...props }) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    width={isActive ? '14px' : '10px'}
    height={isActive ? '14px' : '10px'}
    viewBox="0 0 24 24"
    fill="currentColor"
    opacity={isActive ? 1 : 0.5}
    m={1}
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
  </Box>
);

const PagerItem = styled.li`
  list-style: none;
  display: inline-block;
  line-height: 1;
`;

const PagerNav = styled(Box)({}, position);

PagerNav.defaultProps = {
  position: ['relative', 'absolute'],
  bottom: [0, '24px', '32px'],
  mt: [3, 0],
  mb: [3, 0],
};

export const Pager = ({ active, onUpdate, color = '#fff', ...props }) => (
  <PagerNav as="nav" aria-label="Theme Navigation" width="100%" {...props}>
    <Flex as="ul" alignItems="center" justifyContent="center" m={0} p={0}>
      <PagerItem>
        <IconButton
          px={0}
          name="one"
          icon={<Circle color={color} isActive={active === 0} />}
          onClick={() => onUpdate(0)}
        />
      </PagerItem>
      <PagerItem>
        <IconButton
          px={0}
          name="two"
          icon={<Circle color={color} isActive={active === 1} />}
          onClick={() => onUpdate(1)}
        />
      </PagerItem>
      <PagerItem>
        <IconButton
          px={0}
          name="three"
          icon={<Circle color={color} isActive={active === 2} />}
          onClick={() => onUpdate(2)}
        />
      </PagerItem>
    </Flex>
  </PagerNav>
);
