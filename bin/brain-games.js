#!/usr/bin/env node
import { Even } from '../bin/brain-even.js';
// eslint-disable-next-line import/named
import { input } from '../src/cli.js';

console.log('Welcome to the Brain Games!');
Even(input());
