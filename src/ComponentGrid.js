import styled from '@emotion/styled';
import { grid, position } from 'styled-system';
import { Card, Flex } from './primitives';

export const ComponentGrid = styled(Card)(grid, {
  position: 'relative',
});

ComponentGrid.defaultProps = {
  backgroundColor: 'tertiary',
  alignContent: ['flex-end', 'center'],
  justifyItems: 'center',
  justifyContent: 'center',
  borderRadius: [0, 0, 0, 2],
  flexWrap: 'wrap', //['wrap', 'wrap', 'no-wrap', 'no-wrap'],
  height: ['100%', '100%', '100%', 720],
  width: ['100%', '100%', '100%', 1184],
};

ComponentGrid.One = styled(Flex)();
ComponentGrid.One.defaultProps = {
  flexDirection: 'column',
  mr: [2, 3, 3],
  ml: [2, 0, 0],
  mb: [3, 0, 0],
  width: ['auto', 240, 240],
  flex: ['1 0 192px', 'none', 'none'],
};

ComponentGrid.Two = styled(Flex)();
ComponentGrid.Two.defaultProps = {
  flexDirection: 'column',
  width: ['100%', 384, 384],
  mr: [2, 0, 3],
  ml: [2, 0, 0],
};

ComponentGrid.Three = styled(Flex)();
ComponentGrid.Three.defaultProps = {
  flexDirection: ['row', 'row', 'column'],
  width: ['100%', 640, 176],
  height: [128, 176, 472],
  mt: [3, 3, 0],
  mx: [2, 0, 0],
};
