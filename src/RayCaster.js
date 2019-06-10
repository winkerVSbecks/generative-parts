import React, { useRef, useEffect, useState } from 'react';
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
  const size = useWindowSize();

  const canvasRef = useRayCasterDebug(size, {
    typeSwDims,
    profileDims,
    NavDims,
    mediaDims,
    SearchDims,
    blackDims,
    primaryDims,
    secondaryDims,
  });
  console.log(typeSwDims.x, typeSwDims.y);

  return (
    <React.Fragment>
      <RayCasterDebug ref={canvasRef} />
    </React.Fragment>
  );
};

function useRayCasterDebug(
  { width, height },
  {
    typeSwDims,
    profileDims,
    NavDims,
    mediaDims,
    SearchDims,
    blackDims,
    primaryDims,
    secondaryDims,
  },
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

function useWindowSize() {
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}
