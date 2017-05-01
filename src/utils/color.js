import tinycolor from 'tinycolor2';

export function fullScheme(mainColor, scheme) {
  const colors = tinycolor(mainColor)[scheme]();
  const result = [];
  Object.keys(colors).forEach((colorKey) => {
    const color = colors[colorKey];
    result.push(`#${color.toHex()}`);
    result.push(`#${color.lighten().toHex()}`);
    result.push(`#${color.brighten().toHex()}`);
    result.push(`#${color.darken().toHex()}`);
    result.push(`#${color.desaturate().toHex()}`);
    result.push(`#${color.saturate().toHex()}`);
  });
  return result;
}

export function fromHex(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    }
    : null;
}
