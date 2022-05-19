#!/usr/bin/env node
import { Even } from './brain-even.js';
import { Calc } from './brain-calc.js';
import { GcD_Loop } from './brain-gcd.js';
import { Progression } from './brain-progression.js';
// eslint-disable-next-line import/named
import { input } from '../src/cli.js';

console.log('Welcome to the Brain Games!');
// Even(input());
// Calc(input());
//GcD_Loop(input());
Progression(input());
