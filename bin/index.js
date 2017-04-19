#!/usr/bin/env node

const yargs = require('yargs');

yargs
  .usage('react-power <cmd> [args]')
  .command(
    'dev',
    'Run in development environment.',
    () => {},
    argv => {
      require('../lib/dev');
    }
  )
  .command(
    'build',
    'Run in production environment.',
    yargs => yargs.option('watch', {
      alias: 'w',
      default: false
    }),
    argv => {
      process._argv = argv
      require('../lib/clean');
      require('../lib/build');
    }
  )
  .command(
    'clean',
    'Clean the work directory.',
    () => {},
    argv => {
      require('../lib/clean');
    }
  )
  .command(
    '*',
    'The default command.',
    () => {},
    argv => {
    console.log('Command not found. Run `react-power --help` for usage.')
  })
  .help().argv;
