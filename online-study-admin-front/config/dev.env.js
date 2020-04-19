'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://127.0.0.1:8110"',
  UPLOAD_API:'"http://127.0.0.1:8130"',
  OSS_PATH: '"https://onlline-study-file.oss-cn-beijing.aliyuncs.com"'
})
