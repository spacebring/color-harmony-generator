import 'jsdom-global/register';
import { expect } from 'chai';
import { HarmonyTypes, fromHex, fullScheme } from '../src';

describe('fullScheme', () => {
  it('"#e56500" color with "triad" harmony', () => {
    expect(fullScheme('#e56500', HarmonyTypes.TRIAD)).to.deep.equal([
      '#e56500',
      '#ff7e19',
      '#ff9732',
      '#fe7d00',
      '#f17d0d',
      '#fe7d00',
      '#00e565',
      '#19ff7e',
      '#32ff97',
      '#00fe7d',
      '#0df17d',
      '#00fe7d',
      '#6500e5',
      '#7e19ff',
      '#9732ff',
      '#7d00fe',
      '#7d0df1',
      '#7d00fe',
    ]);
  });
});

describe('fromHex', () => {
  it('"#e56500" color', () => {
    expect(fromHex('#e56500')).to.deep.equal({ r: 229, g: 101, b: 0 });
  });
});
