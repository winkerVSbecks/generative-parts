import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Vector, { createVector, toRadians } from './vector';
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

// export const RayCaster = withTheme(
//   ({ windowDims, theme, boundaries, light, interactions }) => {

//     return ;
//   },
// );

/**
 * Boundary
 * Surfaces that interact with light rays
 */
function createBoundary([x1, y1], [x2, y2], type) {
  const a = createVector(x1, y1);
  const b = createVector(x2, y2);

  return {
    a,
    b,
    type,
    draw(context) {
      context.lineWidth = 2;
      context.beginPath();
      context.moveTo(a.x, a.y);
      context.lineTo(b.x, b.y);
      context.stroke();
    },
  };
}

/**
 * Light Ray
 */
function createRay(position, angle, limit) {
  const dir = Vector.fromAngle(angle);

  return {
    lookAt(x, y) {
      dir.x = x - position.x;
      dir.y = y - position.y;
      dir.normalize();
    },
    cast(surface) {
      const x1 = surface.a.x;
      const y1 = surface.a.y;
      const x2 = surface.b.x;
      const y2 = surface.b.y;

      const x3 = position.x;
      const y3 = position.y;
      const x4 = position.x + dir.x;
      const y4 = position.y + dir.y;

      const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
      if (den === 0) {
        return;
      }

      const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
      const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;
      if (t > 0 && t < 1 && u > 0) {
        const pt = createVector();
        pt.x = x1 + t * (x2 - x1);
        pt.y = y1 + t * (y2 - y1);
        return pt;
      } else {
        return undefined;
      }
    },
    draw(context) {
      context.beginPath();
      context.moveTo(position.x, position.y);
      context.lineTo(position.x + dir.x * limit, position.y + dir.y * limit);
      context.stroke();
    },
  };
}

/**
 * Light Source
 * Generates rays in 360° and then casts
 * them onto the surfaces
 */
function createLight(x, y, limit) {
  const position = createVector(x, y);

  const rays = [...Array(360).keys()].map((_, a) =>
    createRay(position, toRadians(a), limit),
  );

  return {
    position,
    rays,
    draw(context) {
      context.lineWidth = 1;
      context.beginPath();
      context.ellipse(position.x, position.y, 5, 5, 0, 0, 2 * Math.PI);
      context.fill();
    },
  };
}

function look({ rays, position }, surfaces) {
  return rays.reduce((acc, ray) => {
    let closest = null;
    let closestSurface = null;
    let record = Infinity;

    surfaces.forEach(surface => {
      const pt = ray.cast(surface);

      if (pt) {
        const d = position.dist(pt);

        if (d < record) {
          record = d;
          closest = pt;
          closestSurface = surface;
        }
      }
    });

    return closest
      ? acc.concat([
          {
            a: [position.x, position.y],
            b: [closest.x, closest.y],
            type: closestSurface.type,
          },
        ])
      : acc;
  }, []);
}

export function useRayCasterEngine(
  { width = 0, height = 0 },
  surfaceDims,
  canvasRef,
  color = 'white',
) {
  const [lightVolumes, setLightVolumes] = useState({});
  let { x, y } = useWindowMousePosition();

  useEffect(() => {
    const light = createLight(x, y, Math.max(width, height));
    const p = 0; //4; // padding

    const surfaces = Object.keys(surfaceDims).map(name => ({
      name,
      dims: surfaceDims[name],
    }));

    const boundaries = surfaces
      .filter(s => s.dims)
      .map(({ dims: { top: t, left: l, bottom: b, right: r } = {}, name }) => [
        createBoundary([l - p, t - p], [r + p, t - p], name),
        createBoundary([r + p, t - p], [r + p, b + p], name),
        createBoundary([r + p, b + p], [l - p, b + p], name),
        createBoundary([l - p, b + p], [l - p, t - p], name),
      ])
      .flat();

    const interactions = look(light, boundaries);

    setLightVolumes(
      interactions.reduce((acc, ray) => {
        if (!acc[ray.type]) acc[ray.type] = 0;
        acc[ray.type] += 1 / 360;
        return acc;
      }, {}),
    );

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
      // boundaries.forEach(boundary => boundary.draw(context));
      light.draw(context);

      interactions.forEach(({ a, b }) => {
        context.beginPath();
        context.moveTo(...a);
        context.lineTo(...b);
        context.stroke();
      });
    }
  }, [width, height, surfaceDims, x, y, canvasRef, color]);

  return lightVolumes;
}
