/**
 * P5 Vector
 * from:
 * https://github.com/processing/p5.js/blob/0.8.0/src/math/p5.Vector.js#L12
 */
export default function Vector(x, y, z = 0) {
  this.x = x;
  this.y = y;
  this.z = z;
}

Vector.prototype.toString = function p5VectorToString() {
  return 'Vector Object : [' + this.x + ', ' + this.y + ', ' + this.z + ']';
};

Vector.prototype.set = function set(x, y, z) {
  if (x instanceof Vector) {
    this.x = x.x || 0;
    this.y = x.y || 0;
    this.z = x.z || 0;
    return this;
  }
  if (x instanceof Array) {
    this.x = x[0] || 0;
    this.y = x[1] || 0;
    this.z = x[2] || 0;
    return this;
  }
  this.x = x || 0;
  this.y = y || 0;
  this.z = z || 0;
  return this;
};

Vector.prototype.copy = function copy() {
  return new Vector(this.x, this.y, this.z);
};

Vector.prototype.add = function add(x, y, z) {
  if (x instanceof Vector) {
    this.x += x.x || 0;
    this.y += x.y || 0;
    this.z += x.z || 0;
    return this;
  }
  if (x instanceof Array) {
    this.x += x[0] || 0;
    this.y += x[1] || 0;
    this.z += x[2] || 0;
    return this;
  }
  this.x += x || 0;
  this.y += y || 0;
  this.z += z || 0;
  return this;
};

Vector.prototype.sub = function sub(x, y, z) {
  if (x instanceof Vector) {
    this.x -= x.x || 0;
    this.y -= x.y || 0;
    this.z -= x.z || 0;
    return this;
  }
  if (x instanceof Array) {
    this.x -= x[0] || 0;
    this.y -= x[1] || 0;
    this.z -= x[2] || 0;
    return this;
  }
  this.x -= x || 0;
  this.y -= y || 0;
  this.z -= z || 0;
  return this;
};

Vector.prototype.mult = function mult(n) {
  if (!(typeof n === 'number' && isFinite(n))) {
    console.warn(
      'Vector.prototype.mult:',
      'n is undefined or not a finite number',
    );
    return this;
  }
  this.x *= n;
  this.y *= n;
  this.z *= n;
  return this;
};

Vector.prototype.div = function div(n) {
  if (!(typeof n === 'number' && isFinite(n))) {
    console.warn(
      'Vector.prototype.div:',
      'n is undefined or not a finite number',
    );
    return this;
  }
  if (n === 0) {
    console.warn('Vector.prototype.div:', 'divide by 0');
    return this;
  }
  this.x /= n;
  this.y /= n;
  this.z /= n;
  return this;
};

Vector.prototype.mag = function mag() {
  return Math.sqrt(this.magSq());
};

Vector.prototype.magSq = function magSq() {
  var x = this.x;
  var y = this.y;
  var z = this.z;
  return x * x + y * y + z * z;
};

Vector.prototype.dot = function dot(x, y, z) {
  if (x instanceof Vector) {
    return this.dot(x.x, x.y, x.z);
  }
  return this.x * (x || 0) + this.y * (y || 0) + this.z * (z || 0);
};

Vector.prototype.cross = function cross(v) {
  var x = this.y * v.z - this.z * v.y;
  var y = this.z * v.x - this.x * v.z;
  var z = this.x * v.y - this.y * v.x;
  return new Vector(x, y, z);
};

Vector.prototype.dist = function dist(v) {
  return v
    .copy()
    .sub(this)
    .mag();
};

Vector.prototype.normalize = function normalize() {
  var len = this.mag();
  // here we multiply by the reciprocal instead of calling 'div()'
  // since div duplicates this zero check.
  if (len !== 0) this.mult(1 / len);
  return this;
};

Vector.prototype.limit = function limit(max) {
  var mSq = this.magSq();
  if (mSq > max * max) {
    this.div(Math.sqrt(mSq)) //normalize it
      .mult(max);
  }
  return this;
};

Vector.prototype.setMag = function setMag(n) {
  return this.normalize().mult(n);
};

Vector.prototype.heading = function heading() {
  var h = Math.atan2(this.y, this.x);
  return fromRadians(h);
};

Vector.prototype.rotate = function rotate(a) {
  var newHeading = this.heading() + a;
  newHeading = toRadians(newHeading);
  var mag = this.mag();
  this.x = Math.cos(newHeading) * mag;
  this.y = Math.sin(newHeading) * mag;
  return this;
};

Vector.prototype.angleBetween = function angleBetween(v) {
  var dotmagmag = this.dot(v) / (this.mag() * v.mag());
  // Mathematically speaking: the dotmagmag variable will be between -1 and 1
  // inclusive. Practically though it could be slightly outside this range due
  // to floating-point rounding issues. This can make Math.acos return NaN.
  //
  // Solution: we'll clamp the value to the -1,1 range
  var angle = Math.acos(Math.min(1, Math.max(-1, dotmagmag)));
  return fromRadians(angle);
};

Vector.prototype.lerp = function lerp(x, y, z, amt) {
  if (x instanceof Vector) {
    return this.lerp(x.x, x.y, x.z, y);
  }
  this.x += (x - this.x) * amt || 0;
  this.y += (y - this.y) * amt || 0;
  this.z += (z - this.z) * amt || 0;
  return this;
};

Vector.prototype.array = function array() {
  return [this.x || 0, this.y || 0, this.z || 0];
};

Vector.prototype.equals = function equals(x, y, z) {
  var a, b, c;
  if (x instanceof Vector) {
    a = x.x || 0;
    b = x.y || 0;
    c = x.z || 0;
  } else if (x instanceof Array) {
    a = x[0] || 0;
    b = x[1] || 0;
    c = x[2] || 0;
  } else {
    a = x || 0;
    b = y || 0;
    c = z || 0;
  }
  return this.x === a && this.y === b && this.z === c;
};

Vector.fromAngle = function fromAngle(angle, length) {
  if (typeof length === 'undefined') {
    length = 1;
  }
  return new Vector(length * Math.cos(angle), length * Math.sin(angle), 0);
};

Vector.fromAngles = function(theta, phi, length) {
  if (typeof length === 'undefined') {
    length = 1;
  }
  var cosPhi = Math.cos(phi);
  var sinPhi = Math.sin(phi);
  var cosTheta = Math.cos(theta);
  var sinTheta = Math.sin(theta);

  return new Vector(
    length * sinTheta * sinPhi,
    -length * cosTheta,
    length * sinTheta * cosPhi,
  );
};

Vector.random2D = function random2D() {
  return this.fromAngle(Math.random() * 2 * Math.PI);
};

Vector.random3D = function random3D() {
  var angle = Math.random() * 2 * Math.PI;
  var vz = Math.random() * 2 - 1;
  var vzBase = Math.sqrt(1 - vz * vz);
  var vx = vzBase * Math.cos(angle);
  var vy = vzBase * Math.sin(angle);
  return new Vector(vx, vy, vz);
};

Vector.add = function add(v1, v2, target) {
  if (!target) {
    target = v1.copy();
  } else {
    target.set(v1);
  }
  target.add(v2);
  return target;
};

Vector.sub = function sub(v1, v2, target) {
  if (!target) {
    target = v1.copy();
  } else {
    target.set(v1);
  }
  target.sub(v2);
  return target;
};

Vector.mult = function mult(v, n, target) {
  if (!target) {
    target = v.copy();
  } else {
    target.set(v);
  }
  target.mult(n);
  return target;
};

Vector.div = function div(v, n, target) {
  if (!target) {
    target = v.copy();
  } else {
    target.set(v);
  }
  target.div(n);
  return target;
};

Vector.dot = function dot(v1, v2) {
  return v1.dot(v2);
};

Vector.cross = function cross(v1, v2) {
  return v1.cross(v2);
};

Vector.dist = function dist(v1, v2) {
  return v1.dist(v2);
};

Vector.lerp = function lerp(v1, v2, amt, target) {
  if (!target) {
    target = v1.copy();
  } else {
    target.set(v1);
  }
  target.lerp(v2, amt);
  return target;
};

Vector.mag = function mag(vecT) {
  var x = vecT.x,
    y = vecT.y,
    z = vecT.z;
  var magSq = x * x + y * y + z * z;
  return Math.sqrt(magSq);
};

export function createVector(x, y, z) {
  return new Vector(x, y, z);
}

const DEG_TO_RAD = Math.PI / 180;
const RAD_TO_DEG = 180 / Math.PI;

export function toRadians(angle) {
  return angle * DEG_TO_RAD;
}

export function fromRadians(angle) {
  return angle * RAD_TO_DEG;
}
