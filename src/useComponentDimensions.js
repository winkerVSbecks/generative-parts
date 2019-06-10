import { useRef, useCallback, useState, useLayoutEffect } from 'react';

function getSize(el) {
  if (!el) {
    return {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    };
  }

  const { x, y, width, height } = el.getBoundingClientRect();
  console.log(el, { x, y, width, height });

  return {
    x,
    y,
    width,
    height,
  };
}

export function useComponentDimensions() {
  const ref = useRef(null);

  let [ComponentDimensions, setComponentDimensions] = useState(
    getSize(ref ? ref.current : {}),
  );

  const handleResize = useCallback(
    function handleResize() {
      if (ref.current) {
        setComponentDimensions(getSize(ref.current));
      }
    },
    [ref],
  );

  useLayoutEffect(() => {
    if (!ref.current) {
      return;
    }

    handleResize();

    if (typeof ResizeObserver === 'function') {
      let resizeObserver = new ResizeObserver(() => handleResize());
      resizeObserver.observe(ref.current);

      return () => {
        resizeObserver.disconnect(ref.current);
        resizeObserver = null;
      };
    } else {
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [ref.current]);

  return [ref, ComponentDimensions];
}
