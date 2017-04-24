const path = require('path')
const Promise = require('bluebird')
const chalk = require('chalk')
const fs = Promise.promisifyAll(require('fs'))
const config = require('./loadConfig')

async function unlinkRecursive(basedir) {
  try {
    const filenames = await fs.readdirAsync(basedir)

    await Promise.all(
      filenames.map(async filename => {
        const absoluteFilename = path.resolve(basedir, filename)
        const stats = await fs.statAsync(absoluteFilename)

        if (stats.isDirectory()) {
          return unlinkRecursive(absoluteFilename)
        } else if (stats.isFile()) {
          return fs.unlinkAsync(absoluteFilename)
        }
      })
    )
    await fs.rmdirAsync(basedir)
  } catch (e) {}
}

unlinkRecursive(config.output)
