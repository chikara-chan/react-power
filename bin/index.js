#!/usr/bin/env node

const yargs = require('yargs');

yargs
  .usage('react-power <cmd> [args]')
  .command(
    'dev',
    'Run in development environment',
    () => {},
    argv => {
      require('../lib/dev')(argv);
    }
  )
  .command('build', 'Run in production environment', () => {}, argv => {})
  .command('test', 'Run in test environment', () => {}, argv => {})
  .help().argv;
