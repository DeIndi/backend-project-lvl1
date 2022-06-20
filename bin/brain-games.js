#!/usr/bin/env node
import { Even } from '../games/brain-even.js';
import { Calc } from '../games/brain-calc.js';
import { gcdLoop } from '../games/brain-gcd.js';
import { Progression } from '../games/brain-progression.js';
import { PrimeGame } from '../games/brain-prime.js';
// eslint-disable-next-line import/named
import { input } from '../src/cli.js';

console.log('Welcome to the Brain Games!');
Even(input());
Calc(input());
gcdLoop(input());
Progression(input());
PrimeGame(input());
