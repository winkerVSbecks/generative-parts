import React, { useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';

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
  { typeSw, profile, nav, media, Search, black, primary, secondary },
  color,
) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.width = width * 2;
      canvasRef.current.height = height * 2;
      canvasRef.current.style.width = `${width}px`;
      canvasRef.current.style.height = `${height}px`;

      const context = canvasRef.current.getContext('2d');
      context.scale(2, 2);
      context.clearRect(0, 0, width, height);

      const padding = 4;

      context.strokeStyle = color;
      context.lineWidth = 2;
      [typeSw, profile, nav, media, Search, black, primary, secondary]
        .filter(x => x)
        .forEach(surface => {
          context.strokeRect(
            surface.x - padding,
            surface.y - padding,
            surface.width + padding * 2,
            surface.height + padding * 2,
          );
        });
    }

    return () => {
      // manager.unload();
    };
  });

  return canvasRef;
}
