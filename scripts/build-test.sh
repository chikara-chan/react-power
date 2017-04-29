#!/usr/bin/env bash

set -e

PATH=$(npm bin):$PATH
ROOT_DIR=$(cd $(dirname $0)/..; pwd)

cd $ROOT_DIR/examples/0-basic
npm install
npm run build
npm run clean

cd $ROOT_DIR/examples/1-multi
npm install
npm run build
npm run clean

cd $ROOT_DIR/examples/2-spa
npm install
npm run build
npm run clean

cd $ROOT_DIR/examples/3-complex
npm install
npm run build
npm run clean
