const path = require('path')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  contexy: path.resolve(__dirname, '../'),
  entry: {
    app: './src/index.js'
  },
  output: {
    
  }
}