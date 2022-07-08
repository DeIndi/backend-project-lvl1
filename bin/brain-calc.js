#!/usr/bin/env node
import { Calc } from '../src/games/brain-calc.js';
import { input } from '../src/cli.js';

Calc(input());
