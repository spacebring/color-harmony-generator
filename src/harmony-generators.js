import parse from 'pure-color/parse';
import hsv2hsl from 'pure-color/convert/hsv2hsl';
import rgb2hsl from 'pure-color/convert/rgb2hsl';
import rgb2hsv from 'pure-color/convert/rgb2hsv';

export function triad(color) {
  const rgb = parse(color);
  const hsl = rgb2hsl(rgb);
  return [
    hsl,
    [(hsl[0] + 120) % 360, hsl[1], hsl[2]],
    [(hsl[0] + 240) % 360, hsl[1], hsl[2]],
  ];
}

export function tetrad(color) {
  const rgb = parse(color);
  const hsl = rgb2hsl(rgb);
  return [
    hsl,
    [(hsl[0] + 90) % 360, hsl[1], hsl[2]],
    [(hsl[0] + 180) % 360, hsl[1], hsl[2]],
    [(hsl[0] + 270) % 360, hsl[1], hsl[2]],
  ];
}

export function splitcomplement(color) {
  const rgb = parse(color);
  const hsl = rgb2hsl(rgb);
  return [
    hsl,
    [(hsl[0] + 72) % 360, hsl[1], hsl[2]],
    [(hsl[0] + 216) % 360, hsl[1], hsl[2]],
  ];
}

export function analogous(color) {
  const rgb = parse(color);
  const hsl = rgb2hsl(rgb);
  const res = [hsl];
  let results = 6;
  const slices = 30;
  const hslCopy = [hsl[0], hsl[1], hsl[2]];
  const part = 360 / slices;
  /* eslint-disable no-bitwise, no-plusplus */
  for (hslCopy[0] = ((hslCopy[0] - (part * results >> 1)) + 720) % 360; --results;) {
    hslCopy[0] = (hslCopy[0] + part) % 360;
    res.push([hslCopy[0], hslCopy[1], hslCopy[2]]);
  }
  /* eslint-enable no-bitwise, no-plusplus */
  return res;
}

export function monochromatic(color) {
  let results = 6;
  const rgb = parse(color);
  const hsv = rgb2hsv(rgb);
  let v = hsv[2];
  const ret = [];
  const modification = 1 / results;
  /* eslint-disable no-plusplus */
  while (results--) {
    ret.push(
      hsv2hsl([
        hsv[0],
        hsv[1],
        v,
      ]),
    );
    v = (v + (100 * modification)) % 100;
  }
  /* eslint-enable no-plusplus */
  return ret;
}
