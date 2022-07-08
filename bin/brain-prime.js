#!/usr/bin/env node
import { startPrimeGame } from '../src/games/brain-prime.js';
import { input } from '../src/cli.js';

startPrimeGame(input());
