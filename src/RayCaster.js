import React, { useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import { RayCasterEngine } from './ray-caster-engine';
import { useWindowMousePosition } from './useMousePosition';

export const RayCasterDebug = styled.canvas`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const RayCaster = withTheme(({ windowDims, surfaceDims, theme }) => {
  const canvasRef = useRayCasterDebug(
    windowDims,
    surfaceDims,
    theme.colors.primary,
  );

  return (
    <React.Fragment>
      <RayCasterDebug ref={canvasRef} />
    </React.Fragment>
  );
});

function useRayCasterDebug(
  { width, height },
  { typeSw, profile, nav, media, search, black, primary, secondary },
  color,
) {
  const canvasRef = useRef(null);
  let { x, y } = useWindowMousePosition();

  const rayCasterEngine = RayCasterEngine(
    width,
    height,
    {
      typeSw,
      profile,
      nav,
      media,
      search,
      black,
      primary,
      secondary,
    },
    { x, y },
  );

  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.width = width * 2;
      canvasRef.current.height = height * 2;
      canvasRef.current.style.width = `${width}px`;
      canvasRef.current.style.height = `${height}px`;

      const context = canvasRef.current.getContext('2d');
      context.scale(2, 2);
      context.clearRect(0, 0, width, height);

      context.strokeStyle = color;
      context.fillStyle = color;
      rayCasterEngine.draw(context);
    }

    return () => {
      // manager.unload();
    };
  });

  return canvasRef;
}
