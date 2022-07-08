#!/usr/bin/env node
import { startGcdGame } from '../src/games/brain-gcd.js';
import { input } from '../src/cli.js';

startGcdGame(input());
