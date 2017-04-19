#!/usr/bin/env bash

set -e

PATH=$(npm bin):$PATH
ROOT_DIR=$(cd $(dirname $0)/..; pwd)

cd $ROOT_DIR/examples/basic
npm install
npm run build
npm run clean

cd $ROOT_DIR/examples/multi
npm install
npm run build
npm run clean

cd $ROOT_DIR/examples/spa
npm install
npm run build
npm run clean
