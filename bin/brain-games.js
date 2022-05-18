#!/usr/bin/env node
import { Even } from '../bin/brain-even.js';
import { Calc } from '../bin/brain-calc.js';
import { GcD_Loop } from '../bin/brain-gcd.js';
// eslint-disable-next-line import/named
import { input } from '../src/cli.js';

console.log('Welcome to the Brain Games!');
//Even(input());
//Calc(input());
GcD_Loop(input());
