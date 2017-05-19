import tinycolor from 'tinycolor2';

export default (mainColor, scheme) => {
  const colors = tinycolor(mainColor)[scheme]();
  const result = [];
  Object.keys(colors).forEach((colorKey) => {
    const color = colors[colorKey];
    result.push(color.toHslString());
    result.push(color.lighten().toHslString());
    result.push(color.brighten().toHslString());
    result.push(color.darken().toHslString());
    result.push(color.desaturate().toHslString());
    result.push(color.saturate().toHslString());
  });
  return result;
};
