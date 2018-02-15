#!/usr/bin/env node
const shell = require('shelljs');
const path = require('path');

const dir = path.resolve(__dirname, '..');

console.log("Start executing shell commands...");

shell.exec(`npm run --prefix ${dir} index`);

console.log("Finish executing shell commands...");
