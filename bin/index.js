#!/usr/bin/env node

const yargs = require('yargs');

yargs
  .usage('react-power <cmd> [args]')
  .command(
    'dev',
    'Run in development environment',
    () => {},
    argv => {
      require('../lib/dev');
    }
  )
  .command(
    'build',
    'Run in production environment',
    () => {},
    argv => {
      require('../lib/build');
    }
  )
  .help().argv;
