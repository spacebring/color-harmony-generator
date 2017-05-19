import 'jsdom-global/register';
import { expect } from 'chai';
import getGeneratedScheme, { HarmonyTypes } from '../src';

describe('fullScheme', () => {
  it('"#e56500" color with "triad" harmony', () => {
    expect(getGeneratedScheme('#e56500', HarmonyTypes.TRIAD)).to.deep.equal([
      'hsl(26, 100%, 45%)',
      'hsl(26, 100%, 55%)',
      'hsl(30, 100%, 60%)',
      'hsl(30, 100%, 50%)',
      'hsl(30, 90%, 50%)',
      'hsl(30, 100%, 50%)',
      'hsl(146, 100%, 45%)',
      'hsl(146, 100%, 55%)',
      'hsl(150, 100%, 60%)',
      'hsl(150, 100%, 50%)',
      'hsl(150, 90%, 50%)',
      'hsl(150, 100%, 50%)',
      'hsl(266, 100%, 45%)',
      'hsl(266, 100%, 55%)',
      'hsl(270, 100%, 60%)',
      'hsl(270, 100%, 50%)',
      'hsl(270, 90%, 50%)',
      'hsl(270, 100%, 50%)',
    ]);
  });
});
