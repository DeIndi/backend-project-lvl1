#!/usr/bin/env node
import { Even } from '../src/games/brain-even.js';
import { Calc } from '../src/games/brain-calc.js';
import { gcdLoop } from '../src/games/brain-gcd.js';
import { Progression } from '../games/src/brain-progression.js';
import { PrimeGame } from '../games/src/brain-prime.js';
// eslint-disable-next-line import/named
import { input } from '../src/cli.js';

console.log('Welcome to the Brain Games!');
Even(input());
Calc(input());
gcdLoop(input());
Progression(input());
PrimeGame(input());
