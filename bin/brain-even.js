#!/usr/bin/env node
import { startEvenGame } from '../src/games/brain-even.js';
import { input } from '../src/cli.js';

startEvenGame(input());
