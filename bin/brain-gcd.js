#!/usr/bin/env node
import { gcdLoop } from '../src/games/brain-gcd.js';
import { input } from '../src/cli.js';

gcdLoop(input());
