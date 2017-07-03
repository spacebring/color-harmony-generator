import isUndefined from 'lodash/isUndefined';
import * as harmonyGenerators from './harmony-generators';
import {
  lighten,
  brighten,
  darken,
  desaturate,
  saturate,
} from './color-utils';

export default (colorMain, scheme) => {
  const harmonyGenerator = harmonyGenerators[scheme];
  if (isUndefined(harmonyGenerator)) {
    return undefined;
  }
  const colors = harmonyGenerator(colorMain);
  const result = [];
  colors.forEach((color) => {
    result.push(`hsl(${Math.round(color[0])}, ${Math.round(color[1])}%, ${Math.round(color[2])}%)`);
    const colorLighten = lighten(color);
    result.push(`hsl(${Math.round(colorLighten[0])}, ${Math.round(colorLighten[1])}%, ${Math.round(colorLighten[2])}%)`);
    const colorBrighten = brighten(colorLighten);
    result.push(`hsl(${Math.round(colorBrighten[0])}, ${Math.round(colorBrighten[1])}%, ${Math.round(colorBrighten[2])}%)`);
    const colorDarken = darken(colorBrighten);
    result.push(`hsl(${Math.round(colorDarken[0])}, ${Math.round(colorDarken[1])}%, ${Math.round(colorDarken[2])}%)`);
    const colorDesaturated = desaturate(colorDarken);
    result.push(`hsl(${Math.round(colorDesaturated[0])}, ${Math.round(colorDesaturated[1])}%, ${Math.round(colorDesaturated[2])}%)`);
    const colorSaturated = saturate(colorDesaturated);
    result.push(`hsl(${Math.round(colorSaturated[0])}, ${Math.round(colorSaturated[1])}%, ${Math.round(colorSaturated[2])}%)`);
  });
  return result;
};
