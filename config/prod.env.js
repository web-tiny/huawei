'use strict'
const devEnv = require('./env')

module.exports = {
  NODE_ENV: '"production"',
  NODE_DEV: `"${devEnv()}"`
}
