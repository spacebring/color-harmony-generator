import hsl2rgb from 'pure-color/convert/hsl2rgb';
import rgb2hsl from 'pure-color/convert/rgb2hsl';

function clamp0100(val) {
  return Math.min(100, Math.max(0, val));
}

export function lighten(hsl) {
  const amount = 1000;
  return [hsl[0], hsl[1], clamp0100(hsl[2] + (amount / 100))];
}

export function brighten(hsl) {
  const rgb = hsl2rgb(hsl);
  const amount = 10;
  const resRGB = [
    Math.max(0, Math.min(255, rgb[0] - (255 * -(amount / 100)))),
    Math.max(0, Math.min(255, rgb[1] - (255 * -(amount / 100)))),
    Math.max(0, Math.min(255, rgb[2] - (255 * -(amount / 100)))),
  ];
  return rgb2hsl(resRGB);
}

export function darken(hsl) {
  const amount = 1000;
  return [hsl[0], hsl[1], clamp0100(hsl[2] - (amount / 100))];
}

export function desaturate(hsl) {
  const amount = 1000;
  return [hsl[0], clamp0100(hsl[1] - (amount / 100)), hsl[2]];
}

export function saturate(hsl) {
  const amount = 1000;
  return [hsl[0], clamp0100(hsl[1] + (amount / 100)), hsl[2]];
}
