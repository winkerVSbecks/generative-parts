import React, { useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import canvasSketch from 'canvas-sketch';

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

function useRayCasterDebug({
  typeSwDims,
  profileDims,
  NavDims,
  mediaDims,
  SearchDims,
  blackDims,
  primaryDims,
  secondaryDims,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.width = window.innerWidth * 2;
      canvasRef.current.height = window.innerHeight * 2;
      canvasRef.current.style.width = `${window.innerWidth}px`;
      canvasRef.current.style.height = `${window.innerHeight}px`;
      console.log(window.innerWidth, window.innerHeight);

      const context = canvasRef.current.getContext('2d');

      context.scale(2, 2);
      // context.fillStyle = 'pink';
      // context.fillRect(0, 0, 50, 50);

      context.strokeStyle = 'black';
      context.lineWidth = 4;
      [
        typeSwDims,
        profileDims,
        NavDims,
        mediaDims,
        SearchDims,
        blackDims,
        primaryDims,
        secondaryDims,
      ].forEach(surface => {
        context.strokeRect(surface.x, surface.y, surface.width, surface.height);
      });
    }

    return () => {
      // manager.unload();
    };
  });

  return canvasRef;
}

export const RayCaster = ({
  typeSwDims,
  profileDims,
  NavDims,
  mediaDims,
  SearchDims,
  blackDims,
  primaryDims,
  secondaryDims,
}) => {
  const canvasRef = useRayCasterDebug({
    typeSwDims,
    profileDims,
    NavDims,
    mediaDims,
    SearchDims,
    blackDims,
    primaryDims,
    secondaryDims,
  });

  return (
    <React.Fragment>
      <RayCasterDebug ref={canvasRef} />
    </React.Fragment>
  );
};
