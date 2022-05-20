#!/usr/bin/env node
import { Even } from './brain-even.js';
import { Calc } from './brain-calc.js';
import { gcdLoop } from './brain-gcd.js';
import { Progression } from './brain-progression.js';
import { PrimeGame } from './brain-prime.js';
// eslint-disable-next-line import/named
import { input } from '../src/cli.js';

console.log('Welcome to the Brain Games!');
Even(input());
Calc(input());
gcdLoop(input());
Progression(input());
PrimeGame(input());
