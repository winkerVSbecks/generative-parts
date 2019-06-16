import chroma from 'chroma-js';

export function lightToStyles(light = {}, colors) {
  const { volume = 0 } = light;

  return {
    // '--material-white': chroma
    //   .mix('white', colors.tertiary, mapRange(lightVolume, 0, 1, 0.2, 1), 'hsl')
    //   .css(),
    // '--material-white': chroma(colors.tertiary)
    //   .luminance(mapRange(lightVolume, 0, 1, 0.5, 1))
    //   .css(),
    transitionProperty: 'color, background-color',
    transitionDuration: '0.15s',
    transitionTimingFunction: 'ease-in-out',
    '--material-white': chroma
      .scale([colors.tertiary, colors.materialWhite])
      .domain([0, 0.25, 1])(mapRange(volume, 0, 1, 0, 1))
      .css(),
    '--material-gray': chroma(colors.materialGray)
      .darken(mapRange(volume, 0, 1, 2, 0))
      .css(),
    boxShadow: shadow(light),
  };
}

function shadow({ volume = 0, direction = [0, 0], distance = 0 }) {
  const [x, y] = direction;
  const xOff = shadowOffset(x);
  const yOff = shadowOffset(y);
  const opacity = mapRange(volume, 0, 1, 0, 0.2);

  return `${xOff}px ${yOff}px 8px 0 rgba(0, 0, 0, ${opacity})`;
}

function shadowOffset(v) {
  return mapRange(v, -1, 1, 8, -8).toFixed(3);
}

function constrain(n, low, high) {
  return Math.max(Math.min(n, high), low);
}

function mapRange(n, start1, stop1, start2, stop2) {
  const value = ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
  if (start2 < stop2) {
    return constrain(value, start2, stop2);
  } else {
    return constrain(value, stop2, start2);
  }
}
