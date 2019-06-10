import Vector, { createVector, toRadians } from './vector';

function createBoundary([x1, y1], [x2, y2]) {
  const a = createVector(x1, y1);
  const b = createVector(x2, y2);

  return {
    a,
    b,
    draw(context) {
      context.lineWidth = 2;
      context.beginPath();
      context.moveTo(a.x, a.y);
      context.lineTo(b.x, b.y);
      context.stroke();
    },
  };
}

function createRay(position, angle, limit) {
  const dir = Vector.fromAngle(angle);

  return {
    lookAt(x, y) {
      dir.x = x - position.x;
      dir.y = y - position.y;
      dir.normalize();
    },
    cast(wall) {
      const x1 = wall.a.x;
      const y1 = wall.a.y;
      const x2 = wall.b.x;
      const y2 = wall.b.y;

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

function createLight(x, y, limit) {
  const position = createVector(x, y);

  const rays = [...Array(360).keys()].map((_, a) =>
    createRay(position, toRadians(a), limit),
  );

  return {
    rays,
    look(walls, context) {
      for (let i = 0; i < rays.length; i++) {
        const ray = rays[i];
        let closest = null;
        let record = Infinity;
        for (let wall of walls) {
          const pt = ray.cast(wall);
          if (pt) {
            const d = Vector.dist(this.pos, pt);
            if (d < record) {
              record = d;
              closest = pt;
            }
          }
        }
        if (closest) {
          context.lineWidth = 1;
          context.beginPath();
          context.moveTo(position.x, position.y);
          context.lineTo(closest.x, closest.y);
          context.stroke();
        }
      }
    },
    draw(context) {
      context.lineWidth = 1;
      context.beginPath();
      context.ellipse(position.x, position.y, 5, 5, 0, 0, 2 * Math.PI);
      context.stroke();
    },
  };
}

export function RayCasterEngine(
  width = 0,
  height = 0,
  { typeSw, profile, nav, media, search, black, primary, secondary },
) {
  const light = createLight(width * 0.6, height * 0.1, Math.max(width, height));
  const p = 4; // padding
  const surfaces = [
    typeSw,
    profile,
    nav,
    media,
    search,
    black,
    primary,
    secondary,
  ]
    .filter(x => x)
    .map(({ top: t, left: l, bottom: b, right: r }) => [
      createBoundary([l - p, t - p], [r + p, t - p]),
      createBoundary([r + p, t - p], [r + p, b + p]),
      createBoundary([r + p, b + p], [l - p, b + p]),
      createBoundary([l - p, b + p], [l - p, t - p]),
    ])
    .flat();

  return {
    draw(context) {
      // light.rays.forEach(ray => ray.draw(context));
      light.draw(context);
      surfaces.forEach(surface => surface.draw(context));
    },
  };
}
