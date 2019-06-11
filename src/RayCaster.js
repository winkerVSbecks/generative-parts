import React, { useEffect, useRef } from 'react';
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

export const RayCaster = withTheme(
  ({ windowDims, theme, boundaries, light, interactions }) => {
    const canvasRef = useDrawRayCaster(
      windowDims,
      theme.colors.primary,
      boundaries,
      light,
      interactions,
      // drawRayCaster,
    );

    return <RayCasterDebug ref={canvasRef} />;
  },
);

function useDrawRayCaster(
  { width, height },
  color,
  boundaries,
  light,
  interactions,
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

      context.strokeStyle = color;
      context.fillStyle = color;

      if (boundaries) {
        boundaries.forEach(boundary => boundary.draw(context));
        light.draw(context);

        interactions.forEach(({ a, b }) => {
          context.beginPath();
          context.moveTo(...a);
          context.lineTo(...b);
          context.stroke();
        });
      }
    }

    return () => {
      // manager.unload();
    };
  });

  return canvasRef;
}
