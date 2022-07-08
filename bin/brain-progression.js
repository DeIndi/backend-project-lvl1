#!/usr/bin/env node
import { startProgressionGame } from '../src/games/brain-progression.js';
import { input } from '../src/cli.js';

startProgressionGame(input());
