#!/usr/bin/env node
import { startCalcGame } from '../src/games/brain-calc.js';
import { input } from '../src/cli.js';

startCalcGame(input());
